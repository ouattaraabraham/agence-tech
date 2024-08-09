import PropTypes from 'prop-types';

import { motion } from "framer-motion";
import { CgArrowTopRight } from "react-icons/cg";

 function Btn ({txt,style,top,type}) {
  
    const btn= {
            hover: {
                top: top?top:50,
                transition: {
                duration: 0.3,
                type: "Spring",
                ease: "easeOut",
                repeatType: "loop"
                }
            }
              }
   
      const textMotion = {
        hover: {
          // color: "blue",
          x: 10,
          transition: {
            duration: 0.1,
            type: "Spring",
            ease: "easeOut",
            repeatType: "loop"
          }
        }
      };

    return (
        <motion.button
          type={type?"submit":""}
        initial="rest" whileHover="hover" animate="rest"
        className={`relative overflow-hidden group flex items-center transition ease-in-out delay-150 font-bold text-nowrap text-[18px] rounded-full ${style?style:"py-2 px-4 mt-2 mb-2"} text-white border-[#F56F46] border-[1.5px]`}>
        <span className="z-30">
            {txt}
        </span>
  
        <motion.span
        variants={textMotion}
          className="z-30 pl-3">
        <CgArrowTopRight />
        </motion.span>
  
        <motion.span
          variants={btn}
          className="z-20 absolute left-0 top-0 bg-[#F56F46] w-full h-full rounded-full "></motion.span>
      </motion.button>
    );
}

Btn.propTypes = {
  txt: PropTypes.string,
  style: PropTypes.string,
  top: PropTypes.string,
  type: PropTypes.string,

  

};
export default Btn;