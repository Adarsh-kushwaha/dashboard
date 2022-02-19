import React from 'react'

const Button = ({children, bg, color}) => {
  return (
    <button className={`rounded-md py-2 px-4 ${bg} ${color} cursor-pointer font-semibold`}>{children}</button>
  )
}

export default Button;
