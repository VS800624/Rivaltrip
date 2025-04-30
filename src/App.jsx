import React from "react";
import {lazy, Suspense} from "react";
import { createRoot } from "react-dom/client";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/home/Home";
// import AboutUs from "./components/about_us/AboutUs";
const AboutUs = lazy( () => import('./components/about_us/AboutUs'))
const Home = lazy( () => import("./components/home/Home"))
const Services = lazy(() => import('./components/services/Services'));
const BestDealsPage = lazy(() => import("./components/best_deals/BestDealsPage"))
const BusinessClassPage = lazy(() => import('./components/business_class/BusinessClassPage'));
const DestinationPage = lazy(() => import ("./components/destination/DestinationPage"))
const Faqs = lazy(() => import('./components/Faqs'));
const ContactUs = lazy(() => import("./components/ContactUs"))
// import ContactUs from "./components/ContactUs";
const LoginPage = lazy(() => import('./components/LoginPage'));
const SignUpPage = lazy(() => import('./components/SignUpPage'));
const CookiePolicy = lazy(() => import('./components/usefulLinks/CookiePolicy'));
const SiteMap = lazy(() => import('./components/usefulLinks/SiteMap'));
const DataProtectionPolicy = lazy(() => import('./components/usefulLinks/DataProtectionPolicy'));
const Disclaimer = lazy(() => import('./components/usefulLinks/Disclaimer'));
const RefundPolicy = lazy(() => import('./components/usefulLinks/RefundPolicy'));
const PrivacyPolicy = lazy(() => import('./components/usefulLinks/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./components/usefulLinks/TermsAndCondition'));
const AirFrance = lazy(() => import('./components/airlines/AirFrance'));
const AlaskaAirlines = lazy(() => import('./components/airlines/AlaskaAirlines'));
const AmericanAirlines = lazy(() => import('./components/airlines/AmericanAirlines'));
const DeltaAirlines = lazy(() => import('./components/airlines/DeltaAirlines'));
const FrontierAirlines = lazy(() => import('./components/airlines/FrontierAirlines'));
const JetBlueAirlines = lazy(() => import('./components/airlines/JetBlueAirlines'));
const KlmAirlines = lazy(() => import('./components/airlines/KlmAirlines'));
const SouthwestAirlines = lazy(() => import('./components/airlines/SouthWestAirlines'));
const SpiritAirlines = lazy(() => import('./components/airlines/SpiritAirlines'));
const UnitedAirlines = lazy(() => import('./components/airlines/UnitedAirlines'));
const FlightBooking = lazy(() => import('./components/FlightBooking'));
const DestinationInfo = lazy(() => import('./components/DestinationInfo'));


// const App = () => {
//   return 
// }

const rout = createBrowserRouter([
    {
      path: '/',
      element: <Body/>,
      children: [
        {
          path: '/',
          element: <Suspense fallback = { <div>loading...</div>}> 
            <Home/>
          </Suspense>
        },
        {
          path: '/AboutUs',
          element: (
            <Suspense fallback = {<div>loading...</div>}>
              <AboutUs/>
            </Suspense>
          )
        },
        {
          path: '/Services',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <Services />
            </Suspense>
          ),
        },
        {
          path: '/BestDeals',
          element: (
            <Suspense fallback = {<div>loading...</div>}>
              <BestDealsPage/>
              </Suspense> 
          )
        },
        {
          path: '/BusinessClass',
          element:  (
            <Suspense fallback = {<div>loading...</div>}>
              <BusinessClassPage/>
              </Suspense> 
          )
        },
        {
          path: 'Destination',
          element:  (
            <Suspense fallback = {<div>loading...</div>}>
              <DestinationPage/>
              </Suspense> 
          )
        },
        {
          path: '/Faqs',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <Faqs />
            </Suspense>
          ),
        },
        {
          path: 'ContactUs',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <ContactUs />
            </Suspense>
          ),
        },
        {
          path: '/CookiePolicy',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <CookiePolicy />
            </Suspense>
          ),
        },
        {
          path: '/DataProtectionPolicy',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <DataProtectionPolicy />
            </Suspense>
          ),
        },
        {
          path: '/Disclaimer',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <Disclaimer />
            </Suspense>
          ),
        },
        {
          path: '/RefundPolicy',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <RefundPolicy />
            </Suspense>
          ),
        },
        {
          path: '/PrivacyPolicy',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <PrivacyPolicy />
            </Suspense>
          ),
        },
        {
          path: '/TermsAndCondition',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <TermsAndConditions />
            </Suspense>
          ),
        },
        {
          path: '/SiteMap',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <SiteMap />
            </Suspense>
          ),
        },
        {
          path: '/AirFrance',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <AirFrance />
            </Suspense>
          ),
        },
        {
          path: '/AlaskaAirlines',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <AlaskaAirlines />
            </Suspense>
          ),
        },
        {
          path: '/AmericanAirlines',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <AmericanAirlines />
            </Suspense>
          ),
        },
        {
          path: '/DeltaAirlines',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <DeltaAirlines />
            </Suspense>
          ),
        },
        {
          path: '/FrontierAirlines',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <FrontierAirlines />
            </Suspense>
          ),
        },
        {
          path: '/JetBlueAirlines',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <JetBlueAirlines />
            </Suspense>
          ),
        },
        {
          path: '/KLMAirlines',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <KlmAirlines />
            </Suspense>
          ),
        },
        {
          path: '/SouthwestAirline',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <SouthwestAirlines />
            </Suspense>
          ),
        },
        {
          path: '/SpiritAirlines',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <SpiritAirlines />
            </Suspense>
          ),
        },
        {
          path: '/UnitedAirlines',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <UnitedAirlines />
            </Suspense>
          ),
        },
        {
          path: '/FlightBooking',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <FlightBooking />
            </Suspense>
          ),
        },  
        {
          path: '/DestinationInfo/:id',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <DestinationInfo />
            </Suspense>
          ),
        },   
        
      ]
    },
    {
      path: '/Login',
      element: (
        <Suspense fallback={<div>loading...</div>}>
          <LoginPage />
        </Suspense>
      ),
    },
    {
      path: '/SignUp',
      element: (
        <Suspense fallback={<div>loading...</div>}>
          <SignUpPage />
        </Suspense>
      ),
    },
])


const root = createRoot(document.getElementById("root"))
root.render(<RouterProvider router= {rout}></RouterProvider>)
