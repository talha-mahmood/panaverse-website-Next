"use client"
import { useState } from "react"
import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"
import QuarterBox from "../shared/QuarterBox"
import i1 from '@/public/metaverse.webp'
import i2 from '@/public/ai.webp'
import i3 from '@/public/cloud.webp'
import i4 from '@/public/genomics.webp'
import i5 from "@/public/ambient.webp"
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
        desc:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
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
        },
    

    {
        slug:"cloud",
        header:"Cloud-Native Computing Specialization",
        desc:"The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        my_img:i3,
        quarters:[
            {
                header:"Quarter IV",
                desc:"CN-351: Certified Kubernetes Application Developer (CKAD) ",
                number:4
            },
            {
                header:"Quarter V",
                desc:"CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                number:5
            }
        ]
        },
    {
    slug:"gbs",
    header:"Genomics and Bioinformatics Specialization",
    desc:"Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    my_img:i4,
    quarters:[
        {
            header:"Quarter IV",
            desc:"Bio-351: Python for Biologists",
            number:4
        },
        {
            header:"Quarter V",
            desc:"Bio-361: Bioinformatics with Python",
            number:5
        }
    ]
    },
    {
        slug:"npas",
        header:"Network Programmability and Automation Specialization",
        desc:"More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        my_img:i5,
        quarters:[
            {
                header:"Quarter IV",
                desc:"NPA-351: CCNA 200-301 Certification ",
                number:4
            },
            {
                header:"Quarter V",
                desc:"NPA-361: Network Programmability and Automation",
                number:5
            }
        ]
        }
    

    

    
   
    ]
const SpecializedTracks = () => {
    const [selectedItem,setSelectedItem]=useState("wmd")
    // console.log(selectedItem)
    const selectedItemData=programdata.find((item)=>item.slug===selectedItem)
    // console.log(selectedItemData)
return(
    <section>
        <Wrapper>
            {/* Header */}
            <div>
                <h2 className='text-4xl font-bold  whitespace-pre-line '>Specialized Tracks</h2>
                <p className='mt-6 text-xl text-slate-600 max-w-screen-sm'>After Completing the first three quarters participants will select one or more specializations consisting of two courses each</p>
            </div>
       
            <div className=" mt-10 flex  flex-col-reverse lg:flex-row gap-x-6 gap-y-8 ">
                {/* Content left */}
                <div className="shadow-xl sticky top-24 self-start basis-8/12 rounded-xl border border-slate-400 py-8 px-8">
                    <h4 className='text-primary text-lg font-bold'>Specialized Track</h4>
                    <h3 className="text-2xl font-bold">{selectedItemData?.header}</h3>
                    <p className="text-lg text-slate-600 mt-2">{selectedItemData?.desc}</p>
                    <button className="text-primary text-xl mt-4 underline">{`Learn More >`}</button>
                    <div className="flex  mt-8 gap-4">
                        {
                            selectedItemData?.quarters.map((item,i)=>(
                                <QuarterBox key={i} header={item.header} desc={item.desc} number={item.number} />
                            ))
                        }
                    
                    
                </div>
                </div>
                 {/* content right */}
                <div className="px-4 py-6 gap-x-4 items-center basis-4/12 space-y-4 flex-1">
                    {
                        programdata.map((item,i)=>(
                <div onClick={()=> setSelectedItem(item.slug)} key={item.slug} className="flex gap-x-4 items-center cursor-pointer">
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
 }
export default SpecializedTracks