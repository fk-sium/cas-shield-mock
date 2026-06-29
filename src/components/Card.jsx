import React from 'react'

export function Card({children, className=''}){
  return (
    <div className={`bg-white rounded-2xl p-6 card-shadow ${className}`}>
      {children}
    </div>
  )
}

export default Card
