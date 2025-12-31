

import Blogs from './acsist/mainSection/Blogs'
import Navber from './acsist/navber/Navber'
import './App.css'

function App() {


  return (
    <>
  <Navber></Navber>
 
      <div className="w-11/12 mx-auto flex gap-4 p-4  mt-4  ">
      <div className=" bg-gray-200  w-3/4 p-4 rounded-sm  ">
            <Blogs></Blogs>
      </div>
 
      <div className="bg-gray-200 w-1/4 p-4 rounded-sm ">
         dfdf
      </div>

      </div>
      
      
    
    </>
  )
}

export default App
