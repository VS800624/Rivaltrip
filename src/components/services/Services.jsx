

const Services = () => {
    return <section className="md:mt-[160px]">
                 <div className="bg-[url('https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[200px] flex  items-center justify-center ">   
                    <h3 className="text-[1.67rem] text-gray-700 font-semibold ">Service</h3>
                </div>
                <h2 className="font-bold md:text-[1.8rem] text-[1.5rem] md:ml-[120px] md:mt-[70px] mt-[40px] mb-[70px]  ml-[10px]">OUR SERVICES</h2>
                <div className="md:grid flex flex-col md:grid-cols-3 grid-cols-[33%_33%_33%] lg:grid-cols-[20%_20%_20%_20%] gap-[30px] leading-6 place-content-center text-center mx-[30px] md:mb-[100px] mb-[50px]">
                    <div>
                       <h6 className="font-semibold text-[1.1rem] mb-[10px]"><i class="fa-solid fa-plane "></i> Domestic Flights</h6>
                       <p className="text-[0.85rem] text-gray-700">Discover affordable and convenient vacation options nearby that cater to your budget and desired schedule.</p>
                    </div>
                    <div>
                       <h6 className="font-semibold text-[1.1rem] mb-[10px]"><i class="fa-solid fa-plane-arrival"></i> International Flights</h6>
                       <p className="text-[0.85rem] text-gray-700">Satisfy your urge for adventure without draining your finances.</p>
                    </div>
                    <div>
                       <h6 className="font-semibold text-[1.1rem] mb-[10px]"><i class="fa-solid fa-bed"></i> Hotel Booking</h6>
                       <p className="text-[0.85rem] text-gray-700">Select from a variety of options to ensure an enjoyable and budget-friendly excursion.</p>
                    </div>
                    <div>
                       <h6 className="font-semibold text-[1.1rem] mb-[10px]"><i class="fa-solid fa-suitcase-rolling"></i> Tour Packages</h6>
                       <p className="text-[0.85rem] text-gray-700">Tailor-made packages crafted for unique and unparalleled experiences.
                       </p>
                    </div>
                    <div>
                       <h6 className="font-semibold text-[1.1rem] mb-[10px]"><i class="fa-solid fa-briefcase"></i> Business Class</h6>
                       <p className="text-[0.85rem] text-gray-700">Indulge in a lavish and serene travel experience by selecting from our sophisticated array of seats in the Business Class section.</p>
                    </div>
                    <div>
                       <h6 className="font-semibold text-[1.1rem] mb-[10px]"><i class="fa-solid fa-users"></i> Corporate Trips</h6>
                       <p className="text-[0.85rem] text-gray-700">Tailored transportation services to meet your company's unique needs.</p>
                    </div>
                    <div>
                      <h6 className="font-semibold text-[1.1rem] mb-[10px]"><i class="fa-solid fa-taxi"></i> Cab Booking</h6>
                      <p className="text-[0.85rem] text-gray-700">Effortlessly make arrangements for your travels using our hassle-free and intuitive website.</p>
                    </div>
                    <div>
                      <h6 className="font-semibold text-[1.1rem] mb-[10px]"><i class="fa-solid fa-ship"></i> Cruise Booking</h6>
                      <p className="text-[0.85rem] text-gray-700">Spoil yourself with a lavish journey by taking advantage of our extraordinary offers for cruises.</p>
                    </div>
                </div>
           </section>
}


export default Services;