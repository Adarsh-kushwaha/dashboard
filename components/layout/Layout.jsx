import React from 'react'
import Topbar from './Topbar'

const Layout = ({children}) => {
  return (
    <div>
    <Topbar/>
    <main className="max-w-[96%] m-auto ">{children}</main>
    </div>
  )
}

export default Layout