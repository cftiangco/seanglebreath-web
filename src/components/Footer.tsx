import logo from '../assets/logo-dark.png'

const Footer = () => {
    return (
        <div className="bg-gray-100 h-72 w-full text-xs md:text-md justify-around text-gray-700 flex flex-col md:flex-row items-center border-t-2">
            <div className="flex gap-10">
                <img src={logo} alt="logo" className="w-22 h-16 md:w-52 md:h-24"/>

                <div>
                    <h2 className="font-bold mb-2">Program and Packages</h2>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li>item 5</li>
                    </ul>
                </div>

            </div>

            <div className="flex flex-col gap-5"> 
                <div>
                    <h2 className="font-bold mb-2">Program and Packages</h2>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <p className="text-xs">Copyright 2023-2024 SEAnglebreath.com. All Rights Reserved</p>
            </div>
        </div>

    )
}

export default Footer;