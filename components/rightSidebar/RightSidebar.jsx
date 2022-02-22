import Image from 'next/image';
import React, { useState } from 'react';
import btnIcon from "../../public/icon2.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import Button from '../ui/Button';
import { BsArrowLeft, BsFillArrowRightSquareFill } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const RightSidebar = () => {

  const [link, setLink] = useState("")

  return (
    <div className=' h-screen px-8 mt-4 w-full'>
      <div className='flex flex-row items-center justify-between w-full'>
        <Button bg="bg-[#353945]">
          <div className='flex flex-row gap-2 items-center p-[2px]'>
            <Image src={btnIcon} alt="icon" width="23px" height="23px" />
            <select className='text-[14px] bg-transparent'>
              <option value="Avalanche">Avalanche</option>
            </select>
          </div>
        </Button>
        <div className='flex flex-row justify-around gap-3 items-center bg-[#191B20] py-2 px-4 rounded-xl border-[1px] border-[#3772FF] cursor-pointer'>
          <GiWallet size={21} className="fill-[#a0bcfc]" />
          <p>0xfbg...cdxee</p>
          <RiArrowDropDownLine size={24} />
        </div>
      </div>
      <div className='flex flex-row gap-4 items-center justify-start mt-6 mb-8'>
        <BsArrowLeft />
        <p>Custom Link</p>
      </div>
      <div className='flex flex-col gap-6 '>
        <div>
          <p>https://testnet.xyz?ref={link}</p>
        </div>
        <div className='bg-[#242731] rounded-lg p-2'>
          <input type="text" className='bg-transparent text-sm font-medium p-2 w-full focus:outline-none active:outline-none' onChange={(e) => { setLink(e.target.value) }} placeholder="Enter..." value={link} />
        </div>
        <div className='flex flex-row items-center justify-center gap-4'>
          <Button bg="bg-[#3772FF]"><div className='flex flex-row gap-2 items-center'><FiExternalLink /><p className='text-[14px]'>Custom Link</p></div></Button>
          <Button bg="bg-[#000000]"><div className='flex flex-row gap-4 items-center px-6 border-[1px] border-[#242731] p-2 rounded-lg'><p className='text-[14px]'>Cancel</p><BsFillArrowRightSquareFill /></div></Button>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar;