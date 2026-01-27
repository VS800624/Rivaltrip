import { Link, NavLink } from "react-router-dom";
import { navHeading } from "../../utils/data";
import NavBarMobile from "./NavBarMobile";
import { useState } from "react";
import logo from "../../images/wingsurge_Final_Logo.png";

const NavBar = () => { 
    const [isMobileNavShow, setIsMobileNavBarShow] = useState(false);
    return <nav className=" md:fixed md:top-0  w-full z-1   text-white md:z-50 ">
            <div className="flex  items-center  bg-blue-500/90 max-w-[1450px] mx-auto justify-between md:h-[120px] h-[110px] w-full">
            <Link to="/">
                <div className="flex  flex-col w-[100px] h-[100px] md:w-[120px] md:h-[120px]  mx-auto  lg:ml-[80px] ">
                    <img src= {logo} className=" w-full h-full object-contain " alt="" />
                    <p className="md:text-[1.1rem] text-center font-semibold">RIVALTRIP</p>
                </div>      
            </Link>
                <ul className="cursor-pointer lg:flex hidden items-center justify-between gap-[30px]  mr-[40px] text-[1.2rem] ">
                    {navHeading.map((heading, index)=> {
                        const updateURL = heading.split(" ").join("-").toLowerCase()
                        return <NavLink className="relative  w-fit group" key={heading + index} to={`/${heading == 'Home'?'': updateURL}`}> <li  className="hover:text-red-600 ">{heading}  
                        <span className="absolute left-0 bottom-0 h-[2px] bg-red-600 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                        </li> </NavLink> 
                    })}
                </ul>
                 </div>
           <span className="lg:hidden pl-[14px] text-[1.6rem]" onClick={ () => setIsMobileNavBarShow(true)} >
           <i className="fa-solid fa-bars text-slate-800"></i>
           </span>
        <NavBarMobile isMobileNavShow = {isMobileNavShow} setIsMobileNavBarShow = {setIsMobileNavBarShow}/>
        </nav>
}

export default NavBar;