import Logo from'public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '../shared/Wrapper'
const Header = () => {
  return (
    <Wrapper>
    <header className="flex justify-between  mx-auto py-4 bg-white sticky top-0 items-center">
        <div>
        {/* <h2 className="text-xl font-bold">Panaverse Dao</h2> */}
        <Image src={Logo} alt="Panaverse Dao logo"/>
     
        </div>
        

        <ul className="flex space-x-8 font-semibold">
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
    </header>
    </Wrapper>
  )
}

export default Header