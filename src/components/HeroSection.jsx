import React from 'react'
import herosection from "../assets/herosection.jpg"
const HeroSection = () => {
  return (
    <div className="bg-gray-300 flex-col sm:flex-row flex h-full w-full justify-between px-20">
        <div className="sm:w-1/2 sm:mt-20 mt-10">
            <h1 className="text-black text-2xl space-y-2 sm:text-5xl sm:pb-10 pb-4 font-semibold">Find job in Japan with <br />
            MOBILICIS</h1>
            <p className="text-black text-xl font-medium">Find your dream job in Japan</p>
           <div className="flex sm:gap-20 flex-col sm:flex-row">
           <button className=" border-2 border-black hover:bg-green-500 hover:border-transparent hover:ease-in-out hover:-translate-y-1 hover:duration-300 font-medium px-10 py-4 rounded-2xl mt-10">Find Job</button>

           <button className=" border-2 border-black hover:bg-green-500 hover:border-transparent hover:ease-in-out hover:-translate-y-1 hover:duration-300 font-medium px-10 py-4 rounded-2xl mt-10">List Job</button>
        
           </div>
            </div>
        <div className="h-96 flex mx-auto rounded-2xl py-10">
            <img src={herosection} className="rounded-xl" alt="herosection" />
        </div>
        
    </div>
  )
}

export default HeroSection