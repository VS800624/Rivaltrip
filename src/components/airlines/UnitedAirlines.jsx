


const UnitedAirlines = () => {
    return <section className="md:mt-[160px] mx-auto max-w-[1450px]">
        <div className="bg-[url('https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[200px] flex  items-center justify-center ">   
        <h3 className="text-[1.67em] text-gray-700 font-semibold ">United Airlines</h3>
        </div>
        <div className="flex flex-col  md:flex-row shrink mx-[30px] md:mx-[40px] items-center mt-[120px] gap-[20px]  text-gray-500 ">
            <div className="md:w-[50%]  rounded-[10px] shadow-lg border-[1px] border-gray-200 ">
                <h2 className="w-[95%] md:mx-auto ml-[16px] leading-9 text-[1.9rem] font-semibold text-gray-500 mt-[30px]">United Airlines prides itself on providing exceptional customer service.</h2>
                <p className="text-[0.85rem]  md:mx-auto ml-[16px] leading-7 md:leading-5 mt-[14px] w-[95%] mb-[20px]">At United Airlines, our top priorities include ensuring customer satisfaction and maintaining safety. Our renowned reputation for reliability continues to earn the trust of countless travelers annually as we provide exceptional support for both domestic and international journeys. </p>
                <span className=" w-[95%] md:mx-auto ml-[16px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out mb-[30px] ">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className=" md:w-[50%]   ">
                <img loading="lazy" className="h-full w-full  object-cover object-center  rounded-[10px]" src="https://images.unsplash.com/photo-1655722724447-2d2a3071e7f8?q=80&w=1040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="exceptional customer service" />
            </div>
        </div>
        <div className="flex flex-col-reverse mx-[30px] mb:mx-[40px] shrink items-center md:flex-row-reverse mt-[120px] gap-[20px]  text-gray-500">
            <div className=" md:w-[50%]  shadow-lg rounded-[10px] border-[1px] border-gray-200">
                <h2 className="w-[95%] md:mx-auto ml-[16px] leading-9 text-[1.9rem] font-semibold text-gray-500 mt-[30px]">Choose United Airlines for a first-class journey. </h2>
                <p className="text-[0.85rem] leading-7  md:leading-5 md:mx-auto ml-[16px] mt-[14px] w-[95%] mb-[20px]">Enhance your travel experience with our top-notch amenities and added bonuses. Indulge in special benefits as you travel, including complimentary Wi-Fi access, priority seating, and automatic membership in MileagePlus – our loyalty program tailored to frequent flyers. This unparalleled program offers incentives for regular travelers, granting them points that can be used towards future trips, upgrades, and exclusive privileges. </p>
                <span className=" w-[95%] md:mx-auto ml-[16px] mb-[30px]  block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className="md:w-[50%]   ">
                <img loading="lazy" className="h-full w-full object-cover object-center  rounded-[10px]" src="https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=1070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="United Airlines plane" />
            </div>
        </div>
        <div className="flex flex-col md:flex-row shrink mx-[30px] md:mx-[40px] items-center mt-[120px] gap-[20px]  text-gray-500 mb-[90px]">
            <div className=" md:w-[50%] shadow-lg rounded-[10px] border-[1px] border-gray-200">
                <h2 className="w-[95%] md:mx-auto ml-[16px] leading-9 text-[1.9rem] font-semibold text-gray-500 mt-[30px]">United Airlines: Your perfect companion for all of your travel necessities.</h2>
                <p className="text-[0.85rem]  md:mx-auto ml-[16px] pleading-7 md:pleading-5 mt-[14px] w-[95%] mb-[20px]">Here at Rivaltrip.com, we are dedicated to providing a comprehensive travel package. Our expert staff is prepared to handle any inquiries regarding United Airlines flights and adjustments. Let us streamline your travel arrangements and uncover discounted rates for a hassle-free and budget-friendly journey.</p>
                <span className=" w-[95%] md:mx-auto ml-[16px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out mb-[30px] ">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className=" md:w-[50%]  ">
                <img loading="lazy" className="h-full w-full object-cover object-center  rounded-[10px]" src="https://plus.unsplash.com/premium_photo-1683121473774-4a148fbfe346?w=850&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fERlbHRhJTIwQWlybGluZXMlMjBpcyUyMHRoZSUyMHBlcmZlY3QlMjBvcHRpb24lMjBmb3IlMjBsYXVuY2hpbmclMjB5b3VyJTIwdHJhdmVscy58ZW58MHx8MHx8fDA%3D" alt="Your perfect companion" />
            </div>
        </div>
    </section>
}

export default UnitedAirlines;

