import React from 'react';
import Card from "../ui/Card";
import Button from "../ui/Button";
import Image from 'next/image';
import crypto from "../../public/crypto.png";
import { MdCancel } from "react-icons/md";

const Banner = ({setBanner}) => {

    return (
        <div className='mt-4 relative'>
            <Card bg="bg-[#ABE8FF]" radius="rounded-md">
                <div className=' flex justify-end flex-row'>
                    <div />
                    <MdCancel size={25} className="absolute z-20 translate-y-[-10px] translate-x-2 fill-white bg-gray-800 rounded-full cursor-pointer shadow-md" onClick={()=>{setBanner(false)}}/>
                </div>
                <div className='flex flex-row items-center justify-between py-1 px-4'>
                    <div>
                        <div className='text-[14px] text-gray-900 font-semibold mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, natus!</div>
                        <Button bg="bg-white" color="text-gray-800">Tutorials</Button>
                    </div>
                    <Image src={crypto} alt="image" className='object-cover' />
                </div>
            </Card>
        </div>
    )
}

export default Banner;