import React from 'react'

const HowToUse = () => {
  return (
    <div className="flex bg-primary flex-col gap-4 p-4 py-8 rounded-xl">
    <div className="text-3xl text-white font-semibold flex justify-center">
        <div>How This Works</div>
    </div>
    <div className="flex flex-col sm:flex-row bg-primary gap-4 p-4 text-[#FF6969] font-medium">
        <div className="flex flex-col bg-white rounded-lg p-4 text-center flex-1">
            <div className="text-[#C80036] font-semibold">Product Link</div>
            <div className="mt-2">Copy the Amazon product Link you want to track.</div>
        </div>
        <div className="flex flex-col bg-white rounded-lg p-4 text-center flex-1">
            <div className="text-[#C80036] font-semibold">Search</div>
            <div className="mt-2">Click on search to add your product in our database to track.</div>
        </div>
        <div className="flex flex-col bg-white rounded-lg p-4 text-center flex-1">
            <div className="text-[#C80036] font-semibold">Subscribe</div>
            <div className="mt-2">Enter your Email to get notifications on your device.</div>
        </div>
    </div>
    <div className="text-3xl text-white font-semibold flex justify-center">
        <div>And voila, your product will be tracked!</div>
    </div>
</div>


  )
}

export default HowToUse
