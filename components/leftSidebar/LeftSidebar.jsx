import React, { useState } from 'react'
import NavLinks from './NavLinks'
import Image from 'next/image'
import logo from "../../public/logo.png"
import { RiMenuFoldFill } from "react-icons/ri"
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs"
import Button from "../ui/Button";


const LeftSidebar = ({closeLeftSidebar}) => {

    const [toggle, setToggle] = useState(true)

    return (
        <>
            <div className="relative pr-2 border-r-2 border-[#242731]">
                <div className="flex flex-col sm:flex-row sm:justify-around">
                    <div className="w-60 h-screen">
                        <div className="flex items-center justify-start  mt-4">
                            <Image className="h-20" src={logo} alt="logo" />
                            <span className="text-white ml-4 text-2xl font-bold">
                                Name
                            </span>
                            <div className='font-bold ml-16 cursor-pointer'>
                                <RiMenuFoldFill size={30} className="hover:fill-gray-500" onClick={closeLeftSidebar} />
                            </div>
                        </div>
                        <NavLinks />
                        <div className='flex flex-row justify-start gap-4 mt-[140px]'>
                            <div className='flex flex-row justify-center gap-4 items-center bg-[#353945] p-2 px-4 rounded-md cursor-pointer '>
                                <Image src={logo} width="20px" height="20px" />
                                <p className='font-semibold'>$0.90</p>
                            </div>
                            <Button bg="bg-[#A3E3FF]" color="text-blue-600 font-semibold">Buy $xyz</Button>
                        </div>
                        <div className='mt-4 flex flex-row justify-start items-center'>
                            <BsGlobe size={21} className="fill-[#808191]" />
                            <div className='px-4' onClick={() => { setToggle(!toggle) }}>
                                {toggle ?
                                    <div className='flex flex-row bg-[#353945] p-1.5 rounded-full justify-between items-center w-[70px] cursor-pointer'>
                                        <MdDarkMode size={20} className="fill-[#808191]" />
                                        <BsFillCircleFill className="fill-blue-500" />
                                    </div>
                                    : <div className='flex flex-row bg-[#353945] p-1.5 rounded-full justify-between items-center w-[70px] cursor-pointer'>
                                        <BsFillCircleFill className="fill-blue-500" />
                                        <MdLightMode size={20} className="fill-[#808191]" />
                                    </div>}
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </>
    )
}

export default LeftSidebar