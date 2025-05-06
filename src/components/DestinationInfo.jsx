import React, { lazy, Suspense, useEffect, useState } from "react";
import Search from "./home/Search";
import { Link, NavLink, useParams } from "react-router-dom";
import  {
  bestDealsCountries,
  bestDealsCountriesPage,
  businessClassCountries,
  businessClassCountriesPage,
  popularCountries,
} from "../utils/data";
const Timer = lazy(() => import('./Timer'));
import Call from "./Call";

const DestinationInfo = () => {
  const destinations = [
    { label: 'Paris', path: '/destination-info/paris' },
    { label: 'Rome', path: '/destination-info/rome' },
    { label: 'Seoul', path: '/destination-info/seoul' },
    { label: 'Madrid', path: '/destination-info/madrid' },
    { label: 'Kyoto', path: '/destination-info/kyoto' },
    { label: 'Barcelona', path: '/destination-info/barcelona' },
    { label: 'Bali', path: '/destination-info/bali' },
    { label: 'Mexico City', path: '/destination-info/mexico-city' },
    { label: 'Lisban', path: '/destination-info/lisbon' },
    { label: 'Cuba', path: '/destination-info/cuba' },
    { label: 'Athens', path: '/destination-info/athens' },
    { label: 'Delhi', path: '/destination-info/delhi' },
    { label: 'Tokyo', path: '/destination-info/tokyo' },
    { label: 'London', path: '/destination-info/london' },
    { label: 'Bangkok', path: '/destination-info/bangkok' },
  ];
  
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    // console.log('ID from URL:', id); 
    const cities = [
      ...popularCountries,
      ...bestDealsCountries,
      ...businessClassCountries,
      ...bestDealsCountriesPage,
      ...businessClassCountriesPage,
    ];
    const selectedDestination = cities.find((dest) => dest.id.toLowerCase() === id.toLowerCase());
    // console.log('Selected Destination:', selectedDestination);
    setDestination(selectedDestination)
  }, [id]);

  // Check if destination is null or has an error
  if (!destination) return <div className="text-center mt-[120px]">Loading...</div>;
 

  const {
    city: cityName,
    headerImg,
    data: [
      { title1, description1, image1 },
      { title2, description2, image2 },
      { iconicSights },
      { uniqueExperiences },
      { foodItems },
      { travelTips },
    ],
  } = destination;

  const dealEndDate = new Date();
  dealEndDate.setDate(dealEndDate.getDate() + 3);
  dealEndDate.setHours(23, 59, 59, 999);

  return (<>
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header Section */}
      <header className="relative bg-cover bg-center h-[880px] md:h-[850px] " style={{ backgroundImage: `url(${headerImg})` }} >
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <div
            className="text-center text-white"
            style={{ textShadow: "0 0 15px #000" }}
          >
            <h3 className="md:text-[2rem] text-[1.8rem] text-slate-100 font-semibold shadow-2xl">It's Time to Plan Your</h3>
            <h2 className="md:text-[3.2rem] text-[2.6rem] font-bold mb-[28px]"> {cityName} Trip</h2>
            <Search />
            <Suspense fallback={<div className="text-gray-600 mb-4">Loading Timer...</div>}>
                <Timer  dealEndDate={dealEndDate.toISOString()}/>
            </Suspense>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        
        {/* Introduction Section */}
        <section className="flex flex-col md:flex-row items-center   gap-6 mb-12 mt-[10px]">
          <div className="md:w-1/2">
            <h2 className="md:text-3xl text-[1.6rem] font-bold text-gray-800">{title1}</h2>
            <p className="mt-4 text-gray-600 " dangerouslySetInnerHTML={{ __html: description1 }} ></p>
            <Link to="/flight-booking">
            <button
              className="md:text-[1rem] text-[0.9rem] mt-[40px] cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 text-white text-base px-6 py-2 rounded-full hover:from-yellow-500 hover:to-orange-400 active:from-yellow-500 active:to-orange-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >Book Now
            </button>
            </Link>
          </div>
          <div className="md:w-1/2  rounded-lg group overflow-hidden">
            <img 
              loading="lazy"
              src={image1}
              alt={title1}
              className=" shadow-md overflow-hidden transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1]"
            />
          </div>
        </section>
        <section className="flex flex-col md:flex-row-reverse items-center gap-6 mb-12">
          <div className="md:w-1/2">
            <h2 className="md:text-3xl text-[1.6rem] font-bold text-gray-800">{title2}</h2>
            <p className="mt-4 text-gray-600" dangerouslySetInnerHTML={{ __html: description2 }}></p>
            <div className="flex justify-end  mt-[26px]">
              <Link to="/flight-booking">
                <button className="md:text-[1rem] text-[0.9rem] mt-[20px] cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 text-white text-base px-6 py-2 rounded-full hover:from-yellow-500 hover:to-orange-400 active:from-yellow-500 active:to-orange-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2  rounded-lg group overflow-hidden">
            <img
              loading="lazy"
              src={image2}
              alt={title2}
              className=" shadow-md  transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1]"
            />
          </div>
        </section>
        <div className="px-6 md:px-16 rounded-xl lg:px-24 py-12 space-y-16 bg-gray-50 text-gray-800">
          <section className=" ">
            <h2 className="md:text-3xl text-[1.6rem] font-bold mb-6 text-center">📸 Iconic Sights & Landmarks</h2>
            <div className="grid md:grid-cols-2 gap-4   ">
              <div className="group overflow-hidden rounded-lg">
                <img
                 loading="lazy"
                  src={iconicSights[0].image1}
                  alt={iconicSights[0].iconicSight1}
                  className="w-full h-80 object-cover   transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1]"
                /> 
              </div>
              <div className="group overflow-hidden rounded-lg">
                <img
                 loading="lazy"
                  src={iconicSights[1].image2}
                  alt={iconicSights[1].iconicSight2}
                  className="w-full h-80 object-cover   transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1]"
                /> 
              </div>
              <div className="group overflow-hidden rounded-lg">
                <img
                  loading="lazy"
                  src={iconicSights[2].image3}
                  alt={iconicSights[2].iconicSight3}
                  className="w-full h-80 object-cover   transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1]"
                /> 
              </div>
              <div className="group overflow-hidden rounded-lg">
                <img
                  loading="lazy"
                  src={iconicSights[3].image4}
                  alt={iconicSights[3].iconicSight4}
                  className="w-full h-80 object-cover  transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1]"
                /> 
              </div>
            </div>
            <ul className="space-y-3 list-disc list-inside mt-[28px]">
              <li><strong>{iconicSights[0].iconicSight1}</strong> – {iconicSights[0].description1}</li>
              <li><strong>{iconicSights[1].iconicSight2}</strong> – {iconicSights[1].description2}</li>
              <li><strong>{iconicSights[2].iconicSight3}</strong> – {iconicSights[2].description3}</li>
              <li><strong>{iconicSights[3].iconicSight4}</strong> – {iconicSights[3].description4}</li>
            </ul>
          </section>
          {/* Unique Experiences */}
          <section>
            <h2 className="md:text-3xl text-[1.6rem] font-bold mb-6">🧭 Unique Experiences</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li dangerouslySetInnerHTML={{ __html: uniqueExperiences[0].activity1 }} ></li>
              <li dangerouslySetInnerHTML={{ __html: uniqueExperiences[1].activity2 }} ></li>
              <li dangerouslySetInnerHTML={{ __html: uniqueExperiences[2].activity3 }} ></li>
              <li dangerouslySetInnerHTML={{ __html: uniqueExperiences[3].activity4 }} ></li>
            </ul>
          </section>

          {/* Food Section */}
          <section className="">
            <h2 className="md:text-3xl text-[1.6rem] font-bold mb-6 text-center">
              🍽️ Food You’ll Fall in Love With
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg group overflow-hidden">
                <img
                  loading="lazy"
                  src={foodItems[0].image1}
                  alt={foodItems[0].name1}
                  className="w-full h-80 object-cover  transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1]"
                />
              </div>
              <div className="rounded-lg group overflow-hidden">
                <img
                  src={foodItems[1].image2}
                  alt={foodItems[1].name2}
                  className="w-full h-80 object-cover  transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1]"
                />
              </div>
              <div className="rounded-lg group overflow-hidden">
                <img
                  loading="lazy"
                  src={foodItems[2].image3}
                  alt={foodItems[2].name3}
                  className="w-full h-80 object-cover transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1]"
                />
              </div>
              <div className="rounded-lg group overflow-hidden">
                <img
                  loading="lazy"
                  src={foodItems[3].image4}
                  alt={foodItems[3].name4}
                  className="w-full h-80 object-cover transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1]"
                />
              </div>
            </div>
            <ul className="space-y-3 list-disc list-inside mt-[28px]">
              <li><strong>{foodItems[0].name1}</strong> – {foodItems[0].description}</li>
              <li><strong>{foodItems[1].name2}</strong> – {foodItems[1].description}</li>
              <li><strong>{foodItems[2].name3}</strong> – {foodItems[2].description}</li>
              <li><strong>{foodItems[3].name4}</strong> – {foodItems[3].description}</li>
            </ul>
          </section>

          {/* Travel Tips */}
          <section>
            <h2 className="md:text-3xl text-[1.6rem] font-bold mb-6">🧳 Travel Tips</h2>
            <ul className="space-y-3 list-disc list-inside">
            <li dangerouslySetInnerHTML={{ __html: travelTips[0].tip1 }} ></li>
            <li dangerouslySetInnerHTML={{ __html: travelTips[1].tip2 }} ></li>
            <li dangerouslySetInnerHTML={{ __html: travelTips[2].tip3 }} ></li>
            <li dangerouslySetInnerHTML={{ __html: travelTips[3].tip4 }} ></li>
            </ul>
          </section>
        </div>
        <section className="py-16 px-6 bg-gradient-to-br mt-[24px] rounded-lg from-indigo-100 via-purple-100 to-pink-200">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="md:text-3xl text-[1.6rem] font-bold text-gray-800 mb-10 flex text-center items-center justify-center">
          <span className="md:mr-2 md:inline-block hidden">🌍</span>  Explore More Destinations
        </h2>

        {/* Grid of Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {destinations.map((item, index) => (
           <NavLink
           key={index}
           to={item.path}
           className="relative group px-5 py-3 text-lg font-semibold text-white rounded-xl overflow-hidden bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
         >
           <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
           {/* Button Text */}
           <span className="relative z-10 group-hover:text-white">
             {item.label}
           </span>
         </NavLink>
          ))}
        </div>
      </div>
    </section>
      </main>
    </div>
      <Call/>
  </>
  );
};

export default DestinationInfo;
