import React, { useState } from 'react';
import { GiWallet } from "react-icons/gi";
import Banner from './Banner';
import Referal from './Referal';
import Rewards from './Rewards';
import Table from './Table';

const Main = ({ data }) => {

  const [banner, setBanner] = useState(true)

  return (
    <div className=' px-10 mt-4 border-r-2 border-[#242731] h-full'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col gap-1'>
          <p>Section</p>
          <div className='w-[60px] h-[2px] bg-[#3772FF]' />
        </div>
        <div className='flex flex-row justify-around gap-3 items-center bg-[#191B20] py-2 px-4 rounded-xl cursor-pointer'>
          <GiWallet size={21} className="fill-[#a0bcfc]" />
          <p>0.2 $xyz</p>
          <div className='bg-[#A3E3FF] text-[#3772ff] py-[4px] px-3 rounded-xl text-sm font-semibold'>
            Tier 1
          </div>
        </div>
      </div>
      {banner && <Banner setBanner={setBanner} />}
      <Rewards rewardPrice="$0.26214587" />
      <div className='grid grid-cols-2 gap-4'>
        <div className='w-50'>
          <Referal fee="12.5% of fee" message="Your referal link for xyz" />
        </div>
        <div className='w-50'>
          <Referal fee="12.5% of fee" message="Your referal link for xyz" />
        </div>
      </div>
      {data ? <Table data={data} /> : <p className='text-center mt-10 text-red-400'>Failed To Load Resource !</p>}
    </div>
  )
}

export default Main;