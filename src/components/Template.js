import React from "react"
import frameImg from '../assets/frame.png'
import loginImg from '../assets/login.png'
import signupImg from '../assets/signup.png'
import Signupform from './Signupform'
import Loginform from './Loginform'
import {FcGoogle} from 'react-icons/fc'
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google"
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Template = ({title, desc1, desc2, formtype, setIsLoggedIn}) => {

    const navigate = useNavigate()

    const login = useGoogleLogin({
        onSuccess: (toeknResponse) => {console.log(toeknResponse);
            navigate("/dashboard");
            setIsLoggedIn(true)
        }
    })

    return (
        <div className="flex w-11/12 max-w-[1160px] py-[100px] mx-auto justify-between gap-y-0">
            <div className="w-11/12 max-w-[450px]">
                <h2 className="text-richblack-900 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h2>

                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className="text-richblack-900">{desc1}</span>
                    <br/>
                    <span className="text-blue-100 italic">{desc2}</span>
                </p>

                {formtype === "signup" ? 
                    (
                        <Signupform setIsLoggedIn={setIsLoggedIn}/>
                    ) :
                    (
                       <Loginform setIsLoggedIn={setIsLoggedIn}/>
                    )
                }

                <div className="w-full flex items-center my-4 gap-x-2">
                    <div className="w-full h-[1px] bg-richblack-700 "></div>
                    <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
                    <div className="w-full h-[1px] bg-richblack-700 "></div>
                </div>

                <button
                onClick={() => login()}
                className="w-full flex justify-center text-richblack-700 items-center rounded-[8px] font-mdeium bg-gray-400 bg-opacity-20 font-medium border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6">
                    <FcGoogle className="text-[20px]"></FcGoogle>
                    <p>Sign in With Google</p>
                </button>
{/* 
                <GoogleLogin
                    onClick={loginHandler}
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log("Login Failed")
                    }}
                /> */}

            </div>

            <div className="relative w-11/12 max-w-[450px]">
                <img className="" src={frameImg} alt="pattern" width={558} height={504} loading="lazy"></img>
                {formtype === 'signup' ?
                    (<img className="absolute -top-4 right-4" src={loginImg}  alt="students" width={558} height={504} loading="lazy"></img>):
                    (<img className="absolute -top-4 right-4" src={signupImg}  alt="students" width={558} height={504} loading="lazy"></img>)
                }
            </div>
        </div>
    )
}

export default Template