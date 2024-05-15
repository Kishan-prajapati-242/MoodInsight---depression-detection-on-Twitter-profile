import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { Left } from "../components/Left";
import { Right } from "../components/Right";

const Home = ({isLoggedIn}) => {


    return (
        <div className="flex justify-evenly text-3xl text-black h-full mt-[10px]">

            <Left/>

            <div className="w-[1px] -ml-[300px] my-7 mb-[70px] opacity-30 bg-black"></div>

            <Right/>
        </div>
    )
}

export default Home