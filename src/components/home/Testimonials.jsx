

const Testimonials = () => {
    return <section className=" pb-[60px] mt-[34px] max-w-[1400px] mx-auto">
        <h3 className="md:text-[2rem] text-[1.6rem] font-bold md:ml-[120px] mx-[30px] pl-[14x] md:pl-[0px]">Testimonials</h3>
        <div className="lg:flex lg:flex-row flex-col-reverse md:ml-[100px] gap-[50px]"> 
            <div className=" flex flex-col-reverse  md:flex-row gap-[40px]" >
                <div className=" md:w-[550px] h-[250px]  w-[340px]  rounded-b-[20px] border-b-[4px] border-solid border-blue-500 md:mt-[60px] p-[16px] mx-auto md:mx-[0px]">
                 <h5 className="md:text-[1.3rem] font-semibold my-[20px] md:ml-[26px] ">Michael Anderson</h5>
                 <p className="md:text-[1rem] text-gray-600 md:ml-[26px] md:my-[40px]">Booking through Wingsurge.com was effortless! Great prices, instant confirmation, and excellent customer service. My trip was completely stress-free. I’ll definitely use their services again!</p>
                </div>
                <div  className="group overflow-hidden rounded-[6px] lg:w-[460px] xl:w-[600px] mx-auto md:mx-[20px] md:h-[340px] lg:h-[370px] w-[320px] mb-[50px] mt-[40px] h-[280px]">
               <img className="h-full w-full  cursor-pointer transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1] object-cover object-center" src="https://plus.unsplash.com/premium_photo-1661964094783-2505832833a8?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
               </div>
            </div>
        </div>
    </section>
}



export default Testimonials;