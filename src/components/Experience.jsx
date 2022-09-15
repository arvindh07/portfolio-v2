import React from 'react';
import html from "../assets/exp/html.png";
import css from "../assets/exp/css.png";
import javascript from "../assets/exp/javascript.png";
import react from "../assets/exp/react.png";
import node from "../assets/exp/node.png";
import tailwind from "../assets/exp/tailwind.png";

const Experience = () => {
    const technologies = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "Javascript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: react,
            title: "React",
            style: "shadow-blue-500",
        },
        {
            id: 5,
            src: node,
            title: "Node js",
            style: "shadow-green-500",
        },
        {
            id: 6,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-500",
        },
    ]
    return (
        <div name="experience" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl inline-block font-bold border-b-4 border-gray-500 '>Experience</h2>
                    <p className='mt-4'>These are the technologies i've worked with</p>
                </div>

                <div className='grid gap-8 mx-12 sm:mx-0 grid-cols-2 sm:grid-cols-3'>
                    {technologies.map(({id,src,title,style}) => {
                        return (
                            <div key={`tech-${id}`} className={`shadow-md ${style} rounded-lg p-2 hover:scale-105 duration-200`}>
                                <img src={src} alt="" className='w-20 mx-auto'/>
                                <p className='mt-4'>{title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Experience