import React from 'react'

const Card = ({ children, bg, radius }) => {
  return (
    <div className={`${radius} shadow-sm ${bg}`}>{children}</div>
  )
}

export default Card