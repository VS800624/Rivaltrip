

const SouthwestAirlines = () => {
    return <section className="md:mt-[160px] mx-auto max-w-[1450px]">
        <div className="bg-[url('https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[200px] flex  items-center justify-center ">   
        <h3 className="text-[1.67em] text-gray-700 font-semibold ">Southwest Airlines</h3>
        </div>
        <div className="flex flex-col  md:flex-row shrink mx-[30px] md:mx-[40px] items-center mt-[120px] gap-[20px]  text-gray-500 ">
            <div className="md:w-[50%]  rounded-[10px] shadow-lg border-[1px] border-gray-200 ">
                <h2 className="w-[95%] md:mx-auto ml-[16px] text-[1.9rem] leading-9 font-semibold text-gray-500 mt-[30px]">Discover budget-friendly possibilities for flying with Southwest Airlines.</h2>
                <p className="text-[0.85rem]  md:mx-auto ml-[16px] leading-7 md:leading-5 mt-[14px] w-[95%] mb-[20px]">Known for its budget-friendly fares and reliable service, Southwest Airlines remains a popular pick among travelers. The company's dedication to ensuring customer satisfaction is apparent not only through its competitive pricing, but also its transparent policies that have no hidden charges.</p>
                <span className=" w-[95%] md:mx-auto ml-[16px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out mb-[30px] ">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className=" md:w-[50%]   ">
                <img loading="lazy" className="h-full w-full  object-cover object-center  rounded-[10px]" src="https://img.freepik.com/premium-photo/cropped-hand-putting-coin-piggy-bank-by-personal-accessories-table_1048944-27384993.jpg?w=996" alt="budget friendly possibilities" />
            </div>
        </div>
        <div className="flex flex-col-reverse mx-[30px] mb:mx-[40px] shrink items-center md:flex-row-reverse mt-[120px] gap-[20px]  text-gray-500">
            <div className=" md:w-[50%]  shadow-lg rounded-[10px] border-[1px] border-gray-200">
                <h2 className="w-[95%] md:mx-auto ml-[16px] leading-9 text-[1.9rem] font-semibold text-gray-500 mt-[30px]">At Southwest Airlines, we offer a blend of affordable prices and friendly, hospitable employees.</h2>
                <p className="text-[0.85rem] leading-7  md:leading-5 md:mx-auto ml-[16px] mt-[14px] w-[95%] mb-[20px]">Thank you for choosing Rivaltrip.com as your go-to source for Southwest Airlines updates. Our devoted customer service team is always ready to assist with any flight-related requests, from making reservations to modifying or cancelling them. Count on our reliable staff for prompt and helpful support whenever you need it. </p>
                <span className=" w-[95%] md:mx-auto ml-[16px] mb-[30px]  block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className="md:w-[50%]   ">
                <img loading="lazy" className="h-full w-full object-cover object-center  rounded-[10px]" src="https://images.unsplash.com/photo-1564749290357-fcedf5a94a61?fm=jpg&q=60&w=1100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Southwest Airlines plane" />
            </div>
        </div>
        <div className="flex flex-col md:flex-row shrink mx-[30px] md:mx-[40px] items-center mt-[120px] gap-[20px]  text-gray-500 mb-[90px]">
            <div className=" md:w-[50%] shadow-lg rounded-[10px] border-[1px] border-gray-200">
                <h2 className="w-[95%] md:mx-auto ml-[16px] leading-9 text-[1.9rem] font-semibold text-gray-500 mt-[30px]">Here at Rivaltrip.com, our goal is to ensure your vacation is completely hassle-free.</h2>
                <p className="text-[0.85rem]  md:mx-auto ml-[16px] pleading-7 md:pleading-5 mt-[14px] w-[95%] mb-[20px]">Feel assured that Rivaltrip.com has joined forces with Southwest Airlines to guarantee a smooth and hassle-free trip. Count on our capable team to take care of any changes or cancellations to your reservations, granting you the opportunity to relax and fully savor your amazing journey.</p>
                <span className=" w-[95%] md:mx-auto ml-[16px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out mb-[30px] ">Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i></span>
            </div>
            <div className=" md:w-[50%]  ">
                <img loading="lazy" className="h-full w-full object-cover object-center  rounded-[10px]" src="https://img.freepik.com/free-photo/rear-view-back-young-asian-hiking-man-standing-riseup-hands-with-happy-peak-rocky-mountain-copy-space_1150-57186.jpg?t=st=1744006195~exp=1744009795~hmac=aa36282c7620d07d1f69a36c82369ca986675b6391f157f3c29546773fe81e63&w=990" alt="your vacation is completely hassle-free" />
            </div>
        </div>
    </section>
}

export default SouthwestAirlines;