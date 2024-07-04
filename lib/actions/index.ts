"use server"

import { revalidatePath } from "next/cache";
import Product from "../models/product.model";
import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";
import { getAveragePrice, getHighestPrice, getLowestPrice } from "../utils";
import { User } from "@/types";


export async function scrapeAndStoreProduct(productURL : string){
    if(!productURL)return;

    try{
        await connectToDB();
        const scrapedProduct = await scrapeAmazonProduct(productURL);
        if(!scrapedProduct) return;
        let product = scrapedProduct;

        const existingProduct = await Product.findOne({url: scrapedProduct.url});
        if(existingProduct){
            const updatedPriceHistory: any = [
                ...existingProduct.priceHistory,
                {price: scrapedProduct.currentPrice}
            ]

            product = {
                ...scrapedProduct,
                priceHistory: updatedPriceHistory,
                lowestPrice: getLowestPrice(updatedPriceHistory),
                highestPrice: getHighestPrice(updatedPriceHistory),
                averagePrice: getAveragePrice(updatedPriceHistory),
            }
        }
        const newProduct = await Product.findOneAndUpdate(
            {url: scrapedProduct.url},
            product,
            {upsert: true, new:true}
        );

        revalidatePath(`/products/${newProduct._id}`);
    }catch(error: any){
        throw new Error(`failed to update/create Product: ${error.message}`)
    }
}

export async function getProductById(productId: string) {
    try {
      connectToDB();
  
      const product = await Product.findOne({ _id: productId });
  
      if(!product) return null;
  
      return product;
    } catch (error) {
      console.log(error);
    }
  }

export async function getTrendingProducts(){
    try{
        await connectToDB();
        const topProducts = await Product.find().sort({ highestPrice: -1 }).limit(6);
        return topProducts;
    }catch(error){
        console.log(error);
    }
}


export async function getSimilarProducts(productId : string){
    try{
        await connectToDB();
        const currentProduct = await Product.findById(productId);
        if(!currentProduct)return null;
        const similarProducts = await Product.find({_id: {$ne:productId}}).limit(3);
        return similarProducts;
    }catch(error){
        console.log(error);
    }
}


export async function addUserEmailToProduct(productId: string,userEmail: string){
    try{
        //send our first email
        const product = await Product.findById(productId);
        if(!product) return;

        const userExist = product.users.some((user : User)=>user.email===userEmail);

        if(userExist)

    }catch(error){

    }
}

