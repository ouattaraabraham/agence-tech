import {useRef} from "react";
import {motion, useScroll, useTransform } from "framer-motion"
import { etoile2 } from "../assets/icon";
import { fuse2 } from "../assets/image";


function Motivation() {
 const ref= useRef()
  
const { scrollYProgress} = useScroll(
  {
    target:ref,
    offset:["start end","end start"],
  }
);

const fusseLg= useTransform(scrollYProgress,[0,1],["0%","-500%"])
const fusseMobile= useTransform(scrollYProgress,[0,1],["0%","400%"])


  return (
    <section ref={ref}   className="relative my-[50px] overflow-hidden">
      {/* mobil */}
      <div className="relative lg:hidden mx-auto py-[50px] lg:py-[100px] flex flex-col items-center justify-center lg:flex-row lg:gap-10 pt-[100px] px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
        <div className="absolute top-0 right-5">
          <img
            className="w-[100px]"
            src={etoile2}
            alt="etoile"
          />
        </div>
        {/* fuse */}
        <motion.div style={{x:fusseMobile}} className="absolute left-0 top-0">
          <img
            className="w-[100px] "
            src={fuse2}
            alt="fuse"
          />
        </motion.div>
        <div>
          <p
            className={`relative flex font-semibold pt-[30px] text-[25px] lg:text-[40px] max-w-2xl before:contents  before:content-quote632 lg:before:content-quote664 after:contents after:content-quote932 lg:after:content-quote964`}
          >
            {""} Faites décoller votre entreprise et brillé au milieu des
            étoiles de ce monde {""}
          </p>
        </div>
      </div>
      {/* lg */}
      <div  className="relative hidden  mx-auto  py-[100px] lg:flex flex-col items-center justify-center lg:flex-row lg:gap-10 pt-[100px] px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140pxx] 2xl:max-w-[1320pxx] 3xl:max-w-[1620pxx]">
        {/* left */}
        <div className=" w-[25%]]">
          {/* etoiles */}
          <div className="absolute top-0 left-[100px]">
            <img
              className=""
              src={etoile2}
              alt="etoile"
            />
          </div>
          <motion.div
           style={{y:fusseLg}}  className="absolute bottom-[-300px]">
            <img
              className="w-[200px] rotate-[-44deg]"
              src={fuse2}
              alt="fuse"
            />
          </motion.div>
        </div>

        {/* right */}
        <div className="ml-32">
          <p
            className={`relative flex font-semibold ml-[100px] pt-[30px] text-[25px] lg:text-[40px] max-w-2xl before:contents  before:content-quote632 lg:before:content-quote664 after:contents after:content-quote932 lg:after:content-quote964`}
          >
            {""} Faites décoller votre entreprise et brillé au milieu des
            étoiles de ce monde {""}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Motivation;

