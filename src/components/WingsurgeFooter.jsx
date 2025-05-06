import { Link} from "react-router-dom";
import { usefulLinks } from "../utils/data";
import { airlines } from "../utils/data";
import { quickLinks } from "../utils/data";
import logo from "../images/wingsurge_Final_Logo.png";

const WingsurgeFooter = () => {
   return <section className="max-w-[1450px] mx-auto">
             <div className="flex md:flex-row flex-col bg-slate-900 md:pb-[70px]  ">
               <div className="md:w-[20%] md:ml-[80px] ml-[20px] lg:ml-[120px] mt-[60px] md:mt-[100px]">
                <Link to="/">
                   <div className="flex flex-col w-[120px] md:w-[160px] mx-auto   ">
                                       <img src= {logo} className=" w-full object-cover object-center" alt="" />
                                       <p className="text-[1.4rem] text-center text-white font-semibold mb-[6px]">RIVALTRIP</p>
                                   </div>       
                </Link>
                   <p className="text-white w text-[0.9rem] ">www.rivaltrip.com, operated by Telspace LLC, is a premier travel agency providing seamless flight and hotel bookings, exceptional service, competitive prices, and a hassle-free travel experience worldwide.</p>
               </div>
                <div className="text-white lg:w-[20%] md:w-[25%] md:block mt-[34px] md:ml-[70px] md:mt-[120px] ml-[20px]">
                   <h4 className="text-[1.5rem] font-semibold mb-[12px]">QUICKS LINKS <hr className="text-amber-300 w-[30%] border-[1px] ml-[2px]" /></h4>
                   <ul  className="list-disc pl-5 text-[0.95rem] flex flex-col">
                    {
                        quickLinks.map((heading , index) => {
                            const updateURL = heading.split(" ").join("-").toLowerCase()
                            return <Link className="relative  w-fit  group" key = { heading + index} to = {`/${heading == 'Home'?'': updateURL}`}><li  className="mb-[6px] hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out cursor-pointer active:text-red-600">{ heading }
                            <span className="absolute left-0 bottom-0 h-[2px] bg-blue-400 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                            </li>
                            </Link>
                        })
                    }
                    </ul> 
                </div>              
                <div className="text-white lg:w-[20%] md:w-[25%] md:block mt-[30px] md:ml-[20px] md:mt-[120px] ml-[20px]">
                       <h4 className="text-[1.5rem] font-semibold mb-[12px]">USEFUL LINKS <hr className="text-amber-300 w-[30%] border-[1px] ml-[2px]" /></h4>
                        <ul  className="list-disc pl-5 text-[0.95rem] flex flex-col ">
                         {
                        usefulLinks.map((heading , index) => {
                            const updateURL = heading.split(" ").join("-").toLowerCase()
                            return <Link className="relative  w-fit  group"  key = { heading + index} to = {`/${updateURL}`}><li className="mb-[6px] hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out cursor-pointer active:text-red-600">{heading}
                            <span className="absolute left-0 bottom-0 h-[2px] bg-blue-400 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                            </li>
                            </Link>
                            })
                         }
                        </ul> 
                    </div>             
                    <div className="text-white lg:w-[20%] md:w-[25%] md:block mt-[30px] md:ml-[20px] md:mt-[120px] ml-[20px]">
                        <h4 className="text-[1.5rem] font-semibold mb-[12px]">AIRLINES<hr className="text-amber-300 w-[30%] border-[1px] ml-[2px]" /></h4>
                        <ul  className="list-disc pl-5 text-[0.95rem] flex flex-col">
                            {
                                airlines.map((heading , index) => {
                                    const updateURL = heading.split(" ").join("-").toLowerCase()
                                 return <Link className="relative  w-fit  group"  key = { heading + index} to = {`/${updateURL}`}> <li   className="mb-[6px] hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out cursor-pointer active:text-red-600">{heading}
                                 <span className="absolute left-0 bottom-0 h-[2px] bg-blue-400 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                 </li>
                                 </Link>
                                 })
                             }
                        </ul> 
                    </div>                                 
                    <div className="text-white lg:w-[20%] md:w-[25%] ml-[20px] lg:ml-[0px] mt-[30px] pb-[20px] md:mt-[120px] lg:mr-[100px]">
                        <h4 className="text-[1.5rem] font-semibold mb-[12px]">CONTACT INFO<hr className="text-amber-300 w-[30%] border-[1px] ml-[2px]" /></h4>
                        <ul>
                            <li className="mb-[12px]"><i className="fa-solid fa-location-dot mr-[6px]"></i> Telspace LLC
                            501 Silverside RD, Ste 105, Wilmington, Delaware-19809 USA</li>
                            <li className="mb-[12px]"><i className="fa-solid fa-mobile-screen mr-[6px]"></i> <a href="tel:+18048811189" className="hover:text-red-600 active:text-red-600">
                            +1-804-881-1189 </a></li>
                            <li className="mb-[12px]"><i className="fa-solid fa-envelope mr-[6px]"></i>  <a href="mailto:support@telspace.us" className="hover:text-red-600 active:text-red-600">support@telspace.us</a></li>
                            <li className="mb-[12px]"><i className="fa-solid fa-envelope mr-[6px]"></i> Reg. No:- 203656486</li>
                            <li className="mb-[12px]"><i className="fa-solid fa-envelope mr-[6px]"></i> Travel Agency License No:- 2024711425</li>
                        </ul>
                    </div>
                    </div>
                    <div className="text-white bg-black md:h-[50px]  flex md:flex-row flex-col items-center justify-between">
                        <p className="text-[0.9rem] md:ml-[120px] text-center py-[18px]">Copyright© 2025. Rivaltrip All Rights Reserved. Designed by </p>
                        <div className="md:mr-[140px] flex  items-center pb-[16px]">
                            <span className="text-white text-[0.9rem] font-semibold mr-[14px]">Follow Us:</span>
                            <span><i className="fa-brands fa-square-facebook text-blue-500 border-[1px] rounded-[6px] border-blue-4Name00 text-[2rem] bg-white hover:text-white hover:bg-blue-400 cursor-pointer  ml-[4px]"></i></span>
                            <span><i className="fa-brands fa-square-x-twitter text-blue-500 border-[1px] rounded-[6px] border-blue-400 text-[2rem] bg-white hover:text-white hover:bg-blue-400 cursor-pointer ml-[4px]"></i></span>
                            <span><i className="fa-brands fa-square-instagram text-blue-500 border-[1px] rounded-[6px] border-blue-400 text-[2rem] bg-white hover:text-white hover:bg-blue-400 cursor-pointer ml-[4px]"></i></span>
                            <span><i className="fa-brands fa-youtube text-blue-500 border-[1px] rounded-[6px] border-blue-400 text-[2rem] bg-white hover:text-white hover:bg-blue-400 cursor-pointer ml-[4px]"></i></span>
                        </div>
            </div>
        </section> 
}


export default WingsurgeFooter;