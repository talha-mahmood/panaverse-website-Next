"use client"
import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"
import QuarterBox from "../shared/QuarterBox"
import i1 from '@/public/i1.jpg'
import i2 from '@/public/i2.jpg'
import i3 from '@/public/i3.jpg'
import i4 from '@/public/i4.jpg'
import i5 from '@/public/i5.jpg'
import i6 from '@/public/i6.jpg'
import i7 from '@/public/i7.jpg'
import Image from 'next/image'
export const programdata=[
    {
    slug:"wmd",
    header:"Web 3.0 (Blockchain) and Metaverse Specialization",
    desc:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    my_img:i1,
    quarters:[
        {
            header:"Quarter IV",
            desc:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
            number:4
        },
        {
            header:"Quarter V",
            desc:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
            number:5
        }
    ]
    },

    {
        slug:"ai",
        header:"Artificial Intelligence (AI) and Deep Learning Specialization",
        desc:"Web 3 and Metaverse Specialization",
        my_img:i2,
        quarters:[
            {
                header:"Quarter IV",
                desc:"AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number:4
            },
            {
                header:"Quarter V",
                desc:"AI-361: Deep Learning and MLOps",
                number:5
            }
        ]
        }
   


]
const SpecializedTracks = () => (
    <section>
        <Wrapper>
            {/* Header */}
            <div>
                <h2 className='text-4xl font-bold text-slate-600 whitespace-pre-line '>Specialized Tracks</h2>
                <p className='mt-6 text-xl text-slate-600 max-w-screen-sm'>After Completing the first three quarters participants will select one or more specializations consisting of two courses each</p>
            </div>
       
            <div className=" mt-10 flex gap-x-6 gap-y-8 ">
                {/* Content left */}
                <div className="shadow-xl basis-8/12 rounded-xl border border-slate-400 py-8 px-8">
                    <h4 className='text-primary text-lg font-medium'>Specialized Track</h4>
                    <h3 className="text-2xl font-bold">Web 3.0 (Blockchain) and Metaverse Specialization</h3>
                    <p className="text-lg text-slate-600 mt-2">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</p>
                    <button className="text-primary text-xl mt-4 underline">{`Learn More >`}</button>
                    <div className="flex mt-8 gap-4">
                    <QuarterBox header="Quarter IV" desc="W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps" number={4} />
                    <QuarterBox header="Quarter V" desc="MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences 5" number={5} />
                </div>
                </div>
                 {/* content right */}
                <div className="px-4 py-6 gap-x-4 items-center basis-4/12 space-y-4 flex-1">
                    {
                        programdata.map((item,i)=>(
                <div key={item.slug} className="flex gap-x-4 items-center cursor-pointer">
                  <div className="flex-shrink-0 ">
                    {/* <div className="w-21 h-12 rounded bg-red-300"> */}
                    <Image src={item.my_img} alt="image " className={"h-24 w-36 object-cover rounded-md"}></Image>
                    {/* </div> */}
                  </div>
                    <div>
                        <h4 className=" text-primary font-medium ">Specialized Program</h4>
                        <h3 className="text-xl font-semibold">{item.header}</h3>
                    </div>
                </div>
                        ))
                    }
                

            
                </div>

                
                {/* underline */}

             </div>
      
        
           
             
        </Wrapper>
    </section>
)

export default SpecializedTracks