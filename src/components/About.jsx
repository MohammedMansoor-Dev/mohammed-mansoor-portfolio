import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,  // To animate only once
    });
  }, []);

  return (
    <div className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* About Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#FFD700]" data-aos="fade-up">
            About Mohammed Mansoor
          </h1>
          <p className="text-lg sm:text-xl mt-4 text-zinc-400" data-aos="fade-up" data-aos-delay="200">
            Full Stack MERN Developer | Passionate about coding, building projects, and problem-solving.
          </p>
        </div>
        
        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Who Am I Section */}
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Who Am I?</h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Hello! I'm Mohammed Mansoor, a Full Stack Developer with a solid foundation in
              the MERN stack (MongoDB, Express.js, React, Node.js). I am passionate about learning new technologies,
              solving real-world problems, and building full-stack applications that make an impact.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              As a fresher, I am actively seeking new opportunities to enhance my skills, contribute to meaningful projects, 
              and grow as a developer. I'm always eager to learn and take on new challenges.
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Skills & Technologies</h2>
            <ul className="space-y-2">
              <li className="text-sm sm:text-base text-zinc-400">• Full Stack Development (MERN)</li>
              <li className="text-sm sm:text-base text-zinc-400">• Front-End: React, HTML, CSS, TailwindCSS</li>
              <li className="text-sm sm:text-base text-zinc-400">• Back-End: Node.js, Express.js</li>
              <li className="text-sm sm:text-base text-zinc-400">• Databases: MongoDB, MySQL</li>
              <li className="text-sm sm:text-base text-zinc-400">• Version Control: Git, GitHub</li>
              <li className="text-sm sm:text-base text-zinc-400">• RESTful APIs & JWT Authentication</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Education</h2>
          <ul className="space-y-4 mt-4">
            <li className="text-sm sm:text-base text-zinc-400">
              <strong>B.Sc. in Computer Science</strong> - Osmania University | <span className="text-[#FFD700]">76%</span>
            </li>
            <li className="text-sm sm:text-base text-zinc-400">
              <strong>Intermediate (12th)</strong> - TS BIE | <span className="text-[#FFD700]">64%</span>
            </li>
            <li className="text-sm sm:text-base text-zinc-400">
              <strong>SSC (10th)</strong> - State Board | <span className="text-[#FFD700]">95%</span>
            </li>
          </ul>
        </div>

        {/* Call to Action / Footer Section */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
          <p className="text-sm text-zinc-400">
            I am excited to embark on my professional journey in tech and am looking forward to contributing to projects that make a difference. Feel free to
            <span className="text-[#FFD700]"> reach out</span> to me for any opportunities!
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 text-white py-3 px-6 rounded-lg border-2 border-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;