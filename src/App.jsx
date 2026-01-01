

import { useState } from 'react'
import Blogs from './acsist/mainSection/Blogs'
import Navber from './acsist/navber/Navber'
import './App.css'

function App() {
  const [bookmark , setbookmark] = useState([]);
  const handelDitels = (blog) =>{
    const totalBookmark = [...bookmark ,blog];
    setbookmark(totalBookmark);
   
  };
  const [markajRedtime , setmarkajRed]= useState(0)
  const  handelMarkajRed =(time , id)=>{
         const times =markajRedtime + time ;
         setmarkajRed(times);
         removeBookmark(id)
         
  }
  const removeBookmark = (id)=>{
       const remaningBookMark = bookmark.filter((mark) => mark.id !== id);
       setbookmark(remaningBookMark)
  }
 
 



  return (
    <>
  <Navber></Navber>
 
      <div className="w-11/12 mx-auto flex gap-4 p-4  mt-4  ">
      <div className=" bg-gray-200  w-3/4 p-4 rounded-sm  ">
            <Blogs handelDitels={handelDitels}  handelMarkajRed ={ handelMarkajRed}></Blogs>
      </div>
 
      <div className="bg-gray-200 w-1/4 p-4 rounded-sm ">
       <div className=" border-b-red text-center p-4">
         <h className=" text-lg font-bold text-center ">reading time: <span className=' text-xl'>{markajRedtime}</span></h> 
        <p className=" text-xl font-bold text-center"> bookmarked cunt :{bookmark.length}</p>
       </div>
       <div className="mt-6">
        {
          bookmark.map((blog) => <p className='p-4 rounded-lg shadow-sm m-2 text-sm font-semibold bg-amber-200'>{blog.title}</p>)
        }
       </div>
       <div className=""></div>
      </div>

      </div>
      
      
    
    </>
  )
}

export default App
