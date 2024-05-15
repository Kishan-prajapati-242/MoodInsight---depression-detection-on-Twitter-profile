import React, { useState } from 'react';
import { PendulumLoader } from './Pendulum';

export const Right = () => {
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setShowContent(true);
      setLoading(false);
    }, Math.floor(Math.random() * (7000 - 3000 + 1)) + 3000); // Random duration between 3 to 7 seconds
  };

  return (
    <div className="relative">
      <button className="bg-gray-800 hover:bg-gray-900 mt-[40px] bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 text-white hover:text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={handleClick}>
        Recommendation
      </button>

      <div className="absolute -ml-[270px] mt-[50px] w-[800px] rounded-xl border-black bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 overflow-scroll h-[550px] shadow-xl shadow-richblack-200 opacity-90">
        {loading && (
          <PendulumLoader/>
        )}

        {showContent && (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Recommendations to Avoid Depression Based on Elon Musk's Recent Tweets</h2>
            <p className="text-sm text-gray-800 mb-2">*Note: The following recommendations consider the predominantly short length of Elon Musk's recent tweets, potentially affecting the accuracy of depression detection.*</p>
            
            <ol className="list-decimal pl-6">
              <li className="text-sm text-gray-800 mb-2">Mindfulness Practices: Encourage incorporating meditation or deep breathing exercises into daily routines for centering and stress relief.</li>
              
              <li className="text-sm text-gray-800 mb-2">Balanced Lifestyle: Prioritize sufficient sleep, regular exercise, and healthy eating habits to support physical and mental well-being.</li>
              
              <li className="text-sm text-gray-800 mb-2">Establish Boundaries: Set boundaries between work and personal life to allow for relaxation and quality time with loved ones.</li>
              
              <li className="text-sm text-gray-800 mb-2">Seek Support Networks: Reach out to trusted friends, family, or mental health professionals for emotional support and guidance.</li>
              
              <li className="text-sm text-gray-800 mb-2">Practice Gratitude: Foster a mindset of gratitude by reflecting on positive aspects of life and relationships.</li>
              
              <li className="text-sm text-gray-800 mb-2">Limit Social Media Exposure: Be mindful of negative influences on social media and take breaks when needed.</li>
              
              <li className="text-sm text-gray-800 mb-2">Professional Support: Seek professional help if feelings of depression persist or become overwhelming.</li>
            </ol>
            
            <p className="text-sm text-gray-800 mt-4">These recommendations aim to support Elon Musk's well-being amidst his busy schedule and high-profile responsibilities.</p>
          </div>
        )}
      </div>
    </div>
  );
};
