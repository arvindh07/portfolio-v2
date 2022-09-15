import React from 'react';
import ytClone from "../assets/p1-yt-clone.PNG";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import sass from "../assets/sass.png";
import "./Portfolio.css";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            pName: "Youtube Clone",
            src: ytClone,
            href: "https://clone-d5940.web.app/",
        },
        {
            id: 2,
            src: redux,
        },
        {
            id: 3,
            src: react,
        },
        {
            id: 4,
            src: sass,
        },
        {
            id: 5,
            src: redux,
        },
    ]

    // const handleDemo = (redirectTo) => {

    // }
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white w-full min-h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold border-b-4 inline-block border-gray-500'>Portfolio</h2>
                    <p className='py-4'>Check out some of my work right here</p>
                </div>
                {/* card */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, href, pName }) => {
                        return (
                            <div key={`port-${id}`} className="shadow-md shadow-gray-600 rounded-lg p-2">                               
                                <div class="container">
                                    <div class="card">
                                        <div class="imgBx">
                                            <img src={src}/>
                                        </div>
                                        <div class="contentBx">
                                            <h2>{pName}</h2>
                                            <div class="description">
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit eligendi explicabo officiis ea minus enim!</p>
                                            </div>
                                            <a href={href} target="_blank" without rel="noreferrer">Demo</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <div>
                                    <img src={src} alt="" className='w-full h-28 mx-auto object-cover rounded-md duration-200 hover:scale-105 ' />
                                </div>
                                <div className='flex flex-col py-3 w-full items-center justify-center'>
                                    <h3 className="text-blue-500 font-bold text-xl">{pName}</h3>
                                    <a href={href} target="_blank" rel="noreferrer" className="w-full text-center px-6 py-1 duration-200 hover:scale-105 ">Demo</a>
                                </div> */}
                            </div>
                            
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Portfolio