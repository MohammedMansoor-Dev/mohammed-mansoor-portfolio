import React, { useRef, useEffect, useState } from 'react';
import cImg from '../assets/c.png';
import cppImg from '../assets/c++.png';
import jsImg from '../assets/js.png';
import reactImg from '../assets/react.png';
import mongodbImg from '../assets/mongodb.png';
import sqlImg from '../assets/sql.png';
import nodeImg from '../assets/nodejs.png';
import expressImg from '../assets/express.png';
import dotnetImg from '../assets/dotnet.png';
import dsaImg from '../assets/dsa.png';
import nextImg from '../assets/next.png';

const Skills = () => {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let scrollPos = 0;
        const scrollSpeed = 1;

        const scroll = () => {
            if (!isHovered && container) {
                scrollPos += scrollSpeed;
                if (scrollPos >= container.scrollWidth / 2) {
                    scrollPos = 0;
                }
                container.scrollLeft = scrollPos;
            }
        };

        const interval = setInterval(scroll, 20);
        return () => clearInterval(interval);
    }, [isHovered]);

    const skillImages = [
        cImg,
        cppImg,
        jsImg,
        reactImg,
        mongodbImg,
        nextImg,
        sqlImg,
        nodeImg,
        expressImg,
        dotnetImg,
        dsaImg,
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 mt-10 md:mt-20">
            <h1 className="text-2xl md:text-3xl text-white font-bold mt-10 md:mt-20">
                Tech Stack
            </h1>
            <p className="text-zinc-400 text-sm md:text-base max-w-3xl mt-4 mb-6 leading-relaxed tracking-wide">
                I'm currently honing my skills in full stack development using the MERN stack, alongside Next.js and TypeScript. I deploy projects using platforms like Render and Vercel and use Git for version control.
            </p>

            {/* Marquee Container */}
            <div
                ref={scrollRef}
                className="overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar border border-zinc-700 rounded-xl py-4 px-2 transition-all ease-in-out"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="inline-flex gap-8 items-center min-w-max">
                    {skillImages.concat(skillImages).map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`skill-${i}`}
                            className="w-[4rem] h-[4rem] object-contain transition-transform duration-300"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
