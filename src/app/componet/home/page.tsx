import React from 'react'
import Image from 'next/image'
import Navbar from '../navbar/page'

export default function page() {
    return (
        <div>
            
            <div className="-mt-24 relative w-full py-12 px-12 bg-yellow-900">

            <div className="relative z-10 text-center py-5 md:py-10">
            <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold  ">Simple Blogging</h1>
           </div>
                
                <div className="relative z-10 text-center py-20 md:py-40">
                    
                    <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12">A taste of every lifestyle</h1>
                    <a href="{{ home.button_link }}" className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4">READ THE BLOG</a>
                </div>

                <div className="relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm">
                    <a href="" className="border-b border-white"></a>
                    <a href="#" className="border-b border-white"></a>
                </div>

                <Image src="/images/coverImage.png"
                width={500}
                height={300}
                priority={true}
                alt="Login image"
                className="w-full h-full absolute inset-0 object-cover opacity-70" />
            </div>
        </div>
    )
}
