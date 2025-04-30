import { Link } from "react-router-dom";
import { destinationCountriesPage, popularCountries } from "../../utils/data";

const DestinationPage = () => {
   return <section className=" md:mt-[160px] mx-auto max-w-[1400px]">
        <div className="bg-[url('https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[200px] flex  items-center justify-center md:mb-[70px] mb-[30px]">   
        <h3 className="text-[1.67em] text-gray-700 font-semibold ">Destinations</h3>
        </div>
       <div className="flex justify-between  my-[30px] items-center ">
        <h2 className="md:text-[2rem] text-[1.6rem] font-bold md:ml-[130px] xl:ml-[150px] md:mx-[30px] mx-auto md:pl-[0px] ">DESTINATIONS </h2>
       </div>
       <div className="grid sm:grid-cols-2  justify-content md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:mx-[80px] lg:mx-[100px]">
           {
               popularCountries.map((property) => {
                   const {countryName, city, img, id} = property
                   return ( 
                            <div key={id} className="rounded-lg  bg-white md:w-[272px] w-[330px]  mx-auto lg:mx-[0px] md:border-[1px] md:border-gray-200 mb-[40px] group overflow-hidden hover:shadow-md">
                                <div className="md:h-[380px] md:w-[272px] w-[330px] h-[480px] mx-auto md:mx-[0px]  overflow-hidden ">
                                    <img loading="lazy" className="object-cover  object-center cursor-pointer h-full w-full transition-transform duration-300 ease-in-out active:scale-[1.2]  md:group-hover:scale-[1.1]" src= {img} alt={city} />
                                </div>
                                <div className="border-[1px] border-gray-200  pb-[20px] ">
                                <Link to={`/DestinationInfo/${id}`}>
                                        <p className=" mt-[14px] mb-[14px] ml-[30px] items-center font-semibold cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out">
                                        <i className="fa-solid fa-location-dot mr-[5px]"></i>{city}, {countryName}         
                                    </p>
                                    </Link>
                                    <Link to = '/FlightBooking'>
                                        <span className=" ml-[30px] text-[0.8rem] text-gray-500 cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out">Book Now <i className="fa-solid fa-angles-right text-[0.8rem"></i></span>
                                    </Link>
                                </div>
                            </div>
                   )
               })
           }
       </div> 
       </section> 
}

export default DestinationPage;