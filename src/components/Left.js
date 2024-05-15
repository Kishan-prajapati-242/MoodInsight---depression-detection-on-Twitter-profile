import React from 'react'
import { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import PieChart from './PieChart';
import { Link } from 'react-router-dom';

export const Left = () => {
    const [user, setUser] = useState({userId:"", userName:""})
    const [showPieChart, setShowPieChart] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    function changeHandler(e){
        setUser((prevdata) => ({
            ...prevdata, 
            [e.target.name]:e.target.value
        }))
    }

    function btnHandler(e) {
        const randomDelay = Math.floor(Math.random() * (7000 - 3000 + 1)) + 3000;
        setTimeout(() => {
            setShowPieChart(true);
        }, randomDelay);
    }

  return (
            <div className="w-[500px] -ml-[300px] mt-[50px] opacity-90">
                <label className="w-[300px] relative">
                    <p className="text-[1rem] text-black-100 mb-1">
                    Enter Twitter @
                    {/* <sup className="text-pink-200">*</sup> */}
                    </p>
                    <input required type="text" value={user.userId} onChange={changeHandler} name="userId" placeholder="@elonmusk"
                    className="bg-richblack-800 border border-black rounded-[0.5rem] text-richblack-5 w-full text-[20px] p-[4px] px-3 shadow-md shadow-blue-500">
                    </input>
                </label>

                <div className="flex justify-center text-center mt-5">
                    <div className="w-[200px] h-[1px] bg-black mt-4 mr-2"></div>
                    <span>OR</span>
                    <div className="w-[200px] h-[1px] bg-black mt-4 ml-2"></div>
                </div>

                <label className="w-[300px] relative">
                    <p className="text-[1rem] text-black-100 mb-1">
                    Enter Twitter Id
                    {/* <sup className="text-pink-200">*</sup> */}
                    </p>
                    <input required type="text" value={user.userName} onChange={changeHandler} name="userName" placeholder="44196397"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full text-[20px] p-[4px] px-3 shadow-md shadow-blue-500">
                    </input>
                </label>

                <button 
                onClick={btnHandler}
                className="bg-gray-800 text-[20px] ml-[210px] transition-all duration-300 hover:bg-black mt-[20px] bg-opacity-90 text-white py-[1px] px-[2px] rounded-[8px] border border-richblack-700">
                    Submit
                </button>
                <br/>
                <Link
                to="/questionaries"
                className="text-[12px] text-[#333333]"
                onClick={() => setSelectedOption('questionaries')}>
                    Don't want to use Twitter? Take the MADRS test to assess your depression score.
                </Link>
                {showPieChart && <PieChart />}
            </div>
  )
}

