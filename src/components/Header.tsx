import logo from '../assets/logo-dark.png';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Header = () => {
    return (
        <div className='flex justify-between bg-white bg-opacity-90 absolute w-full h-24 items-center z-10'>
            <Link to={'/'} className="ms-2 md:ms-20">
                <img src={logo} alt="logo" width={130}/>
            </Link>

            <div className="block md:hidden me-2 cursor-pointer">
                <FaBars size={35} className="text-[#02C5CD]"/>
            </div>
            <div className="me-20 hidden md:block">
                <ul className="flex gap-5">
                    <li>Discover</li>
                    <li>Dive</li>
                    <li>Develop</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}

export default Header