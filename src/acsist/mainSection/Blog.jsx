import React from 'react';
import { FaBookmark } from "react-icons/fa6";

const Blog = ({blog , handelDitels ,  handelMarkajRed }) => {
    // console.log(blog)
       
    return (
       <div className="card bg-base-100 w-full shadow-sm">
  <figure>
    <img
    className='w-full object-center  h-70'
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title ">{blog.title}</h2>
    <div className=" flex justify-around items-center">
      <p className='font-bold text-lg '>{blog.author}</p>
      <img className='w-14 h-14 rounded-full' src={blog.author_img} alt="" />
    </div>
    <div className=" text-sm font-semibold"> Post Date : {blog.time} , {blog.post_date}</div>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-between">
      <button onClick={()=> handelMarkajRed(blog.reading_time , blog.id)} className="btn btn-primary">Mark AS Read</button>
      <button onClick={ () =>handelDitels(blog)} className='btn   '><FaBookmark color='blue' size={24}/></button>
    </div>
  </div>
  
</div>
    );
};

export default Blog;