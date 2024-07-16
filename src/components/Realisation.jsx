import ActiveSlider from "./ActiveSlider";
import { DATAREALISATION } from "../data/Constant";
const Realisation = () => {
    return (
        <section className="bg-[#002057] ">
          <div className="py-[100px]">
            <h1 className="font-bold text-[25px] lg:text-[32px] text-[#E0E0E0] text-center pb-10">{DATAREALISATION.h2}</h1>  
          <ActiveSlider/>
          </div> 
        </section>
    );
};

export default Realisation;