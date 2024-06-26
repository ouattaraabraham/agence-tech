import Logo from "./Logo";

import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


import { DATAFOOTER } from "../data/Constant";

const Footer = () => {
    return (
        <div className="relative bg-[#00163E]">
          <div className=" mx-auto px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
             {/* div-haut */}
            <div>
                <div className=" pt-3 pb-2 lg:pt-5 flex justify-between items-center">
                <Logo/>
                <ul className="flex gap-4">
                    <li className="bg-slate-100 rounded-full p-[3px] lg:p-[5px]"><FaWhatsapp size={24} className="text-[#F56F46]"/></li>
                    <li className="bg-slate-100 rounded-full px-[5px] py-[3px] lg:px-[7px] lg:py-[5px]"><FaLinkedinIn size={22} className="text-[#F56F46]"/></li>
                    <li className="bg-slate-100 rounded-full px-[5px] py-[3px] lg:px-[7px] lg:py-[5px]"><FaFacebookF size={22} className="text-[#F56F46]"/></li>
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