import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";

const Loginform = ({setIsLoggedIn}) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({email:"", password:""})
    const [showPass, setShowPass] = useState(false)

    function changeHandler(e){
        setFormData((prevdata) => ({
            ...prevdata, 
            [e.target.name]:e.target.value
        }))
    }

    function submitHandler(e){
        e.preventDefault();
        setIsLoggedIn(true)
        toast.success("Logged in")
        navigate("/")
    }

    return (
        <form className="flex flex-col" onSubmit={submitHandler}>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-black-100 mb-1 leading-[1.375rem]">
                Email Address
                <sup className="text-pink-200">*</sup>
                </p>
                <input required type="email" value={formData.email} onChange={changeHandler} name="email" placeholder="Enter email address"
                 className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]">
                 </input>
                {/* <div className="absolute w-full rounded-[0.5rem] inset-x-0 bottom-[0.5px] h-[5px] bg-gradient-to-r from-gray-300 to-transparent"></div> */}
            </label>

            <label  className="w-full relative">
                <p className="text-[0.875rem] text-black-100 mb-1 leading-[1.375rem]">Password
                <sup className="text-pink-200">*</sup>
                </p>
                <input required type={showPass ? ("text") : ("password")} value={formData.password} name="password" onChange={changeHandler} placeholder="Enter password"
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                > 
                </input>
                
                <span onClick={() => setShowPass((prev) => !prev)}
                className="text-white absolute right-3 top-[38px] cursor-pointer"
                >
                    {showPass ? (<AiOutlineEyeInvisible fontSize={24} fill="#afb2bf"/>):(<AiOutlineEye fontSize={24} fill="#afb2bf"/>)}
                </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                </Link>
            </label>

            <button
            className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
            Sign in
            </button>
        </form>
    )
}

export default Loginform