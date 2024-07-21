import Boules from "./Boules";
import { AUTRESERVICE } from "../data/Constant";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const AutreService = () => {
    return (
        <section className="bg-[#002057]">
          <div className="lg:flex flex-col py-[50px] lg:py-[100px] mx-auto px-[20px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]"> 
           <Boules/>   
           <h2 className="font-bold text-[22px] lg:text-[32px] text-[#E0E0E0] text-center py-10 pb-5 md:py-10">{AUTRESERVICE.h2}</h2>   
      
           <div className="mx-auto cursor-pointer max-w-sm md:px-0  md:pt-10 grid md:grid-cols-2 md:max-w-fit lg:grid-cols-3 md:gap-5 lg:gap-10 justify-center">
           {
            AUTRESERVICE.services.map((items)=>
            <NavLink className="mt-6 md:mt-0 " key={items.id} to={items.link.link}>
              <motion.div
                 whileHover={{
                    y: -10,
                    transition: { duration: .4 },
                  }}
                  whileTap={{ y: 3}}
                className="relative bg-[#f0f8ff] text-slate-800 mx-auto flex flex-col items-center justify-center px-5 lg:px-5 pb-8 pt-8  rounded-2xl w-fit  max-w-sm ">
                <h3 className="text-[#172153] pb-5 font-bold text-[20px] lg:text-[22px]">{items.h3}</h3>
                <img className="w-[45px] " src={items.img} alt={items.h2} />
                <p className="font-semibold py-6 text-[16px]  lg:text-[18px]">{items.p}</p>
                <span  href={items.link.link} className="absolute font-semibold bottom-5 right-12 text-[#F56F46]">{items.link.name}</span>
              </motion.div>
              </NavLink>

            )
           }
           </div>
          </div>
            
        </section>
    );
};

export default AutreService;