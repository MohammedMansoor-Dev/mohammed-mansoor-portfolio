import React from 'react';
import avatar from '../assets/front-end-logo-black.png'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center py-10 text-white mt-4">
            <a href="/home" className="font-bold text-sm flex items-center justify-center space-x-2 md:text-xl">
                <img
                    src={avatar}
                    alt="Avatar"
                    loading="lazy"
                    width="30"
                    height="30"
                    className="transition duration-500 rounded-full invert"
                />
                <span className="font-bold text-xl">Mohammed Mansoor</span>
            </a>

            <div className="flex flex-col sm:flex-row justify-center mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="/home" className="text-zinc-100 text-sm">
                    <span className="px-2 py-2 inline-block">Home</span>
                </a>
                <a href="/about" className="text-zinc-100 text-sm">
                    <span className="px-2 py-2 inline-block">About</span>
                </a>
                <a href="/experience" className="text-zinc-100 text-sm">
                    <span className="px-2 py-2 inline-block">Experience</span>
                </a>
                <a href="/projects" rel="noopener noreferrer" className="text-zinc-100 text-sm">
                    <span className="px-2 py-2 inline-block">Projects</span>
                </a>
                <a href="/contact" className="text-zinc-100 text-sm">
                    <span className="px-2 py-2 inline-block">Contact</span>
                </a>
            </div>

            <div className="flex flex-row justify-start md:justify-center gap-4 space-x-2 mt-2 text-white">
                <a href='https://github.com/MohammedMansoor-Dev/' target='_blank'>
                    <FaGithub className='hover:fill-[#FFD700] text-2xl cursor-pointer' />
                </a>
                <a href='https://www.linkedin.com/in/mohammed-mansoor-201a81343/' target='_blank'>
                    <FaLinkedin className='hover:fill-[#FFD700] text-2xl cursor-pointer' />
                </a>
                <a href='https://wa.me/9849600239' target='_blank'>
                    <IoLogoWhatsapp className='hover:fill-[#FFD700] text-2xl cursor-pointer' />
                </a>
                <a href='mailto:mohammedmansoor.dev@gmail.com' target='_blank'>
                    <MdEmail className='hover:fill-[#FFD700] text-2xl cursor-pointer' />
                </a>
            </div>
        </div>
    );
};

export default Footer;