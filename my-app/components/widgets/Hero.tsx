import React from 'react'
import Wrapper from '../shared/Wrapper'
import happy_student from '@/public/happy_student.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className='bg-red-200'>
    <Wrapper>
      <div className='flex'>
        {/* Left side */}
        <div className='flex-1'>
          <h4>Presidential Initiative for Artificial Intelligence and Computing(PIAIC)</h4>
          <h1>Certified Web 3.0 and Metaverse Developer</h1>
          <p> As you learn from panaverse you are getting ready for next generartion of internet
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