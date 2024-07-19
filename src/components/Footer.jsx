import { Link} from "react-router-dom";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { DATAFOOTER } from "../data/Constant";

const Footer = () => {
    return (
        <div className="relative bg-[#00163E]">
          <div className=" mx-auto px-[20px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
             {/* div-haut */}
            <div>
                <div className=" pt-3 pb-2 lg:pt-5 flex justify-between items-center">
                <Logo/>
                <ul className="flex items-center gap-4">
                 <Link>
                    <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.2 }} 
                     className="p-[3px] lg:p-[5px] "><FaWhatsapp size={22} className="text-[#F56F46]"/>
                     </motion.li>
                  </Link>
                  <Link>
                    <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.2 }} 
                     ><FaLinkedinIn size={22} className="text-[#F56F46]"/>
                     </motion.li>
                  </Link>
                  <Link>
                    <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.2 }} 
                     ><FaFacebookF size={22} className="text-[#F56F46]"/>
                     </motion.li>
                  </Link>

                </ul>
                </div>
                <div className="absolute left-0 w-full h-[1px] bg-white"></div>
            </div> 
           
             {/* div-bas */}
             <div className="pb-4 pt-3 flex justify-between text-[12px] lg:text-[14px] py-2">
                <a href="">{DATAFOOTER.siteWeb}</a>
                <p>{DATAFOOTER.legal}</p>
             </div>
          </div>
        </div>
    );
};

export default Footer;