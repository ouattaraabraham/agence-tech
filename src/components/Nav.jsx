import { NavLink } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";
import {
  AiOutlineClose,
  AiOutlineCaretRight,
  AiFillCaretDown,
} from "react-icons/ai";
// import { CiGlobe } from "react-icons/ci";

import { useState } from "react";

import { DATANAVLINK } from "../data/Constant";

const SousNavMobil = (props) => {
  return (
    <>
      {DATANAVLINK.sousLink.mobile.map((item) => {
        return (
          <NavLink key={item.id} onClick={props} to={item.link}>
            {item.name}
          </NavLink>
        );
      })}
      {/* <NavLink onClick={props} to="/web-design">SITE WEB</NavLink>
               <NavLink onClick={props} to="/design-branding">DESIGN & BRANDING</NavLink>
               <NavLink onClick={props} to="/marketing">MARKETING</NavLink> */}
    </>
  );
};

const SousNavDesktop = (props) => {
  return (
    <>
      {DATANAVLINK.sousLink.desktop.map((item) => {
        return (
          <NavLink
            key={item.id}
            onClick={props}
            to={item.link}
            className="flex flex-col gap-2 items-center"
          >
            <img className="w-[35px]" src={item.icon} alt="icon" />
            {/* <CiGlobe size={30} /> */}
            <p>{item.name}</p>
          </NavLink>
        );
      })}
    </>
  );
};
const Nav = () => {
  const [isOpenServiceDesktop, setIsOpenServiceDesktop] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenServiceMobil, setIsOpenServiceMobil] = useState(false);

  const toogleIsOpenServiceDesktop = () => {
    setIsOpenServiceDesktop((prev) => !prev);
  };

  const delectServiceDesktop = () => {
    setIsOpenServiceDesktop(false);
    window.scrollTo(0, 0);
  };
  const toogleIsOpenServiceMobil = () => {
    setIsOpenServiceMobil((prev) => !prev);
  };
  const toogleIsOpenMenu = () => {
    setIsOpenMenu((prev) => !prev);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* desktop  */}
      <nav className=" hidden relative lg:flex items-center gap-10 ">
        <NavLink onClick={delectServiceDesktop} to={DATANAVLINK.links.acceuil.link}>
          {DATANAVLINK.links.acceuil.name}
        </NavLink>
        <div className=" cursor-pointer">
          <div
            className="flex items-center gap-4"
            onClick={toogleIsOpenServiceDesktop}
          >
            <p>{DATANAVLINK.links.service.name}</p>
            <AiFillCaretDown />
          </div>
          {isOpenServiceDesktop ? (
            <div className="absolute shadow-navBar bg-[#172153] flex  gap-5 mt-6 py-4 px-5 left-[-60px]  text-white">
              <SousNavDesktop />
            </div>
          ) : (
            ""
          )}
        </div>
        <NavLink onClick={delectServiceDesktop} to={DATANAVLINK.links.realisation.link}>
          {DATANAVLINK.links.realisation.name}
        </NavLink>
        <NavLink onClick={delectServiceDesktop} to={DATANAVLINK.links.agence.link}>
          {DATANAVLINK.links.agence.name}
        </NavLink>
        <NavLink onClick={delectServiceDesktop} to={DATANAVLINK.links.contacter.link}>
            {DATANAVLINK.links.contacter.name}
        </NavLink>
      </nav>
      {/* mobil */}
      <nav className=" lg:hidden">
        <div onClick={toogleIsOpenMenu}>
          {isOpenMenu ? (
            <AiOutlineClose size={30} />
          ) : (
            <FaAlignLeft size={25} />
          )}
        </div>
        {isOpenMenu && (
          <div className="absolute text-[20px] py-4 flex flex-col  left-0 top-8 px-20 pt-10 mt-10 w-full h-screen bg-[#172153]">
            <div className="flex flex-col gap-8">
              <NavLink onClick={toogleIsOpenMenu} to={DATANAVLINK.links.acceuil.link}>
              {DATANAVLINK.links.acceuil.name}
              </NavLink>
              <div className=" cursor-pointer">
                <div
                  className="flex gap-10 items-center"
                  onClick={toogleIsOpenServiceMobil}
                >
                  <p>{DATANAVLINK.links.service.name}</p>{" "}
                  {isOpenServiceMobil ? (
                    <AiOutlineCaretRight />
                  ) : (
                    <AiFillCaretDown />
                  )}
                </div>
                {isOpenServiceMobil ? (
                  <div className="flex flex-col pt-4 gap-4">
                    <SousNavMobil props={toogleIsOpenMenu} />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <NavLink onClick={toogleIsOpenMenu} to={DATANAVLINK.links.realisation.link}>
                 {DATANAVLINK.links.realisation.name}
              </NavLink>
              <NavLink onClick={toogleIsOpenMenu} to={DATANAVLINK.links.agence.link}>
              {DATANAVLINK.links.agence.name}
              </NavLink>
              <NavLink onClick={toogleIsOpenMenu} to={DATANAVLINK.links.contacter.link}>
              {DATANAVLINK.links.contacter.name}
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
