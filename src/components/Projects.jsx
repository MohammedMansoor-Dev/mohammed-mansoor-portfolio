import React, { useEffect, useRef, useState } from 'react';
import AmazonImg from '../assets/amazon.jpg';
import LmsImg from '../assets/lms.jpg';
import ChatAppImg from '../assets/ChatImg.png';
import BlogImg from '../assets/BlogImg.jpeg';
import TaskAppImg from '../assets/taskImg.jpg';

const Projects = () => {
    const scrollRef = useRef(null);
    const intervalRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = scrollContainer.scrollTop;
        const scrollStep = 1;

        const startScrolling = () => {
            intervalRef.current = setInterval(() => {
                if (!isHovered) {
                    const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
                    if (scrollAmount < maxScroll) {
                        scrollAmount += scrollStep;
                        scrollContainer.scrollTop = scrollAmount;
                    } else {
                        scrollAmount = 0;
                        scrollContainer.scrollTop = 0;
                    }
                }
            }, 30);
        };

        startScrolling();

        return () => clearInterval(intervalRef.current);
    }, [isHovered]);

    const projects = [
        {
            img: LmsImg,
            title: 'LMS Platform',
            link: 'https://lms-platform-fats.onrender.com/',
            desc: 'A Learning Management System (LMS) built with the MERN stack. It features Stripe payment integration, protected routes, role-based dashboards, and responsive UI to facilitate modern learning experiences.',
        },
        {
            img: BlogImg,
            title: 'HackHub - Blogging Platform',
            link: 'https://hackhub-blogging-web-application.onrender.com/',
            desc: 'HackHub is a MERN-based blogging platform that supports user-auth, content creation, WYSIWYG editor, and categorized blog post filtering. Designed for tech writers to share ideas and tutorials.',
        },
        {
            img: ChatAppImg,
            title: 'Chat Application',
            link: 'https://www.linkedin.com/feed/update/urn:li:activity:7314271538281639936/',
            desc: 'Real-time chat app built using the MERN stack and Socket.IO. Includes 1-on-1 chat, group messaging, typing indicators, user roles, and authentication with JWT.',
        },
        {
            img: AmazonImg,
            title: 'Amazon Clone',
            link: 'https://www.linkedin.com/feed/update/urn:li:activity:7288281161879986176/',
            desc: 'An e-commerce clone of Amazon built using Next.js and TypeScript. Includes dynamic routing, product grids, cart system, and smooth UI animations for performance and scalability.',
        },
        {
            img: TaskAppImg,
            title: 'Task Management App',
            link: 'https://www.linkedin.com/feed/update/urn:li:activity:7312084059378139136/',
            desc: 'A full-featured task manager built with the MERN stack, including a role-based Admin Panel to oversee users and tasks. CRUD support, clean dashboard UI, and efficient permission handling included.',
        },
    ];

    return (
        <div className="max-w-5xl mx-auto px-8 pt-10 pb-4 mt-10 md:mt-20">
            {/* Fixed heading */}
            <div className="text-white sticky top-0 z-10 pb-6 bg-black">
                <h1 className="text-2xl md:text-3xl text-white font-bold">
                    Projects
                </h1>
                <p className="text-zinc-600 text-sm md:text-base max-w-2xl mt-2 leading-loose tracking-wide">
                    Explore a selection of projects built to showcase practical skills and real-world problem-solving abilities.
                </p>
            </div>

            {/* Scrollable & hover-pausable content */}
            <div
                ref={scrollRef}
                className="h-[26rem] overflow-y-scroll mt-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => {
                    setTimeout(() => setIsHovered(false), 200);
                }}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <style>
                    {`
                        /* Chrome, Safari, Edge */
                        div::-webkit-scrollbar {
                            display: none;
                        }
                    `}
                </style>

                <div className="grid grid-cols-1 gap-6">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block p-2"
                        >
                            <div className="flex flex-col md:flex-row items-center bg-zinc-800 border group-hover:border-zinc-700 rounded-2xl overflow-hidden transition duration-300">
                                <div className="w-full md:w-[20rem] h-40 overflow-hidden">
                                    <img
                                        src={project.img}
                                        className="w-full h-full object-fill object-center group-hover:scale-105 transition-all duration-700 ease-in-out"
                                        alt={project.title}
                                    />
                                </div>
                                <div className="p-6 flex-1">
                                    <h2 className="text-white text-xl font-bold group-hover:text-[#FFD700] transition-colors">
                                        {project.title}
                                    </h2>
                                    <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                                        {project.desc}
                                    </p>
                                    <p className="mt-4 text-cyan-400 text-sm font-medium underline">
                                        🔗 Live Demo
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;