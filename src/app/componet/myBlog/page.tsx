'use client';
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/page'
import { GetBlog } from '../../services/blogservices'
import { UpdateBlog } from '../../services/blogservices';

export default function page() {

    const [authorName,setAuthorName] = useState ("");
    const [postTitle,setPostTitle] = useState ("");
    const [postBody,setPostBody] = useState ("");
    const [createdDate,setCreatedDate] = useState ("");

    const blogHandler = async () => {

        const blogData = {
            authorName: authorName,
            postTitle: postTitle,
            postBody: postBody,
            createdDate: createdDate,
            
          };
      
          try {
            const response = await UpdateBlog(blogData);
            // Handle the response as needed
            console.log(response);
            
            // Clear the input fields after successful registration
           
          } catch (error) {
            // Handle the registration error
            console.error(error);
          }

    }

    const [blog, setBlogs] = useState<{
        authorName: string;
        postTitle: string;
        postBody: string;
        createdDate: string;
    }[]>([]);


    useEffect(() => {
        try {

            GetBlog()
                .then(res => setBlogs(res));



            // Clear the input fields after successful registration

        } catch (error) {
            // Handle the registration error
            console.error(error);
        }
    }, [])

    console.log(authorName)
    console.log(authorName)


    return (
        <div>
            <Navbar />
            <form>

                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                ><ul >{blog.map((item) => (<li>
                    <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                    </div>

                    <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">

                        <div>
                            <label className="text-input-label">Author's Name</label>
                            <input type="text" className='placeholder:text-slate-400 block text-white dark:bg-gray-700 w- border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                                value={item.authorName} onChange={(e) => setAuthorName(e.target.value)} />
                        </div>

                        <div className="date-input" id='dateCon'>
                            <label className="date-input-label">Date-:</label>
                            <input className="placeholder:text-slate-400 block text-white dark:bg-gray-700  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                type="date" placeholder="Select a date"
                                value={item.createdDate}
                                onChange={(e) => setCreatedDate(e.target.value)} />
                        </div>

                        <div >
                            <label className="text-input-label">Blog Title</label>
                            <input className="placeholder:text-slate-400 block text-white dark:bg-gray-700  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Blog Title..." type="text"
                                value={item.postTitle} onChange={(e) => setPostTitle(e.target.value)} />
                        </div>

                        <label className="text-input-label">Blog</label>
                        <textarea id="editor" className=" rows 8 block w-full px-0 text-sm text-gray-800  border-0 dark:bg-gray-700 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required
                            value={item.postBody} onChange={(e) => setPostBody(e.target.value)}></textarea>
                    </div>

                    <div className="px-4 py-2 bg-white rounded-b-lg " >


                    <div>
                        <button className="items-center px-2 py-2.5 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 bg-rose-600 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-rose-900"
                        >
                            Delete Blog
                        </button>
                    </div>
                    <br></br>
                    <div>
                        <button id='btnUpdate' className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                            onClick={blogHandler}>
                            Update Post
                        </button>
                    </div>
                    
                </div>

                    </li>))}</ul>
                </div>

                

            </form>
        </div>
    )
}
