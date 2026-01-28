import { Link } from "react-router-dom";
// import { bestDealsCountries } from "../../utils/data";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const BestDeals = () => {

    const [bestDealsCountries, setBestDealsCountries] = useState([])

    const getBestDealsCountries = async(limit) => {
        try{
            const res = await axios.get(`${BASE_URL}/best-deals?limit=${limit}`)
            // console.log("API Response: "+ res.data.bestDealsCountries)
             setBestDealsCountries(res.data.bestDealsCountries)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        if(bestDealsCountries.length === 0){
            getBestDealsCountries(3)
        }
    }, [])
    
    return  <section className="max-w-[1400px] mx-auto">
        <div className="md:flex justify-between  my-[30px] items-center  mt-[50px]">
            <h2 className="md:text-[2rem] text-[1.6rem] font-bold md:ml-[120px] pl-[36px] md:pl-[0px] ">BEST DEALS </h2>
            <Link to = '/best-deals'><span className="md:block hidden md:mr-[90px] lg:mr-[240px] xl:mr-[130px]  text-[1.2rem] cursor-pointer font-bold text-blue-400 hover:text-blue-500 hover:transition-all hover:duration-300 hover:ease-in-out">View All <i class="fa-solid fa-chevron-right"></i></span></Link>
        </div>
        <div className="grid md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 md:mx-[80px] lg:mx-[90px] xl:mx-[120px] gap-[30px]">
            {bestDealsCountries.map((data) => {
               const {countryName, city, discount, price, img, _id, slug} = data
               return ( <div  key={_id} className="pb-[18px] rounded-lg group overflow-hidden hover:shadow-md  bg-white w-[340px] md:w-[368px] border-[1px] border-gray-200 mb-[40px] mx-auto md:mx-[0px]">
                <div className="h-[242px] md:w-[368px] w-[340px]  overflow-hidden">
                   <img loading="lazy" className=" object-cover object-center cursor-pointer h-full w-full transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1]" src = {img} alt={city} />
                </div>
                <Link to={`/destination-info/${slug}`}>
                    <p className=" mt-[14px] mb-[14px] ml-[30px] items-center font-semibold cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out">{city}, {countryName}</p>
                </Link>
                <p className="ml-[30px] text-[0.8rem] text-gray-500  ">Round-trip, per person</p>
                <div className="flex items-center justify-between mr-[30px]">
                   <p className="ml-[30px] text-[0.95rem] text-gray-500 mt-[4px] ">Save {discount}%*</p>
                   <Link to = '/flight-booking'>
                    <button className="ml-[30px] px-[18px] bg-gray-200 py-[4px] rounded-[6px] text-[0.95rem] text-black font-semibold mt-[4px] hover:text-white hover:bg-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out cursor-pointer">FROM ${price}</button>
                   </Link>
            </div>
        </div>
               )
            })}
        </div>
        </section>

}


export default BestDeals;