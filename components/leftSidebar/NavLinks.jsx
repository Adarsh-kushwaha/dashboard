import React from 'react';
import Link from 'next/link';
import Links from './Links';

const NavLinks = () => {
  return (
    <nav className="mt-6 ">
      {Links?.map((item) => {
        return (
          <Link href="/" key={item.id} >
            <a className="hover:text-white hover:bg-[#353945] flex items-center p-3  transition-colors duration-400  text-gray-600 dark:text-gray-400 rounded-lg hover:px-4 hover:transition-all text-[15px]">
              {item.icon}
              <span className="mx-4 text-md font-normal">
                {item.title}
              </span>
              <span className="flex-grow text-right">
              </span>
            </a>
          </Link>
        )
      })}

    </nav>
  )
}

export default NavLinks;