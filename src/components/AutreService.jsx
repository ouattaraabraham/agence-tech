import Boules from "./Boules";
import { AUTRESERVICE } from "../data/Constant";
import { NavLink } from "react-router-dom";

const AutreService = () => {
    return (
        <section className="bg-[#022562]">
          <div className="lg:flex flex-col py-[100px] mx-auto px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]"> 
           <Boules/>   
           <h2 className="font-bold text-[25px] lg:text-[32px] text-[#F56F46] text-center py-10">{AUTRESERVICE.h2}</h2>   
      
           <div className="mx-auto cursor-pointer max-w-sm px-4 md:px-0  pt-10 grid md:grid-cols-2 md:max-w-fit lg:grid-cols-3 gap-5 lg:gap-10 justify-center">
           {
            AUTRESERVICE.services.map((items)=>
            <NavLink key={items.id} to={items.link.link}>
              <div  className="relative bg-white mx-auto flex flex-col items-center justify-center px-10 lg:px-5 pb-8 pt-8  rounded-3xl w-fit  max-w-sm ">
                <h3 className="text-[#172153] pb-5 font-semibold text-[20px] lg:text-[22px]">{items.h3}</h3>
                <img className="w-[45px] " src={items.img} alt={items.h2} />
                <p className="text-black py-6 text-[16px]  lg:text-[18px]">{items.p}</p>
                <span  href={items.link.link} className="absolute bottom-5 right-12 text-[#F56F46]">{items.link.name}</span>
              </div>
              </NavLink>

            )
           }
           </div>
          </div>
            
        </section>
    );
};

export default AutreService;