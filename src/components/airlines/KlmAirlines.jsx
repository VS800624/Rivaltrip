

const KlmAirlines = () => {
    return <section className="md:mt-[160px] mx-auto max-w-[1450px]">
        <div className="bg-[url('https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[200px] flex  items-center justify-center ">   
        <h3 className="text-[1.67em] text-gray-700 font-semibold ">KLM Airlines</h3>
        </div>
        <div className="flex flex-col  md:flex-row shrink mx-[30px] md:mx-[40px] items-center mt-[120px] gap-[20px]  text-gray-500 ">
            <div className="md:w-[50%]  rounded-[10px] shadow-lg border-[1px] border-gray-200 ">
                <h2 className="w-[95%] md:mx-auto ml-[16px] leading-9 text-[1.9rem] font-semibold text-gray-500 mt-[30px]">Treat yourself to the exceptional level of customer care offered by KLM Airlines.</h2>
                <p className="text-[0.85rem]  md:mx-auto ml-[16px] leading-7 md:leading-5 mt-[14px] w-[95%] mb-[20px]">Be reassured, KLM Royal Dutch Airlines is a leading and modern travel provider that offers unmatched services for your satisfaction. With a vast global network of 160 destinations, KLM effectively caters to the needs of both business and leisure travelers. Enjoy lavish amenities, a variety of seating choices, and top-notch entertainment on every flight for an always outstanding experience.</p>
                <span className=" w-[95%] md:mx-auto ml-[16px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out mb-[30px] ">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className=" md:w-[50%]   ">
                <img loading="lazy" className="h-full w-full  object-cover object-center  rounded-[10px]" src="https://images.unsplash.com/photo-1619467416348-6a782839e95f?fm=jpg&q=60&w=1050&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="exceptional level of customer care" />
            </div>
        </div>
        <div className="flex flex-col-reverse mx-[30px] mb:mx-[40px] shrink items-center md:flex-row-reverse mt-[120px] gap-[20px]  text-gray-500">
            <div className=" md:w-[50%]  shadow-lg rounded-[10px] border-[1px] border-gray-200">
                <h2 className="w-[95%] md:mx-auto ml-[16px] leading-9 text-[1.9rem] font-semibold text-gray-500 mt-[30px]">You can rely on our dependable KLM support team, committed to fulfilling your requirements. </h2>
                <p className="text-[0.85rem] leading-7  md:leading-5 md:mx-auto ml-[16px] mt-[14px] w-[95%] mb-[20px]">Welcome to Rivaltrip.com, your one-stop shop for all things related to KLM Airlines travel. Our committed team is here to help with every aspect of your trip - be it reservations, modifications, or refunds. We strive to make your journey with KLM smooth and hassle-free.</p>
                <span className=" w-[95%] md:mx-auto ml-[16px] mb-[30px]  block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className="md:w-[50%]   ">
                <img loading="lazy" className="h-full w-full object-cover object-center  rounded-[10px]" src="https://images.unsplash.com/photo-1698765735505-8149f740340a?q=80&w=1040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="KLM Airlines plane" />
            </div>
        </div>
        <div className="flex flex-col md:flex-row shrink mx-[30px] md:mx-[40px] items-center mt-[120px] gap-[20px]  text-gray-500 mb-[90px]">
            <div className=" md:w-[50%] shadow-lg rounded-[10px] border-[1px] border-gray-200">
                <h2 className="w-[95%] md:mx-auto ml-[16px] leading-9 text-[1.9rem] font-semibold text-gray-500 mt-[30px]">Expect excellent help from KLM Airlines.</h2>
                <p className="text-[0.85rem]  md:mx-auto ml-[16px] pleading-7 md:pleading-5 mt-[14px] w-[95%] mb-[20px]">Maximize your travel adventure with Rivaltrip.com, the all-in-one answer to your trip requirements. Our team is fully equipped to support you throughout - from booking your KLM Airlines ticket to managing unforeseen circumstances. Count on our expertise and abilities for a smooth and stress-free voyage. </p>
                <span className=" w-[95%] md:mx-auto ml-[16px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out mb-[30px] ">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className=" md:w-[50%]  ">
                <img  loading="lazy" className="h-full w-full object-cover object-center  rounded-[10px]" src="https://img.freepik.com/free-photo/front-view-female-flight-attendant-studio_23-2150312725.jpg?t=st=1744005708~exp=1744009308~hmac=33340849b2b415a1ceb2d664994d5ab4743bd8854378dde09bd216f41a615435&w=996" alt="help from KLM Airlines" />
            </div>
        </div>
    </section>
}

export default KlmAirlines;