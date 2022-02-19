import React, { useState } from 'react'
import LeftSidebar from '../components/leftSidebar/LeftSidebar';
import RightSidebar from '../components/rightSidebar/RightSidebar';
import Main from '../components/main/Main';
import { RiMenuUnfoldFill } from "react-icons/ri"


const HomePage = () => {

  const [leftSidebar, setLeftSidebar] = useState(true)


  return (
    <>
      <div className=' grid grid-cols-[auto,3fr,450px]  w-full '>
        {leftSidebar ? <LeftSidebar closeLeftSidebar={() => { setLeftSidebar(false) }} /> : <div className='relative pr-4 border-r-2 border-[#242731]'><RiMenuUnfoldFill size={30} className="hover:fill-gray-500 cursor-pointer mt-6" onClick={() => { setLeftSidebar(true) }} /></div>}
        <Main />
        <RightSidebar />
      </div>
    </>
  )
}

export default HomePage;