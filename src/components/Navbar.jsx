import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import Logo from '../assets/front-end-logo-black.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current route

    // Helper function to check if the current path matches the link
    const isActive = (path) => {
        return location.pathname === path ? 'text-cyan-500' : '';
    };

    return (
        <div className="w-full bg-black text-white">
            <div className="flex justify-between items-center px-6 md:px-14 py-6">
                {/* Logo */}
                <div>
                    <a href="/home"><img src={Logo} className="invert w-[3rem]" alt="Logo" /></a>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex flex-row space-x-8 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800 top-0 z-50">
                    {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((text, idx) => {
                        const path = `/${text.toLowerCase().replace(' ', '-')}`;
                        return (
                            <Link
                                key={idx}
                                to={path} // Use Link to ensure React Router handles the navigation
                                className={`text-sm font-bold px-2 py-2 rounded-md hover:bg-[#3f3f45] transition-all ${isActive(path)}`}
                            >
                                {text}
                            </Link>
                        );
                    })}
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <FaTimes className="text-2xl" />
                        ) : (
                            <FaBars className="text-2xl" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 pb-6">
                    {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((text, idx) => {
                        const path = `/${text.toLowerCase().replace(' ', '-')}`;
                        return (
                            <Link
                                key={idx}
                                to={path} // Use Link for proper routing
                                className={`text-sm font-semibold text-white hover:underline ${isActive(path)}`}
                                onClick={() => setIsOpen(false)} // Close on click
                            >
                                {text}
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Navbar;