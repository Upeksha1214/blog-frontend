'use client';
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/page'
import { GetBlog } from '../../services/blogservices'
import { UpdateBlog } from '../../services/blogservices';
import { DeleteBlog } from '../../services/blogservices';
import AutherResult from '../userReasult/page';

export default function page() {

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



    return (
        <div>
            <Navbar />
            <form>

                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                ><ul >{blog .map((item) => (
                    <AutherResult {...item} />
                ))}</ul>
                </div>
                
            </form>
        </div>
    )
}
