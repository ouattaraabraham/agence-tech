import { NavLink } from "react-router-dom";
import propTypes from 'prop-types'
import { logo } from "../assets/icon";

function Logo ({style}){
    return (
        <div >
           <NavLink onClick={()=>window.scrollTo(0, 0)} to="/agence-tech/">
             <img className={`${style?style:"w-[130px] lg:w-[160px]"}`} src={logo} alt="logo" />
           </NavLink>
        </div>
    );
}
Logo.propTypes ={
  style : propTypes.node ,
}
export default Logo;