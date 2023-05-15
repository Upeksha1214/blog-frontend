'use client';
import React, { useEffect, useState } from 'react'
import { GetBlog } from '../../services/blogservices'
import Navbar from '../navbar/page'
import './allblog.css'

export default function page() {
  const [blog, setBlogs] = useState<{
    authorName: string;
    postTitle: string;
    postBody: string;
    createdDate: Date;
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
      

      <ul >
        {blog.map((item) => (
          <li className='blogBG'>{item.authorName}
            <div>{item.postTitle}</div>
            <div>{item.postBody}</div>
            <div>{new Date(item.createdDate).toLocaleString("en-US", {
            dateStyle: "short",
          })}</div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  )
}