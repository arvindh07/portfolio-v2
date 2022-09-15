import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { FiMail, FiDownload } from "react-icons/fi"

const SocialIcons = () => {
    const icons = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <BsLinkedin size={30} />
                </>
            ),
            download: false,
            style: "rounded-tr-md",
            href: "https://www.linkedin.com/in/arvindh-g-280b5b248/",
        },
        {
            id: 2,
            child: (
                <>
                    Github <BsGithub size={30} />
                </>
            ),
            download: false,
            href: "https://github.com/arvindh07"
        },
        {
            id: 3,
            child: (
                <>
                    Mail <FiMail size={30} />
                </>
            ),
            download: false,
            href: "mailto:arvindhdq@gmail.com"
        },
        {
            id: 4,
            child: (
                <>
                    Resume <FiDownload size={30} />
                </>
            ),
            download: true,
            style: "rounded-br-md",
            href: "../ARVINDH-RESUME.pdf",
        },

    ]
    return (
        <div className='hidden lg:flex'>
            <ul className='flex flex-col fixed left-0 top-[35%]'>

                {icons.map(({ id, child, download, style, href }) => {
                    return (
                        <li key={`social-${id}`} className={`ml-[-100px] hover:ml-[-5px] duration-200 flex w-40 px-4 h-14 bg-gray-500 ${style}`}>
                            <a className="text-white w-full flex items-center justify-between" href={href} download={download} target="_blank" rel="noreferrer">
                                {child}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SocialIcons