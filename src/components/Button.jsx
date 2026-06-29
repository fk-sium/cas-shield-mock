import React from 'react'

export default function Button({children, variant='primary', className='', ...props}){
  const base = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition'
  const variants = {
    primary: 'bg-brand text-white shadow hover:opacity-95',
    ghost: 'bg-white text-brand border border-gray-200 hover:bg-gray-50'
  }
  return (
    <button className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  )
}
