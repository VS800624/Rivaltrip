import React, { useState, useEffect } from 'react';

const Call = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setVisible(true); // Show on scroll up
      } else {
        setVisible(false); // Hide on scroll down
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed max-w-[1400px] mx-auto bottom-6 left-6 right-6 md:left-12 md:right-12 bg-gradient-to-r from-indigo-600 to-pink-500 text-white py-6 px-8 md:px-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-8 opacity-90 active:opacity-100 hover:opacity-100  ${
        !visible && 'hidden'
      } z-50`}
    >
      <div className="space-y-3 text-center sm:text-left">
        <h2 className="text-xl md:block hidden font-extrabold leading-tight tracking-tight">
          Embark on Your Dream Journey!
        </h2>
        <p className="text-md sm:text-lg font-medium opacity-100">
        Plan your trip today or contact us for personalized travel advice.
        </p>
      </div>

      <button
        onClick={() => (window.location.href = 'tel:+1-804-881-1189')}
        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-base sm:text-lg md:px-8 md:py-3 px-[18px] py-[10px] rounded-full hover:from-purple-700 hover:to-blue-600 active:opacity-100 hover:opacity-100 transition-all duration-300 font-semibold  sm:w-auto transform hover:scale-105"
      >
        Connect Now
      </button>
    </div>
  );
};

export default Call;