const AboutUs = () => {
    return (
        <section className="md:mt-[160px] mx-auto max-w-[1450px]">
            <div className="bg-[url('https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[200px] flex items-center justify-center">
                <h3 className="text-[1.67em] text-gray-700 font-semibold">About Us</h3>
            </div>
            <div className="flex flex-col md:flex-row shrink mx-[30px] md:mx-[40px] items-center mt-[120px] gap-[20px] text-gray-500">
                <div className="md:w-[50%] rounded-[10px] shadow-lg border-[1px] border-gray-200">
                    <h2 className="w-[95%] md:mx-auto ml-[16px] text-[1.9rem] font-semibold text-gray-500 mt-[30px]">
                        Welcome to www.rivaltrip.com
                    </h2>
                    <p className="text-[0.85rem] md:mx-auto ml-[16px] leading-7 md:leading-5 mt-[14px] w-[95%] mb-[20px]">
                        Welcome to www.rivaltrip.com, your go-to platform for hassle-free flight bookings and hotel reservations. Operated by Telspace LLC, rivaltrip.com is a trusted travel agency based in the USA, proudly holding:
                    </p>
                    <ul className="text-[0.85rem] md:mx-[40px] ml-[26px] leading-7 md:leading-5 w-[95%] mb-[14px] list-disc ">
                        <li>Business Registration Number: 203656486</li>
                        <li>Dun & Bradstreet D-U-N-S Number: 07-163-7197</li>
                        <li>ISO/IEC 27001 Certification: US/TELC/24-0410007</li>
                        <li>ISO/IEC 27701 Certification: US/TELC/24-00410006</li>
                        <li>Travel Agency License (State of Delaware): 2024711425</li>
                    </ul>
                    <p className="text-[0.85rem] md:mx-auto ml-[16px] leading-7 md:leading-5 w-[95%] mb-[14px]">
                        We’re here to serve a wide range of travelers—whether you’re a jet-setting professional, a spontaneous explorer, or someone planning the perfect family vacation. At rivaltrip.com, we take the complexity out of travel, making it easy for you to plan everything from a quick escape to an elaborate international journey.
                    </p>
                    <p className="text-[0.85rem] md:mx-auto ml-[16px] leading-7 md:leading-5 w-[95%] mb-[14px]">
                        Our mission is simple: to turn travel into a joy, not a chore. With our intuitive platform, you can effortlessly search, compare, and secure flights and accommodations from a carefully curated selection—all at wallet-friendly prices. Thanks to our strong partnerships with reliable travel providers worldwide, we bring you exclusive deals and a smooth booking experience every time.
                    </p>
                    <p className="text-[0.85rem] md:mx-auto ml-[16px] leading-7 md:leading-5 w-[95%] mb-[14px]">
                        At rivaltrip.com, we’re dedicated to offering convenience, value, and dependability. Whether you’re booking on a whim or scheduling a trip well in advance, our team is here to ensure you get personalized options that suit your needs perfectly. Explore our wide array of flight and hotel choices, each selected for quality and affordability. We’re passionate about delivering a service that’s tailored to you—whether you’re traveling for work, play, or a bit of both. Your satisfaction isn’t just our priority; it’s the heart of everything we do.
                    </p>
                    <span className="w-[95%] md:mx-auto ml-[16px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out mb-[30px]">
                        Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i>
                    </span>
                </div>
                <div className="md:w-[50%]">
                    <img
                        className="h-full w-full object-cover object-center rounded-[10px]"
                        src="https://i.ibb.co/3yk87GRJ/airline-check-attendant-showing-direction-commuter-check-counter-107420-95790.jpg"
                        alt="Flight Booking"
                    />
                </div>
            </div>
            <div className="flex flex-col-reverse mx-[30px] mb:mx-[40px] shrink items-center md:flex-row-reverse mt-[120px] gap-[20px] text-gray-500">
                <div className="md:w-[50%] shadow-lg rounded-[10px] border-[1px] border-gray-200">
                    <h2 className="w-[95%] md:mx-auto ml-[16px] text-[1.9rem] font-semibold text-gray-500 mt-[30px]">
                        Why Choose www.rivaltrip.com?
                    </h2>
                    <ul className="text-[0.85rem] md:mx-[40px]  leading-7 md:leading-6 mt-[14px] w-[95%] mb-[20px] list-disc ml-[26px]">
                        <li>One-stop booking for flights and hotels made simple.</li>
                        <li>Great prices through our extensive global travel network.</li>
                        <li>Customized suggestions to match your travel style.</li>
                        <li>Outstanding support to guide you every step of the way.</li>
                    </ul>
                    <span className="w-[95%] md:mx-auto ml-[16px] mb-[30px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out">
                        Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i>
                    </span>
                </div>
                <div className="md:w-[50%]">
                    <img
                        className="h-full w-full object-cover object-center rounded-[10px]"
                        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Travel Experience"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row shrink mx-[30px] md:mx-[40px] items-center mt-[120px] gap-[20px] text-gray-500 mb-[90px]">
                <div className="md:w-[50%] shadow-lg rounded-[10px] border-[1px] border-gray-200">
                    <h2 className="w-[95%] md:mx-auto ml-[16px] text-[1.9rem] font-semibold text-gray-500 mt-[30px]">
                        Company Overview
                    </h2>
                    <ul className="text-[0.85rem] md:mx-[40px] leading-7 md:leading-6 mt-[14px] w-[95%] mb-[20px] list-disc ml-[26px]">
                        <li><strong>Company Name:</strong> Telspace LLC</li>
                        <li><strong>Registered Address:</strong> 501 Silverside Road, Suite 105, Wilmington, Delaware 19809, USA</li>
                        <li><strong>Company Registration Number:</strong> 203656486</li>
                        <li><strong>Travel Agency Registration Number:</strong> 2024711425</li>
                        <li><strong>D-U-N-S Number:</strong> 07-163-7197</li>
                        <li><strong>Website:</strong> <a href="http://www.rivaltrip.com" className="text-blue-500 underline">www.rivaltrip.com</a></li>
                        <li><strong>Email:</strong> <a href="mailto:support@telspace.us" className="text-blue-500 underline">support@telspace.us</a></li>
                    </ul>
                    <p className="text-[0.85rem] md:mx-auto ml-[16px] leading-7 md:leading-5 w-[95%] mb-[14px]">
                        Start your next journey with rivaltrip.com—where easy travel creates lifelong memories!
                    </p>
                    <span className="w-[95%] md:mx-auto ml-[16px] block text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out mb-[30px]">
                        Book Now <i className="fa-solid fa-angles-right text-[0.8rem]"></i>
                    </span>
                </div>
                <div className="md:w-[50%]">
                    <img
                        className="h-full w-full object-cover object-center rounded-[10px]"
                        src="https://i.ibb.co/pr4Q4rM9/modern-equipped-computer-lab-23-2149241214.jpg"
                        alt="Company Overview"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;