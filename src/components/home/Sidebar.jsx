import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolledEnough, setHasScrolledEnough] = useState(false);


    // Show sidebar after scrolling 600px
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 600 && !hasScrolledEnough) {
          setIsOpen(true);
          setHasScrolledEnough(true); // Ensure it only triggers once
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [hasScrolledEnough]);
  

  const toggleSidebar = () =>  setIsOpen(!isOpen);;

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.sidebar')) {
        event.stopPropagation();
        // console.log("Closed by outside click"); // Debug log
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleClose = () => {
    // console.log("Close button clicked"); // Debug log
    setIsOpen(false);
  };

  return (
    <div className="relative ">
      {/* Arrow Button to Open Sidebar */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 to-red-800 text-white p-2 rounded-r-lg z-50 hover:bg-gradient-to-r hover:from-red-700 hover:to-red-900 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Sidebar Content */}
      <div
        className={`fixed left-0 top-50 md:h-[40%] md:w-80 w-76 bg-gradient-to-br from-gray-700 via-gray-800 to-slate-900 text-white p-6 transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sidebar rounded-r-2xl shadow-2xl`}
      >
        {/* Close Button */}
        <button onClick={handleClose} className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors duration-200 cursor-pointer z-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Sidebar Header */}
        <h1 className="md:text-2xl text-xl font-extrabold text-yellow-400 mb-6 text-center animate-pulse-slow">RIVALTRIP</h1>

        {/* Flight Services */}
        <div className="space-y-6">
          <div className="flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-5 shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div className="text-left">
              <p className="md:text-[1.09rem] text-[0.95rem] font-semibold text-white">Flight Booking</p>
              <p className="md:text-sm text-[0.9rem] text-yellow-300">Available 24/7</p>
            </div>
          </div>

          <div className="flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-5 shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="md:text-[1.09rem] text-[0.95rem] font-semibold text-white">Special Offers</p>
              <p className="md:text-sm text-[0.9rem] text-yellow-300">Updated Daily</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => (window.location.href = 'tel:+1-804-881-1189')}
              className="md:text-[1rem] text-[0.9rem] cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 text-white text-base px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Call Now
            </button>
            <Link to="/FlightBooking">
            <button
              className="md:text-[1rem] text-[0.9rem] cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 text-white text-base px-6 py-2 rounded-full hover:from-purple-700 hover:to-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;