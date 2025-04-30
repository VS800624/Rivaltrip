import { Link } from "react-router-dom"
import { businessClassCountriesPage } from "../../utils/data"

businessClassCountriesPage

const BusinessClassPage = () => {
    return <section className=" md:mt-[160px]  max-w-[1400px] mx-auto">
        <div className="bg-[url('https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[200px] flex  items-center justify-center md:mb-[70px] mb-[30px]">   
        <h3 className="text-[1.67rem] text-gray-700 font-semibold ">Business Class Deals</h3>
        </div>
        <div className="flex justify-between  my-[30px] items-center">
            <h2 className="md:text-[2rem] text-[1.6rem] font-bold  md:ml-[110px] xl:ml-[150px] pl-[36px] md:pl-[0px] ">BUSINESS CLASS </h2>
        </div>
        <div className="grid md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 md:mx-[80px] lg:mx-[90px] xl:mx-[120px] gap-[30px]">
            {businessClassCountriesPage.map((data) => {
               const {countryName, city, discount, price, img, id} = data
               return ( <div key={id}  className="pb-[18px] rounded-lg group overflow-hidden hover:shadow-md mx-auto md:mx-[0px]  bg-white w-[340px] md:w-[368px] border-[1px] border-gray-200 mb-[40px]">
                            <div className="h-[242px] md:w-[368px] w-[340px] overflow-hidden">
                                <img loading="lazy" className=" h-full w-full transition-transform duration-300 ease-in-out active:scale-[1.2]  md:group-hover:scale-[1.1] object-cover object-center cursor-pointer" src = {img} alt={city} />
                            </div>
                            <Link to={`/DestinationInfo/${id}`}>
                                <p className=" mt-[14px] mb-[14px] ml-[30px] items-center font-semibold cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out">{city}, {countryName}</p>
                            </Link>
                            <p className="ml-[30px] text-[0.8rem] text-gray-500  ">Round-trip, per person</p>
                            <div className="flex items-center justify-between mr-[30px]">
                                <p className="ml-[30px] text-[0.95rem] text-gray-500 mt-[4px] ">Save {discount}%*</p>
                                <Link to = '/FlightBooking' >
                                    <button className="ml-[30px] px-[18px] bg-gray-200 py-[4px] rounded-[6px] text-[0.95rem] text-black font-semibold mt-[4px] hover:text-white hover:bg-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out cursor-pointer">FROM ${price}</button>
                                </Link>
                            </div>
                        </div>
               )
            })}
        </div>
        </section>

}


export default BusinessClassPage;