import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className='w-full min-h-screen bg-gradient-to-b from-black to-gray-600 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline-block border-b-4 border-gray-500'>Contact</h2>
                    <p className='mt-4'>Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/e56daa83-55f0-4132-8ee9-cb32dbd66996" method="post" className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name="name" placeholder='Enter name' className='rounded-md p-2 bg-transparent border-2 focus:outline-none'/>
                        <input type="text" name="email" placeholder='Enter email' className='my-4 rounded-md p-2 bg-transparent border-2 focus:outline-none'/>
                        <textarea name="message" id="" cols="20" placeholder="Leave us a message" rows="5" className='rounded-md resize-none p-2 bg-transparent border-2 focus:outline-none'></textarea>
                        <button className='flex text-white justify-center items-center px-3 py-2 my-4 focus:outline-none mx-auto rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 duration-200'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact