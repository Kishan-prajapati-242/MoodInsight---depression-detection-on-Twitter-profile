import React from "react";
import toast from "react-hot-toast";
import {Link} from 'react-router-dom'
import logo from '../assets/logo2.png'
import profile from '../assets/profile.png'
import { useState } from "react";
import { Left } from "./Left";


const Navbar = (props) => {

    let isLoggedin = props.isLoggedin;
    let setIsLoggedin = props.setIsLoggedin;
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <div className="w-full bg-gray-2 bg-opacity-50 bg-white shadow-md">
            <div className="flex justify-between items-center w-11/12 max-w-[1160px] mx-auto py-1">
                <Link to="/">
                    <img className="" src={logo} alt="logo" width={160} height={32} loading="lazy"/>
                </Link>

                <div></div>

                <nav className="text-richblack-900 text-[18px]">
                    <ul className="flex gap-[70px]">
                        <li>
                        <Link
                            to="/"
                            className={`hover:text-richblack-900 rounded-xl transition-all duration-400 hover:bg-gray-200 p-2 ${selectedOption === 'home' ? 'bg-gray-400 text-white' : ''}`}
                            onClick={() => setSelectedOption('home')}
                        >
                            Home
                        </Link>
                        </li>
                        <li>
                        <Link
                            to="/questionaries"
                            className={`hover:text-richblack-900 rounded-xl transition-all duration-400  hover:bg-gray-200 p-2 ${selectedOption === 'questionaries' ? 'bg-gray-400 text-white' : ''}`}
                            onClick={() => setSelectedOption('questionaries')}
                        >
                            MADRS
                        </Link>
                        </li>
                        <li>
                        <Link
                            to="/about"
                            className={`hover:text-richblack-900 rounded-xl transition-all duration-400  hover:bg-gray-200 p-2 ${selectedOption === 'about' ? 'bg-gray-400 text-white' : ''}`}
                            onClick={() => setSelectedOption('about')}
                        >
                            About us
                        </Link>
                        </li>
                        <li>
                        <Link
                            to="/documentation"
                            className={`hover:text-richblack-900 rounded-xl transition-all duration-400  hover:bg-gray-200 p-2 ${selectedOption === 'documentation' ? 'bg-gray-400 text-white' : ''}`}
                            onClick={() => setSelectedOption('documentation')}
                        >
                            Documentation
                        </Link>
                        </li>
                    </ul>
                </nav>

                {/* login/singup/logout/dashboard buttons*/}

                <div className="flex items-center gap-x-4">
                    {   !isLoggedin &&
                        <Link to="/login">
                            <button 
                                className="bg-gray-800 bg-opacity-90 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
                            >
                                Log in
                            </button>
                        </Link> 
                    }
                    {   !isLoggedin &&
                        <Link to="/signup">
                            <button 
                                className="bg-gray-800 bg-opacity-90 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
                            >
                                Sign up</button>
                        </Link> 
                    }
                    {   isLoggedin &&
                        <Link to="/">
                            <button 
                                className="bg-gray-800 bg-opacity-90 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
                                onClick={() => {
                            setIsLoggedin(false)
                            toast.success("Logged Out")
                        }}>Log out</button>
                    </Link> 
                    }


                    {/* {   isLoggedin &&
                        <Link to="/dashboard">
                            <button 
                                className="bg-gray-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
                            >
                                Dashboard</button>
                    </Link> } */}
                </div>

            </div>

            {isLoggedin &&
                <Link to="/profile" className="absolute top-0 right-[70px]">
                    <img src={profile} className="w-12 h-12 rounded-full opacity-100" alt="Profile" ></img>
                </Link>
            }
            {/* <div className="h-1 bg-gray-200"></div> */}
            {/* <div className="inset-x-0 bottom-0 h-1 bg-gradient-to-b from-gray-800 via-transparent to-transparent"></div> */}
            {/* <div className="bottom-0 left-0 w-full h-1 bg-black shadow-navbar"></div> */}
        </div>
    )
}

export default Navbar