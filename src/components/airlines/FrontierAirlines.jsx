


const FrontierAirlines = () => {
    return <section className="md:mt-[160px] mx-auto max-w-[1450px]">
        <div className="bg-[url('https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[200px] flex  items-center justify-center ">   
        <h3 className="text-[1.67em] text-gray-700 font-semibold ">Frontier Airlines</h3>
        </div>
        <div className="flex flex-col  md:flex-row shrink mx-[30px] md:mx-[40px] items-center mt-[120px] gap-[20px]  text-gray-500 ">
            <div className="md:w-[50%]  rounded-[10px] shadow-lg border-[1px] border-gray-200 ">
                <h2 className="w-[95%] leading-9 md:mx-auto ml-[16px] text-[1.9rem] font-semibold text-gray-500 mt-[30px]">Frontier Airlines provides a diverse selection of affordable and personalized travel choices.</h2>
                <p className="text-[0.85rem]  md:mx-auto ml-[16px] leading-7 md:leading-5 mt-[14px] w-[95%] mb-[20px]">At Frontier Airlines, we excel at finding the perfect balance between affordability and excellence in all areas of our business. We are known for providing competitive rates and exceptional customer service, making us a trusted airline. Our dedication to offering affordable flights with top-notch amenities has further cemented our reputation in the aviation industry.</p>
                <span className=" w-[95%] md:mx-auto ml-[16px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out mb-[30px] ">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className=" md:w-[50%]   ">
                <img loading="lazy" className="h-full w-full  object-cover object-center  rounded-[10px]" src="https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=1006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="diverse selection of affordable choices" />
            </div>
        </div>
        <div className="flex flex-col-reverse mx-[30px] mb:mx-[40px] shrink items-center md:flex-row-reverse mt-[120px] gap-[20px]  text-gray-500">
            <div className=" md:w-[50%]  shadow-lg rounded-[10px] border-[1px] border-gray-200">
                <h2 className="w-[95%] md:mx-auto ml-[16px] text-[1.9rem] font-semibold leading-9 text-gray-500 mt-[30px]">Experience a smooth and hassle-free trip with Frontier.</h2>
                <p className="text-[0.85rem] leading-7  md:leading-5 md:mx-auto ml-[16px] mt-[14px] w-[95%] mb-[20px]">Selecting Frontier for your upcoming travel will provide you with a streamlined and hassle-free voyage. Our flights feature affordable prices for both domestic and international destinations. Moreover, we prioritize eco-friendly practices and exceptional customer service, guaranteeing a smooth and cost-efficient experience for all passengers.</p>
                <span className=" w-[95%] md:mx-auto ml-[16px] mb-[30px]  block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className="md:w-[50%]   ">
                <img loading="lazy" className="h-full w-full object-cover object-center  rounded-[10px]" src="https://images.unsplash.com/photo-1719887864562-0f7a6a9865f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Frontier Airlines plane" />
            </div>
        </div>
        <div className="flex flex-col md:flex-row shrink mx-[30px] md:mx-[40px] items-center mt-[120px] gap-[20px]  text-gray-500 mb-[90px]">
            <div className=" md:w-[50%] shadow-lg rounded-[10px] border-[1px] border-gray-200">
                <h2 className="w-[95%] md:mx-auto ml-[16px] leading-9  text-[1.9rem] font-semibold text-gray-500 mt-[30px]">Indulge in a luxurious voyage with Rivaltrip.com.</h2>
                <p className="text-[0.85rem]  md:mx-auto ml-[16px] pleading-7 md:pleading-5 mt-[14px] w-[95%] mb-[20px]">At Rivaltrip.com, our main focus is ensuring that every client has a smooth and pleasant travel experience. We understand that unexpected circumstances can arise during your travels, and that's why our dedicated team of customer service representatives is available 24/7 to assist you.</p>
                <span className=" w-[95%] md:mx-auto ml-[16px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out mb-[30px] ">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className=" md:w-[50%]  ">
                <img loading="lazy" className="h-full w-full object-cover object-center  rounded-[10px]" src="https://img.freepik.com/free-photo/happy-caucasian-pretty-long-hair-elegant-tourist-woman-dress-with-red-suitcase-outside-hotel_343596-3653.jpg?t=st=1744005449~exp=1744009049~hmac=c183d714eded2090b8e71273c22fb4edd74f61ea7c34f9a01dc6a0ca9579c942&w=996" alt="luxurious voyage" />
            </div>
        </div>
    </section>
}

export default FrontierAirlines;