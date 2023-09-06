import logo from '../assets/logo-dark.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between bg-white absolute w-full h-24 items-center'>
            <Link to={'/'} className="ms-20">
                <img src={logo} alt="logo" width={130}/>
            </Link>
            <div className="me-20">
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