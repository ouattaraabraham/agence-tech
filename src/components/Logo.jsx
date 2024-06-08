import { NavLink } from "react-router-dom";
import { logo } from "../assets/icon";
window.scrollTo(0, 0)

const Logo = () => {
    return (
        <div className=" w-[100px] ">
           <NavLink onClick={()=>window.scrollTo(0, 0)} to="/">
             <img src={logo} alt="logo" />
           </NavLink>
        </div>
    );
};

export default Logo;