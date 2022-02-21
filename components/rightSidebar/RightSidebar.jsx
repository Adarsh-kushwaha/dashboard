import Image from 'next/image';
import React from 'react';
import btnIcon from "../../public/icon2.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import Button from '../ui/Button';

const RightSidebar = () => {
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
        <div className='flex flex-row justify-around gap-3 items-center bg-[#191B20] py-2 px-4 rounded-xl border-[1px] border-[#3772FF]'>
          <GiWallet size={21} className="fill-[#a0bcfc]" />
          <p>0xfbg...cdxee</p>
          <RiArrowDropDownLine size={24} />
        </div>
      </div>
    </div>
  )
}

export default RightSidebar