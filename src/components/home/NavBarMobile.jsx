import { NavLink } from "react-router-dom";
import { navHeading } from "../../utils/data";


const NavBarMobile = ({isMobileNavShow, setIsMobileNavBarShow}) => {
    const handleOverlayClick = () => {
        setIsMobileNavBarShow(false);
    };

    const handleSidebarClick = (e) => {
        e.stopPropagation(); 
    };

    return <nav onClick={handleSidebarClick}>
            <div className={`fixed bg-black/60 inset-0 w-[45%] z-1 lg:hidden transform transition-all ease-in flex flex-col  ${isMobileNavShow ? 'translate-x-[0]': 'translate-x-[-100%] '}`} >   
               <i className="fa-solid fa-xmark text-[1.4rem] text-white mr-[20px] ml-auto mt-[20px] cursor-pointer active:text-red-600" onClick={ (e) => setIsMobileNavBarShow(false) }></i> 
               <ul className="cursor-pointer flex-col items-center justify-between gap-[30px] text-[1rem]">
                {navHeading.map((heading, index)=> {
                const updateURL = heading.split(" ").join("")
                return <NavLink key={heading + index} to={`/${heading == 'Home'?'': updateURL}`}> <li className="font-semibold ml-[20px] mr-auto active:text-red-600">{heading} <hr className="text-gray-400 mb-[8px] mt-[12px]"/> </li> </NavLink> 
                })}
        </ul>  
                    
            </div>

           </nav>
}


export default NavBarMobile;