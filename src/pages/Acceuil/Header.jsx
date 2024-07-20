import {DATAACCEUIL } from "../../data/Constant";
import Btn from "../../components/Btn"
import { NavLink } from "react-router-dom";


const style="py-3 px-4 lg:py-4 lg:px-7 lg:mt-2 lg:mb-2"
const Header = () => {
    return (
      <section >
        <div className="pb-[50px] md:pb-[100px] pt-[50px] lg:pt-[50px] lg:flex items-center justify-between mx-auto px-[.75rem]] px-[20px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
          {/* left */}
          <div className="relative lg:w-[50%]">
            <h1 className="relative text-[#E0E0E0] text-[35px] lg:text-[48px] w-[80%] sm:w-[60%] lg:w-[80%] ">
              {DATAACCEUIL.header.left.h1}
            </h1>
            <p className="text-[16px]] mt-[30px] lg:text-[19px]">
              {DATAACCEUIL.header.left.p}
            </p>
            <div className="mt-[25px] md:mt-[35px]">
            <NavLink to={DATAACCEUIL.header.left.btn.link}>
               <Btn txt={DATAACCEUIL.header.left.btn.txt} style={style} top={50}/>
            </NavLink>
            </div>
          </div>
          {/* right */}
          <div className="flex justify-center lg:justify-end mt-[100px] md:mt-[150px] lg:mt-0 lg:w-[50%]">
            <div className="relative w-[80%] lg:mt-8">
              <div className="absolute bottom-8 right-8 border-4 border-[#F56F46] w-full h-full"></div>
              <img
                className="relative w-fit z-20"
                src={DATAACCEUIL.header.right.img}
                alt="hero"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Header