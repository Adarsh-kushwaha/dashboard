import Image from 'next/image';
import React, { useState } from 'react';
import { FiExternalLink } from "react-icons/fi";
import Link from 'next/link';
import defaultImage from "../../public/logo.png";

const Table = ({ data }) => {

    const [assetImage, setAssetImage] = useState(defaultImage);
    const [chainImage, setChainImage] = useState(defaultImage);

    const accountAdd = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 5)}`;

    return (
        
        <div className='mt-4 font-semibold max-w-full'>
            <div className='flex flex-row justify-start items-center gap-4 pt-4'>
                <div className='flex flex-col gap-1 cursor-pointer'>
                    <p>First Tab</p>
                    <div className='w-[60px] h-[2px] bg-[#3772FF]' />
                </div>
                <div className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
                    <p>Second Tab</p>
                    <div className='w-[60px] h-[2px] bg-transparent' />
                </div>
            </div>

            {/* Table start from here */}

            <div className="flex flex-col mt-4">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-7">
                        <div className="shadow overflow-hidden sm:rounded-lg">
                            <table className="min-w-full">
                                <thead className="bg-[#191B20] rounded-lg">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ASSET</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AMOUNT</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACCOUNT</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">REFERAL EARNING</th>
                                    </tr>
                                </thead>
                                {data.data.map((item) => {
                                    return (
                                        <tbody className='bg-[#24273179] rounded-lg ' key={Math.random()}>
                                            <tr>
                                                <td className="py-4 px-6 whitespace-nowrap">
                                                    <div className='flex flex-row justify-start items-center gap-2'>
                                                        <div><Image src={item.img ? item.img : assetImage} width="30px" height="30px" alt="img" /></div>
                                                        <div>
                                                            <div className='text-[14px] font-semibold'>{item.asset}</div>
                                                            <div className=' flex flex-row items-center justify-start gap-2'>
                                                                <p className='text-xs text-gray-500'>{item.type}</p>
                                                                <div className='bg-[#353945] py-[2px] px-2 rounded-xl text-white text-[9px] flex flex-row items-center justify-start gap-1'>
                                                                    <Image src={item.chain.img ? item.chain.img : chainImage} alt='img2' width="10px" height="10px" />
                                                                    <p className='font-medium'>{item.chain.name}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className='flex flex-col items-center justify-center gap-2'>
                                                        <div className='text-[14px] font-semibold'>{item.amount} BNB</div>
                                                        <p className='text-xs text-gray-500 capitalize'>{item.state}</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className='text-[14px] font-semibold'>{accountAdd(item.user)}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                                                    <Link href="/">
                                                        <div className='flex flex-col items-center justify-center gap-2'>
                                                            <div className='text-[14px] font-semibold'>{item.referral_earnings}.BNB</div>
                                                            <div className='text-xs text-gray-500 flex flex-roe items-start justify-start gap-1 cursor-pointer'>
                                                                <p>View on BSC scan</p>
                                                                <FiExternalLink size={12} />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;