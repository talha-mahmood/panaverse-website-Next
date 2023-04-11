import Wrapper from "../shared/Wrapper"
import Image from "next/image"
import outcomeposter from "@/public/outcome-poster.webp"

const outcomePoints=["Product Ownership","Freelancing","Global Marketing by Panaverse DAO","Boosting Economy."]
const ProgramsOutcome = () => {
  return (
    <section className="mt-16 md:mt-28">
        <Wrapper>
            <div className="flex gap-x-4 flex-col-reverse md:flex-row">
                {/* left image */}
                <div>
                    <Image src={outcomeposter} alt="outcomeposter" ></Image>
                </div>

                {/* right content */}
                <div className="flex-1">
                    <h2 className="font-bold text-5xl">The Outcome for Participants of the Program</h2>
                    <p className="mt-4 text-slate-600 text-lg">As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.</p>
                    <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4">
                    
                        {outcomePoints.map((item,i)=>(
                            <div key={i}>
                               
                                <svg className="h-8 w-8 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="20 6 9 17 4 12" />{item}</svg>{item}
                            </div>   
                        ))}
                    
                </div>
              </div>
            </div>
            
        </Wrapper>
    </section>
  )
}

export default ProgramsOutcome