"use client"
import { scrapeAndStoreProduct } from '@/lib/actions';
import React, { FormEvent, useState } from 'react'

const isValidAmazonProductURL=(url: string)=>{
  try{
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if(
      hostname.includes('amazon.com') ||
      hostname.includes('amazon.') ||
      hostname.includes("amazon")
    ){
      return true;
    }
  }catch(error){
    return false;
  }
}
const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState('');
    const [loading,setLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const isValidLink = isValidAmazonProductURL(searchPrompt);
        if(!isValidLink) return alert('Please provide a valid link');

        try{
          setLoading(true);

          //scrape the product page
          const product = await scrapeAndStoreProduct(searchPrompt);
          
        }catch(error){
          console.log(error)
        }finally{
          setLoading(false);
        }
    }
  return (
    <div>
      <form className='flex flex-wrap gap-4 mt-12'
      onSubmit={handleSubmit}>
        <input type="text" value={searchPrompt} placeholder='Enter Product Link' className='searchbar-input' onChange={(e)=>setSearchPrompt(e.target.value)} />
        <button type='submit' className='searchbar-btn' disabled={searchPrompt===''}>{loading ? 'Searching...':'Search'}</button>
      </form>
    </div>
  )
}

export default Searchbar
