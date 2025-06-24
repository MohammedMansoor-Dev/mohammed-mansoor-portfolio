import React, { useEffect, useState } from 'react';
import { GrCertificate } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';

import ZidioPic from '../assets/zidio.png';
import SaiketPic from '../assets/saiket.png';
import CognifyzPic from '../assets/cognifyz.png';
import BrainwavePic from '../assets/Brainwave.png';
import NativeSoftPic from '../assets/NativePic.png';
import TechnoHacksPic from '../assets/TechnoHacks.png';

import ZidioPdf from '../assets/Zidio.pdf';
import SaiketPdf from '../assets/Saiket_Systems.pdf';
import CognifyzPdf from '../assets/Cognifyz_Technologies.pdf';
import BrainwavePdf from '../assets/Brainwave.pdf';
import NativeSoftPdf from '../assets/NativeSoft.jpg';
import TechnoHacksPdf from '../assets/TechnoHacks_Solutions.pdf';

const internships = [
    {
        title: 'Zidio Internship in Web Development',
        description: 'Completed a six-month internship at Zidio, focusing on building and improving web applications using modern web development technologies.',
        img: ZidioPic,
        pdf: ZidioPdf,
    },
    {
        title: 'Saiket Systems Internship as Full Stack Developer',
        description: 'Completed a one-month remote internship at Saiket Systems, where I worked as a Full Stack Developer building scalable web applications and APIs using the MERN stack.',
        img: SaiketPic,
        pdf: SaiketPdf,
    },
    {
        title: 'Cognifyz Internship in Web Development',
        description: 'Completed an internship at Cognifyz Technologies, where I worked on modern web development projects, gaining hands-on experience with frontend and backend technologies.',
        img: CognifyzPic,
        pdf: CognifyzPdf,
    },
    {
        title: 'Brainwave Internship as Full Stack Developer',
        description: 'Completed a Full Stack Development internship, working on real-world web applications using the MERN stack and collaborating with a remote team.',
        img: BrainwavePic,
        pdf: BrainwavePdf,
    },
    {
        title: 'NativeSoft Internship in Web Development',
        description: 'Completed an internship at NativeSoft, where I contributed to front-end and back-end development of web applications using modern tools in a collaborative environment.',
        img: NativeSoftPic,
        pdf: NativeSoftPdf,
    },
    {
        title: 'TechnoHacks Internship Offer',
        description: 'I received an internship offer letter from TechnoHacks for the role of Web Developer, recognizing my skills and potential to contribute to real-world projects using modern web technologies.',
        img: TechnoHacksPic,
        pdf: TechnoHacksPdf,
        label: 'View Offer Letter',
    },
];

const WorkExp = () => {
    const [sliderSettings, setSliderSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true, 
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024, // For large screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768, // For medium screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
        });
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-8">
            <h1 className="text-2xl md:text-3xl text-white font-bold mt-20 md:mt-30" data-aos="fade-up">
                Work Experience
            </h1>
            <p data-aos="fade-up" className="text-zinc-400 text-sm md:text-base max-w-2xl mt-4 leading-loose tracking-wide">
                I'm currently looking for the right opportunity to kick-start my career with a team that values growth and collaboration.
            </p>

            <Slider {...sliderSettings} className="mt-10">
                {internships.map(({ title, description, img, pdf, label }, i) => (
                    <div key={i} className="p-2" data-aos="zoom-in">
                        <a
                            href={pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group block p-2"
                        >
                            <div className="rounded-2xl overflow-hidden bg-zinc-800 border border-transparent group-hover:border-zinc-700 relative z-50">
                                <div className="relative z-50">
                                    <div className="h-44 sm:h-60 md:h-44 w-full relative transition duration-500 bg-black/10 group-hover:bg-transparent">
                                        <img
                                            alt={`${title} Logo`}
                                            src={img}
                                            className="absolute inset-0 object-fill object-center mix-blend-multiply w-full h-full"
                                        />
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
                                                {label || 'View Certificate'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default WorkExp;