import { Link } from "react-router-dom";
import { businessClassCountries } from "../../utils/data";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const BusinessClass = () => {

    const [businessClass, setBusinessClass] = useState([])

    const getBusinessClassCountries = async(limit) => {
        try{
            const res = await axios.get(`${BASE_URL}/business-class?limit=${limit}`)
             console.log("API Response: ", res.data.businessClassCountries)
            setBusinessClass(res.data.businessClassCountries)
        }catch(err){
            console.error(err)
        }
    } 

    useEffect(() => {
        if(businessClass.length === 0){
            getBusinessClassCountries(3)
        }
    }, [])
    
    return <section  className="max-w-[1400px] mx-auto">
    <div className="flex justify-between  my-[30px] items-center">
        <h2 className="md:text-[2rem] text-[1.6rem] font-bold md:ml-[120px] pl-[36px] md:pl-[0px]">BUSINESS CLASS </h2>
        <Link to = '/business-class'><span className="md:mr-[90px] lg:mr-[240px] xl:mr-[130px] md:block hidden text-[1.2rem] cursor-pointer font-bold text-blue-400 hover:text-blue-500 hover:transition-all hover:duration-300 hover:ease-in-out">View All <i className="fa-solid fa-chevron-right"></i></span> </Link>
    </div>
    <div className="grid md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 md:mx-[80px] lg:mx-[90px] xl:mx-[120px] gap-[30px]">
        {businessClass.map((data) => {
           const {countryName, city, discount, price, img, _id, slug} = data
           return (  <div key={_id}  className="pb-[18px] rounded-lg group overflow-hidden hover:shadow-md mx-auto md:mx-[0px] bg-white w-[340px] md:w-[368px] border-[1px] border-gray-200 mb-[40px]">
                        <div className="h-[242px] md:w-[368px] w-[340px] overflow-hidden">
                            <img className=" h-full w-full transition-transform duration-300 ease-in-out active:scale-[1.2]  md:group-hover:scale-[1.1] object-cover object-center cursor-pointer" src = {img} alt={city} />
                        </div>
                        <Link to={`/destination-info/${slug}`}>
                            <p className=" mt-[14px] mb-[14px] ml-[30px] items-center font-semibold cursor-pointer hover:text-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out">{city}, {countryName}</p>
                        </Link>
                        <p className="ml-[30px] text-[0.8rem] text-gray-500  ">Round-trip, per person</p>
                        <div className="flex items-center justify-between mr-[30px]">
                            <p className="ml-[30px] text-[0.95rem] text-gray-500 mt-[4px] ">Save {discount}%*</p>
                            <Link to = '/flight-booking' >
                                <button className="ml-[30px] px-[18px] bg-gray-200 py-[4px] rounded-[6px] text-[0.95rem] text-black font-semibold mt-[4px] hover:text-white hover:bg-blue-400 hover:transition-all hover:duration-300 hover:ease-in-out cursor-pointer">FROM ${price}</button>
                             </Link>
                        </div>
                    </div>
           )
        })}
    </div>
    </section>
}

export default BusinessClass;