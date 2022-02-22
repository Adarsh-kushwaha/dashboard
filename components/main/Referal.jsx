import React, { useState } from 'react';
import Card from '../ui/Card';
import { GiSwapBag } from "react-icons/gi";
import { FaCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";


const Referal = ({ fee, message }) => {

    const [copyLink, setCopyLink] = useState("https://iamreferallink.com");

    const handleCopyLink = (e) => {
        setCopyLink(e.target.value)
    };

    const copyClipboardLink = () => {
        copy(copyLink);
        alert(`You have copied "${copyLink}"`);
    };

    return (
        <div className='mt-4'>
            <Card bg="bg-[#191B20]" radius="rounded-2xl">
                <div className='grid grid-col-1 gap-3 px-6 py-6'>
                    <div className='flex -flex-row items-center justify-start gap-2'>
                        <div className="bg-[#e7b4e7] rounded-full p-1">
                            <GiSwapBag size={20} className="fill-white stroke-white" />
                        </div>
                        <p className='text-xl font-bold'>{fee}</p>
                    </div>
                    <div>
                        <p className='text-gray-500 text-md'>{message}</p>
                    </div>
                    <div className='flex flex-row items-center justify-between bg-[#242731] p-2 rounded-lg'>
                        <input type="text" className='bg-transparent text-sm font-semibold p-2 w-full focus:outline-none active:outline-none' disabled value={copyLink} onChange={handleCopyLink} />
                        <FaCopy size={21} className="cursor-pointer hover:fill-gray-600" onClick={copyClipboardLink} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Referal;