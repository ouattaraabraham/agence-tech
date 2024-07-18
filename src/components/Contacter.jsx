import { NavLink } from "react-router-dom";
import { DATACONTACTER } from "../data/Constant";
import Btn from "./Btn";

const style="py-2 px-4 lg:py-4 lg:px-7 lg:mt-2 lg:mb-2"
const Contacter = () => {
    return (
        <section className="bg-[#01225c]">
          <div className="py-[50px] lg:py-[100px] lg:flex items-center justify-between mx-auto px-[20px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">     
            <div className="lg:flex items-center lg:gap-32">
                <div>
                    <h3 className="text-[#FFF5CC] font-semibold pb-5 lg:pb-10 text-[20px] lg:text-[22px]">{DATACONTACTER.h3}</h3>
                    <p className="pb-5 lg:pb-10">{DATACONTACTER.p}</p>
                    <img className="lg:w-[200px]" src={DATACONTACTER.img} alt="logo-plus" />
                </div>
                <div className="mt-[25px] md:mt-[35px] lg:mt-0 lg:mr-4">
                 <NavLink to={DATACONTACTER.link.link}>
                   <Btn txt={"Contacter-Nous"} style={style} top={50}/>
                 </NavLink>
                </div>
            </div>
          </div>      
        </section>
    );
};

export default Contacter;