import { faqs } from "../utils/data";

const Faqs = () => {
    return <section className="md:mt-[160px] mx-auto max-w-[1400px]">
                <div className="bg-[url('https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[200px] flex  items-center justify-center md:mb-[70px] mb-[30px]">   
                    <h3 className="text-[1.67rem] text-gray-700 font-semibold ">FAQs</h3>
                </div>
                <div className="flex flex-col  my-[30px] md:ml-[150px] md:pl-[36px] ml-[14px]   md:w-[65%] ">
                        <h2 className="md:text-[1.8rem] text-[1.6rem] font-bold mb-[6px] ">Frequently Asked Questions </h2>
                        <p className="text-[0.85rem] mb-[30px] ">Find answers to your most common questions about Wingsurge.com, our services, and booking process. We aim to provide clarity and ensure a smooth experience for every traveler.</p>
                        {
                            faqs.map((faq) => 
                            <details key={faq.id} className=" mr-[14px]">
                                <summary className="bg-gray-200 py-[10px] pl-[20px]  hover:bg-blue-500 hover:text-white font-semibold cursor-pointer">{faq.question}</summary>
                                <p className="px-[40px] text-[0.85rem] py-[40px] text-gray-500 border-[1px] border-gray-200 border-t-0">{faq.answer}</p>
                            </details>
                            )
                        }
                        
                </div>
          </section>
}


export default Faqs;