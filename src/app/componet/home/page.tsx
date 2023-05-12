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

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24">
                <div>
                    <div className="bg-gray-50 p-8">
                        <div className="text-xs text-gray-600 uppercase font-semibold">5/11/2023</div>
                        <h2 className="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
                            CDE
                        </h2>
                        fuck
                        <p className="mt-4 max-w-md">
                            BBBBBBBBBBBBBBBBBBBBBBBBBBB
                        </p>

                        <a href="{{ post.url | url }}" className="flex items-center mt-6 uppercase text-sm text-black font-semibold">
                            Read article
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg>
                        </a>
                    </div>
                    {/* <a href="{{ post.url | url }}">
                <img src="{{ post.data.image }}" class="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover" />
            </a> */}

                    <div className="bg-gray-50 p-8">
                        <div className="text-xs text-gray-600 uppercase font-semibold">5/11/2023</div>
                        <h2 className="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
                            CDE
                        </h2>
                        fuck
                        <p className="mt-4 max-w-md">
                            BBBBBBBBBBBBBBBBBBBBBBBBBBB
                        </p>

                        <a href="{{ post.url | url }}" className="flex items-center mt-6 uppercase text-sm text-black font-semibold">
                            Read article
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7"></path></svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>

    )
}
