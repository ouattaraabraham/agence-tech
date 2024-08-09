import { DATA_PROJETS } from "../../data/Constant"
import Btn from "../../components/Btn"
import { CiNoWaitingSign  } from "react-icons/ci";



function index() {

  return (
    <div>
        <div className="mx-auto my-[50px] lg:my-[100px] w-[90%] sm:w-[80%] max-w-[1080px] ">
            <div className="relative mx-auto max-w-2xl  lg:max-w-4xl">
                <h2 className="mb-[3%] text-center text-[20px] lg:text-[24px]"> {DATA_PROJETS.h2} </h2>
                <h3 className="mb-[15%] llg:mb-[5%] text-center"> {DATA_PROJETS.h3} </h3>
            </div>
            <section>
            {DATA_PROJETS.projets.map((item,index)=>
             <div key={index} className="w-fit mx-auto mb-[25%] lg:mb-[15%] lg:flex  justify-between">
               <img className=" object-cover lg:w-[45%] hover:scale-110 mb-[10%] lg:mb-0" src={item.img} alt="projet" />
                 <div className="max-w-2xl lg:w-[45%]">
                   <h3 className="font-semibold text-[18px] lg:text-[20px] mb-[3%]">{item.h3}</h3>
                   <p className="mb-[3%]">{item.p}</p>
                   {item.link.true?
                   <div className="mt-5 w-fit">
                    <a 
                      href={item.link.link}
                      target='_blank'
                      rel="noopener"
                      aria-label='Github'
                    >
                        <Btn txt={"visiter"}  top={40}/>
                    </a>
                   </div>
                   :
                   
                      <div className="flex flex-wrap gap-6">
                          <button
                              className={`relative overflow-hidden group flex items-center transition ease-in-out delay-150 font-bold text-nowrap text-[18px] rounded-full py-2 px-4 mt-2 mb-2 text-white border-[#F56F46] border-[1.5px]`}>
                            <span className="z-30">
                                visiter
                            </span> 
                            <span
                            
                              className="z-30 pl-3">
                            <CiNoWaitingSign />
                            </span>
                          </button>
                        <a href={item.link.linkVisite}
                          target='_blank'
                          rel="noopener"
                          aria-label='Github'
                        >
                         <Btn txt={"voir démo"}  top={40}/>
                        </a>
                      </div>
                  
                  
                   }
                 </div>
              </div>
            ) }
            </section>
        </div>
    </div>
  )
}

export default index