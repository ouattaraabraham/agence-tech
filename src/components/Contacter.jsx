import { NavLink } from "react-router-dom";

import { DATACONTACTER } from "../data/Constant";

const Contacter = () => {
    return (
        <section className="bg-[#172153]">
          <div className="pt-[50px] py-[100px] lg:flex items-center justify-between mx-auto px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">     
            <div className="lg:flex items-center lg:gap-32">
                <div>
                    <h3 className="font-semibold pb-5 lg:pb-10 text-[20px] lg:text-[22px]">{DATACONTACTER.h3}</h3>
                    <p className="pb-5 lg:pb-10">{DATACONTACTER.p}</p>
                    <img className="lg:w-[200px]" src={DATACONTACTER.img} alt="logo-plus" />
                </div>
                <div className="mt-[50px] md:mt-[35px] lg:mt-0 lg:mr-4">
                    <NavLink className="text-nowrap text-[18px] lg:text-[20px] bg-[#F56F46] px-[25px] lg:px-[55px] py-[15px] rounded-3xl">{DATACONTACTER.link.content}</NavLink>
                  </div>
            </div>
          </div>      
        </section>
    );
};

export default Contacter;