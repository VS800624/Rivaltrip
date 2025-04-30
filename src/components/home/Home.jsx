
import BestDeals from "./BestDeals";
import BusinessClass from "./BusinessClass";
import PopularDestination from "./PopularDestination";
import Sidebar from "./Sidebar";
import Testimonials from "./Testimonials";


const Home = () => {
    return <>
              <Sidebar/>  
              <PopularDestination/>
              <BestDeals/> 
              <BusinessClass/>
              <Testimonials/>
               
           </>
}


export default Home;