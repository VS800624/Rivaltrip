

const ContactUs = () => {
    return <section className="md:mt-[160px] mx-auto max-w-[1400px]">
                <div className="bg-[url('https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[200px] flex  items-center justify-center md:mb-[70px] mb-[30px]">   
                    <h3 className="text-[1.67rem] text-gray-700 font-semibold ">Contact Us</h3>
                </div>
                <div className="grid md:grid-cols-[28%_28%_28%] items-center justify-center gap-[30px] mb-[100px]">
                    <div className="flex  border-[1px] border-gray-200 px-[20px] py-[30px] ">  
                    <div className="flex items-center justify-center rounded-full bg-blue-400 h-[70px] w-[70px]">
                        <i className="fa-solid fa-location-dot text-[2rem] text-white"></i>
                    </div>
                        <div  className= "w-[55%] ml-[20px] mr-auto">
                        <h5 className="text-blue-500 font-semibold">LOCATION</h5>
                        <p className="text-[0.85rem] text-gray-500">Telspace LLC
                        501 Silverside RD, Ste 105, Wilmington, Delaware-19809 USA</p>
                        </div>
                    </div>
                    <div className="flex  border-[1px] border-gray-200 px-[20px] py-[30px] ">  
                    <div className="flex items-center justify-center rounded-full bg-blue-400 h-[70px] w-[70px]">
                        <i className="fa-solid fa-phone-volume text-[2rem] text-white"></i>
                    </div>
                        <div  className= "w-[55%] ml-[20px] mr-auto">
                        <h5 className="text-blue-500 font-semibold">CALL US NOW</h5>
                        <p className="text-[0.85rem] text-gray-500">  <a href="tel:+18048811189" className="hover:text-red-600 active:text-red-600">
                        +1-804-881-1189 </a></p>
                        </div>
                    </div>
                    <div className="flex  border-[1px] border-gray-200 px-[20px] py-[30px] ">  
                    <div className="flex items-center justify-center rounded-full bg-blue-400 h-[70px] w-[70px]">
                        <i className="fa-solid fa-envelope text-[2rem] text-white"></i>
                    </div>
                        <div  className= "w-[55%] ml-[20px] mr-auto">
                        <h5 className="text-blue-500 font-semibold">EMAIL</h5>
                        <p className="text-[0.85rem] text-gray-500"><a href="mailto: support@telspace.us" className="hover:text-red-600 active:text-red-600">support@telspace.us</a></p>
                        </div>
                    </div>
                    
                </div>
                <div className="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27859.052026225327!2d78.93632329241238!3d29.212330980254503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a43c0c5694dd1%3A0xe193d5f15c9333a0!2sKashipur%2C%20Uttarakhand%20244713!5e0!3m2!1sen!2sin!4v1742195256749!5m2!1sen!2sin" className="md:w-[900px] md:h-[350px] h-[300px] w-[90%]  mx-auto mb-[50px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
          </section>
}

export default ContactUs;