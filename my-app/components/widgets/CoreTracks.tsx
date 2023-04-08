import React from 'react'
import Wrapper from '../shared/Wrapper'
import Button from '../shared/Button'

const CoreTracks = () => {
  const courses=`Core Courses \n (Common in all specification):`;
  return (
    <section className='mt-16 large:28'>
    <Wrapper>
      <div className='max-w-screen-sm'>
        {/* content */}
        <h4 className='text-teal-800 mt-4 font-semibold text-lg'>Program of Studies</h4>
        <h2 className='text-4xl font-bold text-slate-600 whitespace-pre-line '>{courses}</h2>
        <p className='mt-6 text-xl text-slate-600'>Every participant of program will start by completing the following </p>
        <div className='mt-5'>
        <Button text="Learn More"/>
        </div>
      </div>
      {/* Boxes */}
      <div className='my-20 flex gap-x-4'>
        <div className='border rounded-md-w-4/12 relative px-8 py-8'>
          <h4 className='font-bold text-lg'>Quarter 1</h4>
          <p className='mt-2 '>Object oriented programming using typescript</p>
          <span className='absolute top-0 right-10 text-gray-300 -z-10 text-9xl font-bold '>1</span>
         
        </div>
        <div className='border rounded-md-w-4/12 relative px-8 py-8'>
        <h4 className='font-bold text-lg'>Quarter 1</h4>
        <p className='mt-2 '>Object oriented programming using typescript</p>
        <span className='absolute top-0 right-10 text-gray-300 -z-10 text-9xl font-bold '>1</span>

        </div>
        <div className='border rounded-md-w-4/12 relative px-8 py-8'>
        <h4 className='font-bold text-lg'>Quarter 1</h4>
        <p className='mt-2 '>Object oriented programming using typescript</p>
        <span className='absolute top-0 right-10 text-gray-300 -z-10 text-9xl font-bold '>1</span>

        </div>


      </div>
    
      </Wrapper>
      </section>
  )
}

export default CoreTracks