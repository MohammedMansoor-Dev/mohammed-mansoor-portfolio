import React, { useEffect } from 'react';
import { GrCertificate } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css';

import DegreePic from '../assets/degree.png';
import IntermediatePic from '../assets/intermediate.png';
import SscPic from '../assets/ssc.png';

const educationDetails = [
    {
        title: 'BSc in Computer Science – Osmania University',
        description: 'Completed my Bachelor of Science in Computer Science with an aggregate of 76%. Built strong foundations in data structures, algorithms, and programming concepts.',
        img: DegreePic,
    },
    {
        title: 'Intermediate (MPC) – TSBIE',
        description: 'Completed Intermediate education under TSBIE in the MPC stream with 64%, focusing on Mathematics, Physics, and Chemistry, and built analytical and problem-solving skills.',
        img: IntermediatePic,
    },
    {
        title: 'SSC – State Board',
        description: 'Successfully completed SSC with 95%. Built foundational knowledge in mathematics, science, and English.',
        img: SscPic,
    }
];

const Education = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
        });
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-8">
            <h1 className="text-2xl md:text-3xl text-white font-bold mt-20 md:mt-30" data-aos="fade-down">
                Education
            </h1>
            <p data-aos="fade-down" className="text-zinc-400 text-sm md:text-base max-w-2xl mt-4 leading-loose tracking-wide">
                Here is a summary of my academic qualifications, from school through graduation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10" data-aos="flip-left" data-aos-delay="100">
                {educationDetails.map(({ title, description, img, pdf, label }, i) => (
                    <a
                        key={i}
                        href={pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block p-2"
                    >
                        <div className="rounded-2xl overflow-hidden bg-zinc-800 border border-transparent group-hover:border-zinc-700 relative z-50">
                            <div className="relative z-50">
                                <div className="h-44 sm:h-60 md:h-44 w-full relative transition duration-500 bg-black/10 group-hover:bg-transparent">
                                    {img ? (
                                        <img
                                            alt={`${title} Logo`}
                                            src={img}
                                            className="absolute inset-0 object-fill object-center mix-blend-multiply w-full h-full"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-zinc-500">
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h4 className="text-zinc-100 font-bold tracking-wide mt-4 group-hover:text-[#FFD700]">
                                        {title}
                                    </h4>
                                    <p className="mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm text-justify">
                                        {description}
                                    </p>
                                    <div className="flex flex-row space-x-2 mt-4 items-center px-0.5">
                                        <p className="text-zinc-500 group-hover:text-[#FFD700] text-xs flex items-center gap-1">
                                            <GrCertificate />
                                            {label}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Education;