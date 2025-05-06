import { Form, Link } from "react-router-dom";
import { popularCountries } from "../../utils/data";
import Search from "./Search";


const PopularDestination = () => {
    return <> <section className="max-w-[1450px] mx-auto">
    <div className="flex flex-col items-center justify-center md:h-[720px] h-[680px]  mt-[0px] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1732951360671-ed85cf569e8b?fm=jpg&q=60&w=2100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">  
        {/* <img className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1732951360671-ed85cf569e8b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        <h1 className="text-white font-bold md:text-[2.5rem] text-center text-[1.8rem] mb-[10px]" style={{ textShadow: '0 0 15px #000' }}>Explore the World With RivalTrip</h1>
       <Search/> 
    </div>
    <div className="flex justify-between  my-[30px] items-center mt-[40px] " >
     <h2 className="md:text-[2rem] text-[1.6rem] font-bold md:ml-[106px] md:mx-[20px] mx-auto md:pl-[0px] ">POPULAR DESTINATIONS </h2>
     <Link to = '/destination'>
     <span className="md:block  hidden md:mr-[70px] lg:mr-[130px] text-[1.2rem] cursor-pointer font-bold text-blue-400 hover:text-blue-500 hover:transition-all hover:duration-300 hover:ease-in-out">View All <i className="fa-solid fa-chevron-right"></i></span>
     </Link>
    </div>
    <section className="grid sm:grid-cols-2  justify-content md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:mx-[80px] lg:mx-[100px] ">
        {
            popularCountries.map((property) => {
                const {countryName, city, img, id} = property
                return ( <div key={id} className=" rounded-lg bg-white md:w-[272px] w-[330px]  mx-auto md:mx-[0px] md:border-[1px] md:border-gray-200 mb-[40px] group overflow-hidden hover:shadow-md">
                                <div className="md:h-[380px] md:w-[272px] w-[330px] h-[480px] mx-auto md:mx-[0px]  overflow-hidden ">
                                    <img className="object-cover  object-center cursor-pointer h-full w-full transition-transform duration-300 ease-in-out active:scale-[1.2]  md:group-hover:scale-[1.1]" src= {img} alt={city} />
                                </div>
                                <div className="border-[1px] border-gray-200  pb-[20px] ">
                                    <Link to={`/destination-info/${id.toLowerCase()}`}>
                                        <p className=" mt-[14px] mb-[14px] ml-[30px] items-center font-semibold cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out">
                                        <i className="fa-solid fa-location-dot mr-[5px]"></i>{city}, {countryName}         
                                        </p>
                                    </Link>
                                    <Link to  = '/flight-booking' >
                                        <span className=" ml-[30px] text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out">Book Now <i className="fa-solid fa-angles-right text-[0.8rem"></i></span>
                                    </Link>
                            </div>
                        </div>
                )
            })
        }
        
    </section> 
    </section>
    </>  
}

export default PopularDestination;