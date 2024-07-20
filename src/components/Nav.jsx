import { useState} from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";
import {
  AiOutlineClose,
  AiFillCaretDown,
  AiFillCaretRight
} from "react-icons/ai";

import { DATANAVLINK } from "../data/Constant";


const Nav = () => {
  const [isOpenServiceMobil, setIsOpenServiceMobil] = useState(false);

  window.addEventListener("scroll", function (){
    setIsOpenServiceMobil(false)
  })

  const toogleIsOpenServiceMobil = () => {
    setIsOpenServiceMobil((prev) => !prev)
    
  };
  return (
    <>
      {/* desktop  */}
      <nav className=" hidden font-semibold relative text-white lg:flex items-center gap-8 ">
        {
          DATANAVLINK.map(item=>
            <ul key={item.id}>
               {item.id !==1?
                <NavLink className="p-3 hover:text-[#F56F46] " to={item.link}>
          {item.name}
        </NavLink>:
        <div className=" cursor-pointer">
          <div
            className="flex items-center gap-4 peer group hover:text-[#F56F46] ">
            <p>{item.name}</p>
            <span className="group-hover:hidden group-hover:invisible">
             <AiFillCaretDown />
            </span>
            <span className="hidden invisible group-hover:block group-hover:visible">
             <AiFillCaretRight/>
             </span>
          </div>
          <div className="absolute left-[-60px]  invisible hidden  opacity-0 peer-hover:visible hover:visible peer-hover:block hover:block peer-hover:opacity-100 hover:opacity-100">
            <div className=" shadow-navBar bg-[#002057] rounded-sm flex  gap-5 mt-6 py-4 px-5 text-white ">
              {item.sousLink.map(item=>
                <NavLink
                  key={item.id}
                  // onClick={props}
                  to={item.link}
                  className=" flex flex-col gap-2 items-center"
                >
                  <div className="hover:text-[#F56F46] p-3 flex flex-col gap-2 items-center">
                  <motion.img
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.2 }}  
                    className="w-[35px]" src={item.icon} alt="icon" />
                    {/* <CiGlobe size={30} /> */}
                    <p>
                    {item.name}</p>
                  </div>
                </NavLink>
              )}
            </div>
          </div>
        </div>
        }
            </ul>
          )
        }
      </nav>
      {/* mobil */}
      <nav className="z-50 lg:hidden my-auto">
        <div onClick={toogleIsOpenServiceMobil}>
          {isOpenServiceMobil ? (
            <AiOutlineClose size={30} />
          ) : (
            <FaAlignLeft size={25} />
          )}
        </div>
        {isOpenServiceMobil && (
          <div className="z-50 absolute text-[18px] py-2 flex flex-col  left-0 top-6 pl-10 pt-10 pb-16 shadow-lg mt-10 w-full bg-[#002057]">
          <div className=" flex flex-col gap-5">
              {
                DATANAVLINK.map(item=>
                
                  item.id !==1?
                  <NavLink key={item.id} onClick={toogleIsOpenServiceMobil} to={item.link}>
                    {item.name}
                  </NavLink>:
                  <div key={item.id} className=" cursor-pointer">
                      <div
                        className="flex gap-8 items-center"
                       
                      >
                        <p>{item.name}</p>{" "}
                          <AiFillCaretDown /> 
                      </div>
                      <div className="flex flex-col pt-4 gap-3">
                          {
                            item.sousLink.map(item=>
                              <NavLink className="text-[17px] pl-3 text-nowrap" key={item.id} onClick={toogleIsOpenServiceMobil} to={item.link}>
                                {item.name}
                              </NavLink>
                            )
                          }
                        </div>
                       
                  </div> 
                  
                 )
              } 
            </div>
            
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
