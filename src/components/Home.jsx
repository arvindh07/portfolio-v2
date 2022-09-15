import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="home" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='p-10 md:w-3/4 h-full flex flex-col justify-center mx-auto'>
                <div>
                    <h1 className='text-white text-4xl md:text-7xl font-bold'>Hello, I am <span className='text-blue-500'>Arvindh</span></h1>
                    <p className='mt-5 text-gray-500'>I am a frontend-developer working in TCS for past one year. Currently, I would love to work on technologies like react,tailwind and firebase.</p>
                </div>
                <div>
                    <Link to="portfolio" smooth duration={500}>
                        <button className='group w-fit flex items-center px-3 py-2 rounded-md cursor-pointer mt-3 text-white bg-gradient-to-r from-cyan-300 to-blue-500 font-bold hover:opacity-80 duration-200'>
                            Portfolio
                            <span className='ml-2 group-hover:rotate-90 duration-200 '><FiArrowRight /></span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home