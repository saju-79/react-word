import React, { useEffect, useState} from 'react';
import Blog from './Blog';

const Blogs = ({handelDitels , handelMarkajRed}) => {
    const [blogs , setblogs] = useState([])
        //  console.log(blogs)
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/saju-79/blogs/refs/heads/main/blogs.json")
        .then(res  => res.json())
        .then(data =>{
            setblogs(data)
        })
    } ,[])
    return (
        <div>
        <h1 className="text-2xl font-bold text-center my-4  ">Total :{blogs.length}</h1>
        <div className=" grid grid-cols-1 gap-6  md:grid-cols-2 ">
            {
                blogs.map(blog   =>  <Blog key={blog.id}
                handelDitels= {handelDitels}
                 handelMarkajRed={ handelMarkajRed}
                     blog = {blog}></Blog>)
            }
        </div>
        </div>
    );
};

export default Blogs;