import React, { FC } from 'react'

const Button:FC<{text:string}>= ({text}) => {
  return (
    <button className='bg-teal-700 text-white px-7 py-4 rounded-full shadow-lg text-lg font-medium'>{text}</button>
  )
}

export default Button