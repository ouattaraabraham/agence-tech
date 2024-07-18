import { DATAACCEUIL} from "../../data/Constant";
import Boules from "../../components/Boules";
import { NavLink } from "react-router-dom";
import Btn from "../../components/Btn";


 function Services () {
    return(
      <section className="bg-[#01225c]">
            <div className="lg:flex flex-col py-[100px] mx-auto px-[20px] sm:max-w-[540px]] md:max-w-[720px]] lg:max-w-[960px]] md:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]"> 
              <div>
                <Boules/>
                <h2 className="font-bold text-[22px] lg:text-[30px] text-[#E0E0E0] text-center py-10">{DATAACCEUIL.presantation.h2}</h2>
              </div>
              <div >
                  <div className="mx-auto max-w-sm pt-5 grid md:grid-cols-2 md:max-w-fit lg:grid-cols-3 gap-10 justify-center">
  
                  {
                    DATAACCEUIL.presantation.service.map((items)=>
  
                      <div key={items.id} className="bg-[#022562] text-slate-300 mt-6 lg:mt-0 border-2 w-fit rounded-xl flex flex-col items-center">
                          <img className="rounded-t-xl" src={items.img} alt={items.name} />
                          <div className="px-4 py-7">
                            <h3 className="font-bold text-nowrap text-[20px] lg:text-[22px] text-[#FFF5CC]">{items.name}</h3>
                            <p className="pt-4">{items.p}</p>
                            <div className="pt-2">
                              <NavLink to={items.link}>
                                <Btn txt={items.h3} top={40}/>
                              </NavLink>
                            </div>
                          </div>
                      </div>
                      
                      )
                  }
                  </div>
              </div>
            </div>
          </section>
    )
  }

  export default Services