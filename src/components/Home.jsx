import React, { useEffect, useState } from 'react';
import Pic from '../assets/MansoorPic.jpg';
import { Typewriter } from 'react-simple-typewriter';
import Resume from '../assets/Resume.pdf'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import WorkExp from './WorkExp';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return (
            <div className="w-full h-[50vh] bg-black flex justify-center items-center text-white text-3xl font-bold">
                <div data-aos="fade-down"><span className='text-cyan-500'>Hello,</span> Welcome to Mohammed Mansoor's Portfolio</div>
            </div>
        );
    }

    return (
        <>
            <div className="block relative lg:flex max-w-5xl mx-auto mt-5 md:mt-10 px-8 gap-12" data-aos="fade-up">
                <div data-aos="fade-right">
                    <h1 className="font-bold text-3xl md:text-5xl leading-tight text-zinc-50 max-w-3xl">
                        Hi, I'm <span className="text-[#FFD700]">Mohammed Mansoor.</span>
                    </h1>

                    <h1 className="font-bold text-xl md:text-4xl leading-tight text-zinc-50 max-w-3xl">
                        <span className='text-cyan-500'>
                            <Typewriter
                                words={[
                                    'I am a Full Stack Developer.',
                                    'I am a MERN Stack Developer.',
                                    'I am a Front-End Developer.',
                                    'I am a Back-End Developer.'
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 leading-loose tracking-wide text-justify">
                        I recently graduated from Osmania University with a B.Sc. in Computer Science, securing a CGPA of 70%. I am passionate about
                        software development and specialize in Full Stack Development using the MERN stack (MongoDB, Express.js, React, Node.js).
                    </p>
                    <div className="mt-8 text-zinc-400 text-sm md:text-base max-w-2xl leading-loose tracking-wide">
                        Currently, I'm building projects with the <a className="text-zinc-200 font-bold hover:text-[#FFD700] transition duration-150 outline-none" href="https://github.com/MohammedMansoor-Dev/">
                            MERN Stack
                        </a> and exploring opportunities to grow as a developer. ✨
                    </div>

                    <div className='flex flex-col justify-center items-center md:flex-row md:gap-8'>
                        <a href={Resume} target="_blank" rel="noopener noreferrer">
                            <div className='w-[16rem] h-[4rem] flex justify-center items-center transition-all duration-300 rounded-lg font-bold bg-transparent mt-6 text-white border-2 border-white hover:bg-white hover:text-black'>
                                View Resume
                            </div>
                        </a>
                        <a href='/contact' rel="noopener noreferrer">
                            <div className='w-[16rem] h-[4rem] flex justify-center items-center transition-all duration-300 bg-green-500 rounded-lg font-bold mt-6 text-white border-2 border-green-500 hover:bg-white hover:text-black hover:border-white'>
                                Hire me!
                            </div>
                        </a>
                    </div>
                </div>
                <div data-aos="fade-left" className="mt-4 lg:mt-0 flex flex-col items-center">
                    <div className="relative inline-block rounded-2xl p-1 bg-gradient-to-b from-[#ffffff60] to-white">
                        <img
                            alt="Avatar"
                            loading="lazy"
                            width="300"
                            height="300"
                            decoding="async"
                            className="transition duration-500 blur-0 scale-100 rounded-2xl"
                            srcSet={Pic}
                            src={Pic}
                            style={{ color: 'transparent' }}
                        />
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-4 text-white">
                        <a href='https://github.com/MohammedMansoor-Dev/' target='_blank' rel="noopener noreferrer">
                            <FaGithub className='hover:fill-[#FFD700] text-2xl cursor-pointer' />
                        </a>
                        <a href='https://www.linkedin.com/in/mohammed-mansoor-201a81343/' target='_blank' rel="noopener noreferrer">
                            <FaLinkedin className='hover:fill-[#FFD700] text-2xl cursor-pointer' />
                        </a>
                        <a href='https://wa.me/9849600239' target='_blank' rel="noopener noreferrer">
                            <IoLogoWhatsapp className='hover:fill-[#FFD700] text-2xl cursor-pointer' />
                        </a>
                        <a href='mailto:mohammedmansoor.dev@gmail.com' target='_blank' rel="noopener noreferrer">
                            <MdEmail className='hover:fill-[#FFD700] text-2xl cursor-pointer' />
                        </a>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up">
                <WorkExp />
            </div>
            <div data-aos="fade-up">
                <Projects />
            </div>
            <div data-aos="fade-up">
                <Education />
            </div>
            <div data-aos="fade-up">
                <Skills />
            </div>
        </>
    );
};

export default Home;