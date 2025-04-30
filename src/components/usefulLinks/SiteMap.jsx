import { Link } from "react-router-dom";


const SiteMap = () => {
    return <section className="md:mt-[160px] mx-auto max-w-[1400px]">
                 <div className="bg-[url('https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[200px] flex  items-center justify-center ">   
                    <h3 className="text-[1.67rem] text-gray-700 font-semibold ">Site Map</h3>
                </div> 
                <h2 className="text-[1.8rem] font-semibold text-gray-500 mt-[60px] mb-[20px] md:mb-[6px] ml-[30px] md:ml-[100px]">SiteMap</h2> 
                <div className="grid grid-cols-3 text-[0.9rem] gap-[14px] text-gray-500 md:gap-[10px] ml-[30px] md:ml-[100px] mb-[60px]">
                    <Link to = '/About Us'><span className="hover:text-blue-500 active:text-blue-600">About Us</span></Link>
                    <Link to = '/Privacy Policy'><span className="hover:text-blue-500 active:text-blue-600">Privacy Policy</span></Link>
                    <Link to = '/Destination'><span className="hover:text-blue-500 active:text-blue-600">Destinations</span>  </Link>
                    <Link to = '/Data Protection Policy'><span className="hover:text-blue-500 active:text-blue-600">Data Protection Policy</span></Link>
                    <Link to = '/Refund Policy'><span className="hover:text-blue-500 active:text-blue-600">Refund Policy</span> </Link>
                    <Link to = 'Contact Us'><span className="hover:text-blue-500 active:text-blue-600">Contact Us</span>  </Link>
                    <Link to = 'Terms and conditions'><span className="hover:text-blue-500 active:text-blue-600">Terms and conditions</span> </Link>
                    <Link to = 'Disclaimer'> <span className="hover:text-blue-500 active:text-blue-600">Disclaimer</span>  </Link>
                    <Link to = '/Cookie Policy'><span className="hover:text-blue-500 active:text-blue-600">Cookie Policy</span></Link>
                    <Link to = '/Services'> <span className="hover:text-blue-500 active:text-blue-600">Services</span>  </Link>
                     <Link to = '/SiteMap'><span className="hover:text-blue-500 active:text-blue-600">SiteMap</span> </Link>
                    <Link to = '/FAQS'><span className="hover:text-blue-500 active:text-blue-600">FAQs</span></Link>
                </div>
          </section>
}

export default SiteMap;