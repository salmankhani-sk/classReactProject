import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
    const [isMenu, setIsMenu] = useState(false);

    const toggleMenu = () => {
        setIsMenu(!isMenu);
    };

    return (
        <nav className='flex flex-wrap items-center justify-between p-6 mr-20 ml-20 mt-8 sticky top-0 z-50 bg-white'>
            <div className='flex items-center text-black font-bold text-4xl hover:cursor-pointer'>
                <div className='text-blue-800 font-bold hover:text-yellow-600'>
                    <Link to='/'>IT</Link>
                </div>
                <div>Solution</div>
            </div>
            <button className='lg:hidden' onClick={toggleMenu}>
                {isMenu ? (
                    <RxCross1 className="text-2xl transition-all duration-500 ease-in-out transform" />
                ) : (
                    <GiHamburgerMenu className="text-2xl transition-all duration-500 ease-in-out transform" />
                )}
            </button>
            <div className={`w-full block flex-grow lg:hidden lg:w-auto ${isMenu ? 'block' : 'hidden'}`}>
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0">Home</Link>
                    <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0">About</Link>
                    <Link to="/services" className="block mt-4 lg:inline-block lg:mt-0">Services</Link>
                    <Link to="/signin" className="block mt-4 lg:inline-block lg:mt-0">Sign In</Link>
                    <Link to="/signup" className="block mt-4 lg:inline-block lg:mt-0">Sign Up</Link>
                    <Link to="/blog" className="block mt-4 lg:inline-block lg:mt-0">Contact Us</Link>
                </div>
            </div>
            <div className="hidden lg:block space-x-4">
                <Link to="/" className="text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:bg-slate-200 rounded-2xl hover:font-bold">Home</Link>
                <Link to="/about" className="text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:bg-slate-200 rounded-2xl hover:font-bold">About</Link>
                <Link to="/services" className="text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:bg-slate-200 rounded-2xl hover:font-bold">Services</Link>
                <Link to="/signin" className="text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:bg-slate-200 rounded-2xl hover:font-bold">Sign In</Link>
                <Link to="/signup" className="text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:bg-slate-200 rounded-2xl hover:font-bold">Sign Up</Link>
                <Link to="/contactus" className="text-black active:bg-blue-100 active:rounded-lg focus:text-blue-500 transition-all duration-500 ease-in-out transform hover:text-2xl hover:bg-slate-200 rounded-2xl hover:font-bold">Contact Us</Link>
            </div>
            <div></div>
        </nav>
    );
}

export default Navbar;