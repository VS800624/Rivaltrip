import { useEffect } from "react";
import Form from "./home/Form";
import Search from "./home/Search";


const FlightBooking = () => {
    useEffect(() => {
        const script = document.createElement('script');
        const searchPanel2 =  document.getElementById("search-panel2")
        script.src = "//search.airline-reservationdesk.com/iframe.js";
        script.type = "text/javascript";
        script.charset = "utf-8";
        searchPanel2.innerHTML = ""
        searchPanel2.appendChild(script);
    
        return () => {
          // Cleanup: Remove the script when component unmounts
          searchPanel2.removeChild(script);
        };
      }, []);
    
    return  <section className="md:mb-[120px] md:mt-[160px] mx-auto max-w-[1450px]">
                <div className="bg-[url('https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[200px] flex  items-center justify-center md:mb-[70px] mb-[30px]">   
                     <h3 className="text-[1.67rem] text-gray-700 font-semibold ">Flight Booking</h3>
                </div>
                <Form/>
             <div id="search-panel2"></div>;


    </section>
}


export default FlightBooking;