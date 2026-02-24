import React from "react";
import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Loading from "./components/Loading";
import AdminLayout from "./admin/AdminLayout";
import PopularDestinationIndex from "./admin/popularDestination/popularDestinationIndex";
import CreatePopularDestination from "./admin/popularDestination/CreatePopularDestination";
import EditPopularDestination from "./admin/popularDestination/EditPopularDestinations";
import AdminDashboard from "./admin/AdminDashboard";
import BestDealsCountriesIndex from "./admin/bestDeals/BestDealsCountiresInbox";
import CreateBestDealsCountries from "./admin/bestDeals/CreateBestDealsCountries";
import EditBestDealsCountries from "./admin/bestDeals/editPopularDestinations";
import BusinessClassCountriesIndex from "./admin/businessClass/businessClassCountriesIndex";
// import Home from "./components/home/Home";
// import AboutUs from "./components/about_us/AboutUs";
const AboutUs = lazy(() => import("./components/about_us/AboutUs"));
const Home = lazy(() => import("./components/home/Home"));
const Services = lazy(() => import("./components/services/Services"));
const BestDealsPage = lazy(
  () => import("./components/best_deals/BestDealsPage"),
);
const BusinessClassPage = lazy(
  () => import("./components/business_class/BusinessClassPage"),
);
const DestinationPage = lazy(
  () => import("./components/destination/DestinationPage"),
);
const Faqs = lazy(() => import("./components/Faqs"));
const ContactUs = lazy(() => import("./components/ContactUs"));
// import ContactUs from "./components/ContactUs";
const LoginPage = lazy(() => import("./components/LoginPage"));
const SignUpPage = lazy(() => import("./components/SignUpPage"));
const CookiePolicy = lazy(
  () => import("./components/usefulLinks/CookiePolicy"),
);
const SiteMap = lazy(() => import("./components/usefulLinks/SiteMap"));
const DataProtectionPolicy = lazy(
  () => import("./components/usefulLinks/DataProtectionPolicy"),
);
const Disclaimer = lazy(() => import("./components/usefulLinks/Disclaimer"));
const RefundPolicy = lazy(
  () => import("./components/usefulLinks/RefundPolicy"),
);
const PrivacyPolicy = lazy(
  () => import("./components/usefulLinks/PrivacyPolicy"),
);
const TermsAndConditions = lazy(
  () => import("./components/usefulLinks/TermsAndCondition"),
);
const AirFrance = lazy(() => import("./components/airlines/AirFrance"));
const AlaskaAirlines = lazy(
  () => import("./components/airlines/AlaskaAirlines"),
);
const AmericanAirlines = lazy(
  () => import("./components/airlines/AmericanAirlines"),
);
const DeltaAirlines = lazy(() => import("./components/airlines/DeltaAirlines"));
const FrontierAirlines = lazy(
  () => import("./components/airlines/FrontierAirlines"),
);
const JetBlueAirlines = lazy(
  () => import("./components/airlines/JetBlueAirlines"),
);
const KlmAirlines = lazy(() => import("./components/airlines/KlmAirlines"));
const SouthwestAirlines = lazy(
  () => import("./components/airlines/SouthWestAirlines"),
);
const SpiritAirlines = lazy(
  () => import("./components/airlines/SpiritAirlines"),
);
const UnitedAirlines = lazy(
  () => import("./components/airlines/UnitedAirlines"),
);
const FlightBooking = lazy(() => import("./components/FlightBooking"));
const DestinationInfo = lazy(() => import("./components/DestinationInfo"));

// const App = () => {
//   return
// }

const rout = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Services />
          </Suspense>
        ),
      },
      {
        path: "/best-deals",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <BestDealsPage />
          </Suspense>
        ),
      },
      {
        path: "/business-class",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <BusinessClassPage />
          </Suspense>
        ),
      },
      {
        path: "/destination",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <DestinationPage />
          </Suspense>
        ),
      },
      {
        path: "/faqs",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Faqs />
          </Suspense>
        ),
      },
      {
        path: "/contact-Us",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/cookie-policy",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <CookiePolicy />
          </Suspense>
        ),
      },
      {
        path: "/data-protection-policy",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <DataProtectionPolicy />
          </Suspense>
        ),
      },
      {
        path: "/disclaimer",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Disclaimer />
          </Suspense>
        ),
      },
      {
        path: "/refund-policy",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <RefundPolicy />
          </Suspense>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <PrivacyPolicy />
          </Suspense>
        ),
      },
      {
        path: "/terms-and-condition",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <TermsAndConditions />
          </Suspense>
        ),
      },
      {
        path: "/siteMap",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <SiteMap />
          </Suspense>
        ),
      },
      {
        path: "/air-france",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <AirFrance />
          </Suspense>
        ),
      },
      {
        path: "/alaska-airlines",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <AlaskaAirlines />
          </Suspense>
        ),
      },
      {
        path: "/american-airlines",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <AmericanAirlines />
          </Suspense>
        ),
      },
      {
        path: "/delta-airlines",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <DeltaAirlines />
          </Suspense>
        ),
      },
      {
        path: "/frontier-airlines",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <FrontierAirlines />
          </Suspense>
        ),
      },
      {
        path: "/jetblue-airlines",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <JetBlueAirlines />
          </Suspense>
        ),
      },
      {
        path: "/klm-airlines",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <KlmAirlines />
          </Suspense>
        ),
      },
      {
        path: "/southwest-airline",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <SouthwestAirlines />
          </Suspense>
        ),
      },
      {
        path: "/spirit-airlines",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <SpiritAirlines />
          </Suspense>
        ),
      },
      {
        path: "/united-airlines",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <UnitedAirlines />
          </Suspense>
        ),
      },
      {
        path: "/flight-booking",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <FlightBooking />
          </Suspense>
        ),
      },
      {
        path: "/destination-info/:slug",
        element: (
          <Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <DestinationInfo />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <SignUpPage />
      </Suspense>
    ),
  },
  // Unknown Urls
  {
    path: "*",
    element: <NotFound />,
  },

  // Admin Routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
      path: "dashboard",
      element: (
        <Suspense fallback={<Loading />}>
          <AdminDashboard />
        </Suspense>
      ),
      },
      {
        path: "popular-destinations",
        element: (
          <Suspense fallback={<Loading />}>
            <PopularDestinationIndex />
          </Suspense>
        ),
      },
      {
        path: "popular-destination/create",
        element: (
          <Suspense fallback={<Loading/>}>
            <CreatePopularDestination/>
          </Suspense>
        )
      },
      {
        path: "popular-destination/edit/:id",
        element: (
          <Suspense fallback={<Loading/>}>
            <EditPopularDestination/>
          </Suspense>
        )
      },
      {
        path: "best-deals",
        element: (
          <Suspense fallback={<Loading/>}>
            <BestDealsCountriesIndex/>
          </Suspense>
        )
      },
      {
        path: "best-deals/create",
        element: (
          <Suspense fallback={<Loading/>}>
            <CreateBestDealsCountries/>
          </Suspense>
        )
      },
      {
        path: "best-deals/edit/:id",
        element: (
          <Suspense fallback={<Loading/>}>
            <EditBestDealsCountries/>
          </Suspense>
        )
      },
      {
        path: "business-class",
        element: (
          <Suspense fallback={<Loading/>}>
            <BusinessClassCountriesIndex/>
          </Suspense>
        )
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={rout}></RouterProvider>
  </Provider>,
);
