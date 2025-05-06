

const SpiritAirlines = () => {
    return <section className="md:mt-[160px] mx-auto max-w-[1450px]">
        <div className="bg-[url('https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[200px] flex  items-center justify-center ">   
        <h3 className="text-[1.67em] text-gray-700 font-semibold ">Spirit France</h3>
        </div>
        <div className="flex flex-col  md:flex-row shrink mx-[30px] md:mx-[40px] items-center mt-[120px] gap-[20px]  text-gray-500 ">
            <div className="md:w-[50%]  rounded-[10px] shadow-lg border-[1px] border-gray-200 ">
                <h2 className="w-[95%] md:mx-auto ml-[16px] leading-9 text-[1.9rem] font-semibold text-gray-500 mt-[30px]">Experience tailor-made vacations that accommodate both your budget and individual preferences.</h2>
                <p className="text-[0.85rem]  md:mx-auto ml-[16px] leading-7 md:leading-5 mt-[14px] w-[95%] mb-[20px]">Choose Spirit Airlines for unparalleled value and versatility. We offer outstanding accommodations that cater to all of your travel requirements, delivering convenient and affordable choices for both domestic and international journeys. </p>
                <span className=" w-[95%] md:mx-auto ml-[16px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out mb-[30px] ">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className=" md:w-[50%]   ">
                <img loading="lazy" className="h-full w-full  object-cover object-center  rounded-[10px]" src="https://images.unsplash.com/photo-1510663228452-83fb830ec1d6?fm=jpg&q=60&w=1150&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="your budget and individual preferences" />
            </div>
        </div>
        <div className="flex flex-col-reverse mx-[30px] mb:mx-[40px] shrink items-center md:flex-row-reverse mt-[120px] gap-[20px]  text-gray-500">
            <div className=" md:w-[50%]  shadow-lg rounded-[10px] border-[1px] border-gray-200">
                <h2 className="w-[95%] md:mx-auto ml-[16px] leading-9 text-[1.9rem] font-semibold text-gray-500 mt-[30px]">Choose Spirit Airlines for cost-effective and trouble-free travel options. </h2>
                <p className="text-[0.85rem] leading-7  md:leading-5 md:mx-auto ml-[16px] mt-[14px] w-[95%] mb-[20px]">Explore an array of possibilities across the US, Latin America, and the Caribbean with fantastic offers from Spirit Airlines. Effortlessly organize and plan your trips with our user-friendly solutions. </p>
                <span className=" w-[95%] md:mx-auto ml-[16px] mb-[30px]  block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className="md:w-[50%]   ">
                <img loading="lazy" className="h-full w-full object-cover object-center  rounded-[10px]" src="https://images.unsplash.com/photo-1739730937869-cccf622d571a?q=80&w=1040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Spirit Airlines plane" />
            </div>
        </div>
        <div className="flex flex-col md:flex-row shrink mx-[30px] md:mx-[40px] items-center mt-[120px] gap-[20px]  text-gray-500 mb-[90px]">
            <div className=" md:w-[50%] shadow-lg rounded-[10px] border-[1px] border-gray-200">
                <h2 className="w-[95%] md:mx-auto ml-[16px] leading-9 text-[1.9rem] font-semibold text-gray-500 mt-[30px]">Let Rivaltrip.com handle your reservations for a worry-free vacation.</h2>
                <p className="text-[0.85rem]  md:mx-auto ml-[16px] pleading-7 md:pleading-5 mt-[14px] w-[95%] mb-[20px]">Enhance your Spirit Airlines experience with the help of Rivaltrip.com. Our dedicated team is available to assist with any questions or changes to your trip. Trust us to streamline the booking process and guarantee a seamless journey from beginning to end.</p>
                <span className=" w-[95%] md:mx-auto ml-[16px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out mb-[30px] ">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className=" md:w-[50%]  ">
                <img loading="lazy" className="h-full w-full object-cover object-center  rounded-[10px]" src="https://img.freepik.com/free-photo/flat-lay-woman-posing-travel-essentials_23-2148434359.jpg?t=st=1744005044~exp=1744008644~hmac=64d07dc44422a7f68cda9a64f39b78428cbf3572976a10b3534bc728b8712408&w=996" alt="handle your reservations for worry free vacation" />
            </div>
        </div>
    </section>
}

export default SpiritAirlines;