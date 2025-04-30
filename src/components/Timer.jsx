
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

 function Timer({ dealEndDate }) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const endDate = new Date(dealEndDate);
    const difference = endDate - now;

    if (difference <= 0) {
      return null; // Deal expired
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!timeLeft) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval when the component unmounts or timeLeft reaches 0
    return () => clearInterval(timer);
  }, [dealEndDate]); // Only run the effect when dealEndDate changes

  if (!timeLeft) {
    return (
      <div className="bg-red-100 mt-6 text-red-800 p-4 rounded-lg text-center max-w-md mx-auto">
        <p className="text-lg font-semibold">Deal Ended!</p>
        <p className="text-sm">Check out our other exciting offers!</p>
        <NavLink to="/destinations">
          <button className="mt-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-lg font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Explore Offers
          </button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="mt-[24px] md:mb-[0px] mb-[10px] bg-gradient-to-r from-teal-400/80 via-cyan-500/80 to-blue-500/80 text-white p-6 rounded-2xl shadow-xl max-w-sm md:max-w-md mx-auto text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm animate-pulse">
    <h2 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight">Act Now! Offer Expires Soon!</h2>
    <p className="text-sm mb-4 opacity-90">Don't miss out on this exclusive deal!</p>
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-white/10 p-2 rounded-lg">
        <span className="block text-3xl md:text-4xl font-bold">{timeLeft.days}</span>
        <span className="text-xs font-medium">Days</span>
      </div>
      <div className="bg-white/10 p-2 rounded-lg">
        <span className="block text-3xl md:text-4xl font-bold">{timeLeft.hours}</span>
        <span className="text-xs font-medium">Hours</span>
      </div>
      <div className="bg-white/10 p-2 rounded-lg">
        <span className="block text-3xl md:text-4xl font-bold">{timeLeft.minutes}</span>
        <span className="text-xs font-medium">Minutes</span>
      </div>
      <div className="bg-white/10 p-2 rounded-lg">
        <span className="block text-3xl md:text-4xl font-bold">{timeLeft.seconds}</span>
        <span className="text-xs font-medium">Seconds</span>
      </div>
    </div>
    <NavLink to="/FlightBooking">
      <button
        className="bg-amber-500 text-white text-sm md:text-base font-semibold px-[26px] py-[9px] rounded-full shadow-md hover:bg-amber-600 hover:shadow-lg transition-all duration-300 hover:scale-110 active:shadow-lg active:scale-110 cursor-pointer"
        aria-label="Book now to secure the deal"
      >
        Book Now
      </button>
    </NavLink>
  </div>
  );
}


export default Timer;