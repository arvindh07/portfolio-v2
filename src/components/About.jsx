import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='mb-8'>
                <h2 className='text-4xl font-bold border-b-4 inline border-gray-500'>About</h2>
            </div>
            <p className='text-xl mt-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias voluptatibus beatae optio dolorem porro natus recusandae ea error maiores animi quae minima numquam aut aliquid aspernatur nihil ducimus eaque reiciendis vitae tenetur quisquam, deserunt quas! Libero eligendi perspiciatis ipsam. Officia et sed nulla repellendus accusantium, debitis numquam porro. Debitis, nisi.</p>
            <br/>
            <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima alias obcaecati impedit dignissimos, voluptatem est quae eaque cupiditate illum! Voluptatibus sed officiis reiciendis voluptatum, ipsum qui odit tempore ratione aut consectetur saepe maxime consequuntur molestias amet eaque quae nobis impedit error tempora, magni veniam vel accusantium. Doloremque culpa explicabo reprehenderit!</p>
        </div>
    </div>
  )
}

export default About