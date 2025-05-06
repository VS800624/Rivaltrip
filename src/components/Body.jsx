import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./home/NavBar";
import WingsurgeFooter from "./WingsurgeFooter";
import { useEffect } from "react";
// import Search from "./home/Search";
import Call from "./Call";

  const Body = () => {
    const location = useLocation()
    useEffect(() => {
      window.scrollTo(0,0)
    }, [location])

    return <>
    <header >
      <NavBar />
       
    </header>
    <main>
       <Outlet/>
    </main>
    <footer>
      <Call/>
      <WingsurgeFooter/>
    </footer>
  </>
  }


  export default Body;