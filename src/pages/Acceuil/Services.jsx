
import { DATASERVICECREATION} from "../../data/Constant";

import Boules from "../../components/Boules";



const Services = () => {
    const { acceuil } = DATASERVICECREATION;
  
    return(
      <section className="bg-[#022562]">
            <div className="lg:flex flex-col py-[100px] mx-auto px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]"> 
              <div>
                <Boules/>
                <h2 className="font-bold text-[25px] lg:text-[30px] text-[#F56F46] text-center py-10">NOS SERVICES CREATION</h2>
              </div>
              <div className="px-5">
                  <div className="mx-auto max-w-sm  pt-10 grid md:grid-cols-2 md:max-w-fit lg:grid-cols-3 gap-5 lg:gap-10 justify-center">
  
                  {
                    acceuil.map((items)=>
  
                      <div key={items.id} className="bg-[#172153] border-2 w-fit rounded-xl flex flex-col items-center">
                          <img className="rounded-t-xl" src={items.img} alt={items.name} />
                          <div className="px-4 py-7">
                            <h3 className="font-bold text-nowrap text-[20px] lg:text-[22px] text-[#87AAF8]">{items.name}</h3>
                            <p className="pt-4">{items.p}</p>
                            <h3 className=" font-bold text-nowrap text-[18px] pt-5 pb-2 text-[#87AAF8]">{items.h3}</h3>
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