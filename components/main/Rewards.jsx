import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { FiExternalLink } from "react-icons/fi";

const Rewards = ({ rewardPrice }) => {
    return (
        <div className='mt-4'>
            <Card bg="bg-[#191B20]" radius="rounded-2xl">
                <div className='flex flex-row items-center justify-between px-8 py-6'>
                    <div className='grid grid-cols-1 gap-3'>
                        <div>Your Rewards</div>
                        <div className='text-2xl font-bold'>{rewardPrice}</div>
                        <div className='flex flex-row justify-start items-center gap-2 text-[12px]'>
                            <div className='bg-[#353945] px-2 py-1 rounded-md'>$40 AVX</div>
                            <div className='bg-[#353945] px-2 py-1 rounded-md'>$10 BNB</div>
                            <div className='bg-[#353945] px-2 py-1 rounded-md'>$210 BTC</div>
                        </div>
                    </div>
                    <div>
                        <Button bg="bg-[#3772FF]"><div className='flex flex-row gap-2 items-center'><FiExternalLink /><p className='text-[14px]'>Custom Link</p></div></Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Rewards;