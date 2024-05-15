import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

const Signupform = ({setIsLoggedIn}) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({firstname:"",lastname:"",email:"", password:"", confirmpassword:""})
    const [showPass, setShowPass] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)
    const [accountType, setAccountType] = useState("student")

    function changeHandler(e){
        setFormData((prevdata) => ({
            ...prevdata, 
            [e.target.name]:e.target.value
        }))
    }

    function submitHandler(e){
        e.preventDefault();

        if(formData.password != formData.confirmpassword){
            toast.error("Password Do Not Match")
            return
        }

        else{
            setIsLoggedIn(true)
            toast.success("Account Created")
            navigate("/")
        }
    }

    return (
        <div>
            <div className="flex p-1 gap-x-1 my-6 rounded-full max-w-max bg-richblack-800">
                <button
                onClick={() => setAccountType("student")}
                className = {`${accountType === "student" ? 
                    "bg-richblack-900 text-richblack-5 py-2 px-5 rounded-full transition-all duration-300"
                 : 
                    "bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-300"
                 }`}>
                Peer</button>
                <button
                onClick={() => setAccountType("instructor")}
                className = {`${accountType === "instructor" ? 
                    "bg-richblack-900 text-richblack-5 py-2 px-5 rounded-full transition-all duration-300"
                 : 
                    "text-richblack-200 bg-transparent py-2 px-5 rounded-full transition-all duration-300"
                 }`}>
                 Psychiatrist</button>
            </div>

            <form onSubmit={submitHandler}>
                <div className="flex gap-6 mt-4">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-900 mb-1 leading-[1.375rem]">
                        First Name
                        <sup className="text-pink-200">*</sup>
                        </p>
                        <input type="text" value={formData.firstname} name="firstname" onChange={changeHandler} placeholder="Enter first name"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]">
                        </input>
                    </label>

                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-900 mb-1 leading-[1.375rem]">
                        Last Name
                        <sup className="text-pink-200">*</sup></p>
                        <input type="text" value={formData.lastname} name="lastname" onChange={changeHandler} placeholder="Enter last name"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
                    </label>
                </div>

                <div className="mt-4">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-900 mb-1 leading-[1.375rem]">
                        Email Address
                        <sup className="text-pink-200">*</sup></p>
                        <input required type="email" value={formData.email} onChange={changeHandler} name="email" placeholder="Enter email id"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
                </label></div>



                <div className="flex flex-row gap-6 mt-4">
                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-900 mb-1 leading-[1.375rem]">
                        Create Password
                        <sup className="text-pink-200">*</sup>
                        </p>
                        <input required type={showPass ? ("text") : ("password")} value={formData.password} name="password" onChange={changeHandler} placeholder="Enter password"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
                    
                        <span onClick={() => setShowPass((prev) => !prev)}
                        className="text-white absolute right-3 top-[38px] cursor-pointer"
                        >
                            {showPass ? (<AiOutlineEyeInvisible fontSize={24} fill="#afb2bf"/>):(<AiOutlineEye fontSize={24} fill="#afb2bf"/>)}
                        </span>
                    </label>

                    <label className="w-full relative">
                        <p className="text-[0.875rem] text-richblack-900 mb-1 leading-[1.375rem]">
                        Confirm Password
                        <sup className="text-pink-200">*</sup>
                        </p>
                        <input required type={showConfirmPass ? ("text") : ("password")} value={formData.confirmpassword} name="confirmpassword" onChange={changeHandler} placeholder="Confirm password"
                        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
                        
                        <span onClick={() => setShowConfirmPass((prev) => !prev)}
                        className="text-white absolute right-3 top-[38px] cursor-pointer"
                        >
                            {showConfirmPass ? (<AiOutlineEyeInvisible fontSize={24} fill="#afb2bf"/>):(<AiOutlineEye fontSize={24} fill="#afb2bf"/>)}
                        </span>
                    </label>
                </div>

                <button
                    className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full"
                >Create Account</button>
            </form>
        </div>
    )
}

export default Signupform