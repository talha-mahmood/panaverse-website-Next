import React from 'react'
import Wrapper from '../shared/Wrapper'
import happy_student from '@/public/hero-poster.webp'
import Image from 'next/image'
//components
import Button from '../shared/Button'
const Hero = () => {
  return (
    <section >
    <Wrapper>
      <div className='flex flex-col md:flex-row mt-9 '>
        {/* Left side */}
        <div className='flex-1'>
          <h4 className='text-teal-800 mt-4 font-bold text-lg'>Presidential Initiative for Artificial Intelligence and Computing(PIAIC)</h4>
          <h1 className='text-4xl  sm:text-5xl font-bold text-gray-900 '>Certified Web 3.0 and Metaverse Developer</h1>
          <p className='mt-6 text-xl text-slate-600'> In one and quarter year of panaverse learning you are getting ready for next generartion of internet
            
          </p>
          <p className='mt-1 text-xl text-slate-600'>
          Consolidating Web 3.0 and Metaverse, Artificial Intelligence, Blockchain, Internet of Things, Network Automaton and Bioinformatics
          </p>
          <div className='mt-5'>
            <Button text={"Enroll now"}/>
          </div>
          
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