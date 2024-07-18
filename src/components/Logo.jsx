import { NavLink } from "react-router-dom";
import { logo } from "../assets/icon";

const Logo = () => {
    return (
        <div >
           <NavLink onClick={()=>window.scrollTo(0, 0)} to="/">
             <img className="w-[130px] lg:w-[150px]" src={logo} alt="logo" />
           </NavLink>
        </div>
    );
};

export default Logo;