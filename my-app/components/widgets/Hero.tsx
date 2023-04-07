import React from 'react'
import Wrapper from '../shared/Wrapper'
import happy_student from '@/public/happy_student.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <section >
    <Wrapper>
      <div className='flex flex-col md:flex-row items-center'>
        {/* Left side */}
        <div className='flex-1'>
          <h4 className='text-teal-800 font-semibold text-lg'>Presidential Initiative for Artificial Intelligence and Computing(PIAIC)</h4>
          <h1 className='text-6xl font-bold text-gray-900 md:text-red-400 lg:text-blue-700'>Certified Web 3.0 and Metaverse Developer</h1>
          <p className='mt-6 text-lg text-slate-600'> As you learn from panaverse you are getting ready for next generartion of internet
            Consolidating Web 3.0 and Metaverse, Artificial Intelligence, Blockchain, Internet of Things
          </p>
          <button> Learn more</button>
        </div>

        {/* Right side */}
        <div className='flex-1'>
          <Image src={happy_student} alt="student image"></Image>
        </div>
      </div>
      
    </Wrapper>
    </section>
  )
}

export default Hero