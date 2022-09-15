import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi"
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-scroll'

const Navbar = () => {
    const [hamMenu, setHamMenu] = useState(false);
    const links = [
        {
            id: 1,
            linkName: "home",
        },
        {
            id: 2,
            linkName: "about",
        },
        {
            id: 3,
            linkName: "portfolio",
        },
        {
            id: 4,
            linkName: "experience",
        },
        {
            id: 5,
            linkName: "contact",
        }
    ]
    return (
        <nav className='flex justify-between items-center fixed w-full h-16 px-4 border-b border-gray-800 bg-black text-white z-10'>
            <div className='ml-2 font-signature text-2xl'>Arvindh</div>
            <ul className='hidden md:flex items-center justify-center'>
                {links.map(({ id, linkName }) => {
                    return (
                        <li key={id}
                            className="mx-4 capitalize cursor-pointer text-gray-500 hover:text-white duration-200">
                            <Link to={linkName} smooth duration={500}>{linkName}</Link>
                        </li>
                    )
                })}
            </ul>

            {/* mobile menu */}
            <div className="md:hidden text-gray-500 ">
                {!hamMenu && <HiMenu className='cursor-pointer text-2xl' onClick={() => setHamMenu(true)}/>}
                {hamMenu && <IoIosCloseCircle className='cursor-pointer text-2xl' onClick={() => setHamMenu(false)}/>}

                {hamMenu && <ul className='duration-200 bg-gradient-to-b from-black to-gray-800 absolute top-16 left-0 w-full bg-black h-screen flex flex-col items-center'>
                    {links.map(({ id, linkName }) => {
                        return (
                            <li key={`${linkName}-${id}`}
                                className="mx-4 py-8 capitalize cursor-pointer text-gray-500 hover:text-white duration-200"
                                >
                                <Link to={linkName} onClick={() => setHamMenu(false)} smooth duration={500}>{linkName}</Link>
                            </li>
                        )
                    })}
                </ul>}
            </div>
        </nav>
    )
}

export default Navbar