import Logo from'public/panaverse_logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '../shared/Wrapper'
const Header = () => {
  return (
    <header className='sticky top-0 z-10 bg-white'>
    <Wrapper>
    <div className="flex justify-between  mx-auto py-0 bg-white  ">
        <div>
        {/* <h2 className="text-xl font-bold">Panaverse Dao</h2> */}
        <Image src={Logo} alt="Panaverse Dao logo" className={"rounded"}/>
     
        </div>
        

        <ul className="flex space-x-8 font-semibold my-10">
            <li>
                <Link href={'/'}>
                    Home
                  </Link>
                </li>
            <li>
            <Link href={'/courses'}>
                Courses
            </Link>
            </li>
        </ul>
    </div>
    </Wrapper>
  </header>
  )
}

export default Header