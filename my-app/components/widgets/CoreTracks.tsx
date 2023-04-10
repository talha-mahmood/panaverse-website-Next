import React from 'react'
import Wrapper from '../shared/Wrapper'
import Button from '../shared/Button'
import QuarterBox from '../shared/QuarterBox';

const CoreTracks = () => {
  const courses=`Core Courses \n (Common in all specification):`;
  const CoreTrackData=[
    {
      header:"Quarter I",
      desc:"Object oriented programming using typescript",
      number:1
    },
    {
      header:"Quarter II",
      desc:"Object oriented programming using typescript",
      number:2
    },
    {
      header:"Quarter III",
      desc:"Object oriented programming using typescript",
      number:3
    }
  ]
  return (
   
    <section className='mt-16 lg:mt-28'>
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
      <div className='my-20 flex flex-col md:flex-row gap-x-4 '>
        {CoreTrackData.map((item,i)=>(
          <QuarterBox 
          key={item.number}
          header={item.header} 
          desc={item.desc}
          number={i+1}/>
        ))};

      </div>
      {/* Specialized Tracks */}
    
      </Wrapper>
      </section>
   
  )
}

export default CoreTracks