

const AmericanAirlines = () => {
    return <section className="md:mt-[160px] mx-auto max-w-[1400px]">
        <div className="bg-[url('https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[200px] flex  items-center justify-center ">   
        <h3 className="text-[1.67em] text-gray-700 font-semibold ">American Airlines</h3>
        </div>
        <div className="flex flex-col  md:flex-row shrink mx-[30px] md:mx-[40px] items-center mt-[120px] gap-[20px]  text-gray-500 ">
            <div className="md:w-[50%]  rounded-[10px] shadow-lg border-[1px] border-gray-200 ">
                <h2 className="w-[95%] md:mx-auto ml-[16px] text-[1.9rem] leading-9 font-semibold text-gray-500 mt-[30px]">There is a diverse selection of choices available.</h2>
                <p className="text-[0.85rem]  md:mx-auto ml-[16px] leading-7 md:leading-5 mt-[14px] w-[95%] mb-[20px]">Join American Airlines on an adventure to enrich your knowledge of diverse cultures and broaden your perspective. Embrace the excitement and self-development that accompany exploring new places. Count on our devoted team, committed to providing exceptional support and comprehensive accommodations for all your travel requirements.</p>
                <span className=" w-[95%] md:mx-auto ml-[16px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out mb-[30px] ">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className=" md:w-[50%]   ">
                <img loading="lazy" className="h-full w-full  object-cover object-center  rounded-[10px]" src="https://images.unsplash.com/photo-1608023136037-626dad6c6188?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="diverse selection of choices" />
            </div>
        </div>
        <div className="flex flex-col-reverse mx-[30px] mb:mx-[40px] shrink items-center md:flex-row-reverse mt-[120px] gap-[20px]  text-gray-500">
            <div className=" md:w-[50%]  shadow-lg rounded-[10px] border-[1px] border-gray-200">
                <h2 className="w-[95%] md:mx-auto ml-[16px] text-[1.9rem] leading-9 font-semibold text-gray-500 mt-[30px]">As you embark on your journey, it is our responsibility to provide support and help.</h2>
                <p className="text-[0.85rem] leading-7  md:leading-5 md:mx-auto ml-[16px] mt-[14px] w-[95%] mb-[20px]">Our collaboration with American Airlines at rivaltrip.com allows us to provide our customers with an exceptional travel experience. We offer domestic and international flights that meet strict standards and strive for excellence. Our top priority is the satisfaction and comfort of our clients, ensuring a smooth and enjoyable journey for all.</p>
                <span className=" w-[95%] md:mx-auto ml-[16px] mb-[30px]  block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className="md:w-[50%]   ">
                <img loading="lazy" className="h-full w-full object-cover object-center  rounded-[10px]" src="https://images.unsplash.com/photo-1733931156590-10d8dab8518c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="American Airlines" />
            </div>
        </div>
        <div className="flex flex-col md:flex-row shrink mx-[30px] md:mx-[40px] items-center mt-[120px] gap-[20px]  text-gray-500 mb-[90px]">
            <div className=" md:w-[50%] shadow-lg rounded-[10px] border-[1px] border-gray-200">
                <h2 className="w-[95%] md:mx-auto ml-[16px]  text-[1.9rem] font-semibold text-gray-500 mt-[30px] leading-9">Ample assistance is readily accessible to aid in your effective use of it.</h2>
                <p className="text-[0.85rem]  md:mx-auto ml-[16px] pleading-7 md:pleading-5 mt-[14px] w-[95%] mb-[20px]">At rivaltrip.com, our top priority is providing unparalleled support for your American Airlines trips. Our dedicated team is always available to assist with any booking, modification, or cancellation requests you may have. We understand that unexpected situations may arise while traveling, and it is our aim to provide reliable help for a seamless journey.</p>
                <span className=" w-[95%] md:mx-auto ml-[16px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out mb-[30px] ">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className=" md:w-[50%]  ">
                <img loading="lazy" className="h-full w-full object-cover object-center  rounded-[10px]" src="https://img.freepik.com/free-photo/day-office-travel-agency_23-2150769958.jpg?t=st=1744004863~exp=1744008463~hmac=a5143fd19554aaab89b8392f79bafe03acfccd18a68dc3144b5898316786acc3&w=996" alt="Ample Assistance" />
            </div>
        </div>
    </section>
}

export default AmericanAirlines;