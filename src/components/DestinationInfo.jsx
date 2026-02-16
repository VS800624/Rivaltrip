import React, { lazy, Suspense, useEffect, useState } from "react";
import Search from "./home/Search";
import { Link, NavLink, useParams } from "react-router-dom";
import {
  bestDealsCountriesPage,
  businessClassCountriesPage,
  popularCountries,
} from "../utils/data";
const Timer = lazy(() => import("./Timer"));
import Call from "./Call";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const DestinationInfo = () => {
  const countries = [
    { label: "Paris", path: "/destination-info/paris" },
    { label: "Rome", path: "/destination-info/rome" },
    { label: "Seoul", path: "/destination-info/seoul" },
    { label: "Madrid", path: "/destination-info/madrid" },
    { label: "Kyoto", path: "/destination-info/kyoto" },
    { label: "Barcelona", path: "/destination-info/barcelona" },
    { label: "Bali", path: "/destination-info/bali" },
    { label: "Mexico City", path: "/destination-info/mexico-city" },
    { label: "Lisban", path: "/destination-info/lisbon" },
    { label: "Cuba", path: "/destination-info/cuba" },
    { label: "Athens", path: "/destination-info/athens" },
    { label: "Delhi", path: "/destination-info/delhi" },
    { label: "Tokyo", path: "/destination-info/tokyo" },
    { label: "London", path: "/destination-info/london" },
    { label: "Bangkok", path: "/destination-info/bangkok" },
  ];

  const { slug } = useParams();
  const [destination, setDestination] = useState(null);

  console.log(slug);

  const getDestination = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/destination/${slug}`);
      console.log("FULL API RESPONSE:", res);
      console.log("RESPONSE DATA:", res.data);
      setDestination(res.data.destination);
    } catch (err) {
      console.error(err);
      setDestination(null);
    }
  };

  console.log(destination);

  useEffect(() => {
    if (slug) {
      getDestination();
    }
  }, [slug]);

  // useEffect(() => {
  //   // console.log('ID from URL:', id);
  //   // const cities = [
  //   //   ...popularCountries,
  //   //   ...bestDealsCountriesPage,
  //   //   ...businessClassCountriesPage,
  //   // ];
  //    if (!destinations.length && !bestDeals.length && !businessClass.length) {
  //   return;
  //    }
  //   const cities = [
  //     ...destinations,
  //     ...bestDeals,
  //     ...businessClass
  //   ]
  //   console.log(cities)
  //   const selectedDestination = cities
  // .filter(country => typeof country.slug === "string")
  // .find(
  //   country => country.slug?.toLowerCase() === slug?.toLowerCase()
  // );
  //   // console.log('Selected Destination:', selectedDestination);
  //   setDestination(selectedDestination || null)
  // }, [slug, destinations, bestDeals, businessClass]);

  // Check if destination is null or has an error
  if (!destination) return <Loading />;

  const { city: cityName, headerImg, sections } = destination;

  const intro = sections.find((s) => s.type === "introduction");
  const history = sections.find((s) => s.type === "history_and_culture");
  const iconicSights =
    sections.find((s) => s.type === "iconic_sights")?.items || [];
  const uniqueExperiences =
    sections.find((s) => s.type === "unique_experiences")?.items || [];
  const foodItems = sections.find((s) => s.type === "food")?.items || [];
  const travelTips =
    sections.find((s) => s.type === "travel_tips")?.items || [];

  const dealEndDate = new Date();
  dealEndDate.setDate(dealEndDate.getDate() + 3);
  dealEndDate.setHours(23, 59, 59, 999);

  return (
    <>
      <div className="min-h-screen bg-gray-100 font-sans">
        {/* Header Section */}
        <header
          className="relative bg-cover bg-center h-[880px] md:h-[850px] "
          style={{ backgroundImage: `url(${headerImg})` }}
        >
          <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
            <div
              className="text-center text-white"
              style={{ textShadow: "0 0 15px #000" }}
            >
              <h3 className="md:text-[2rem] text-[1.8rem] text-slate-100 font-semibold shadow-2xl">
                It's Time to Plan Your
              </h3>
              <h2 className="md:text-[3.2rem] text-[2.6rem] font-bold mb-[28px]">
                {" "}
                {cityName} Trip
              </h2>
              <Search />
              <Suspense
                fallback={
                  <div className="text-gray-600 mb-4">Loading Timer...</div>
                }
              >
                <Timer dealEndDate={dealEndDate.toISOString()} />
              </Suspense>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto py-8 px-4">
          {/* Introduction Section */}
          <section className="flex flex-col md:flex-row items-center   gap-6 mb-12 mt-[10px]">
            <div className="md:w-1/2">
              <h2 className="md:text-3xl text-[1.6rem] font-bold text-gray-800">
                {intro?.title}
              </h2>
              <p
                className="mt-4 text-gray-600 "
                dangerouslySetInnerHTML={{ __html: intro?.description }}
              ></p>
              <Link to="/flight-booking">
                <button className="md:text-[1rem] text-[0.9rem] mt-[40px] cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 text-white text-base px-6 py-2 rounded-full hover:from-yellow-500 hover:to-orange-400 active:from-yellow-500 active:to-orange-400 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  Book Now
                </button>
              </Link>
            </div>
            <div className="md:w-1/2  rounded-lg group overflow-hidden">
              <img
                loading="lazy"
                src={intro?.image}
                alt={intro?.title}
                className=" shadow-md overflow-hidden transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1]"
              />
            </div>
          </section>
          <section className="flex flex-col md:flex-row-reverse items-center gap-6 mb-12">
            <div className="md:w-1/2">
              <h2 className="md:text-3xl text-[1.6rem] font-bold text-gray-800">
                {history?.title}
              </h2>
              <p
                className="mt-4 text-gray-600"
                dangerouslySetInnerHTML={{ __html: history?.description }}
              ></p>
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
                src={history?.image}
                alt={history?.title}
                className=" shadow-md  transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1]"
              />
            </div>
          </section>
          <div className="px-6 md:px-16 rounded-xl lg:px-24 py-12 space-y-16 bg-gray-50 text-gray-800">
            <section className=" ">
              <h2 className="md:text-3xl text-[1.6rem] font-bold mb-6 text-center">
                📸 Iconic Sights & Landmarks
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {iconicSights.map((sight, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-md group bg-white"
                  >
                    {/* Image */}
                    <img
                      loading="lazy"
                      src={sight.image}
                      alt={sight.name}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">
                        {sight.name}
                      </h3>

                      <p className="text-gray-600 text-sm">
                        {sight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Unique Experiences */}
            <section>
              <h2 className="md:text-3xl text-[1.6rem] font-bold mb-6">
                🧭 Unique Experiences
              </h2>
              <ul className="space-y-3 list-disc list-inside">
                {uniqueExperiences.map((exp, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: exp.name }}
                  ></li>
                ))}
              </ul>
            </section>

            {/* Food Section */}
            <section className="">
              <h2 className="md:text-3xl text-[1.6rem] font-bold mb-6 text-center">
                🍽️ Food You’ll Fall in Love With
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {foodItems.map((food, index) => (
                  <div key={index} className="rounded-lg group overflow-hidden bg-white shadow-md">
                    {/* Image */}
                    <img
                      loading="lazy"
                      src={food.image}
                      alt={food.name}
                      className="w-full h-80 object-cover  transition-transform duration-300 ease-in-out active:scale-[1.2] md:group-hover:scale-[1.1]"
                    />
                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">
                        {food.name}
                      </h3>

                      <p className="text-gray-600 text-sm">
                        {food.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Travel Tips */}
            <section>
              <h2 className="md:text-3xl text-[1.6rem] font-bold mb-6">
                🧳 Travel Tips
              </h2>
              <ul className="space-y-3 list-disc list-inside">
                {travelTips.map((tip, index) => (
                  <li key={index}>
                    <strong>{tip.name}</strong> – {tip.description}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="py-16 px-6 bg-gradient-to-br mt-[24px] rounded-lg from-indigo-100 via-purple-100 to-pink-200">
            <div className="max-w-6xl mx-auto text-center">
              {/* Section Title */}
              <h2 className="md:text-3xl text-[1.6rem] font-bold text-gray-800 mb-10 flex text-center items-center justify-center">
                <span className="md:mr-2 md:inline-block hidden">🌍</span>{" "}
                Explore More Destinations
              </h2>

              {/* Grid of Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {countries.map((item, index) => (
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
      <Call />
    </>
  );
};

export default DestinationInfo;
