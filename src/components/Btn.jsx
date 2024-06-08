import { NavLink } from "react-router-dom";
import { DATAACCEUIL } from "../data/Constant";
const Btn = () => {
    return (
        <>
            <NavLink className="text-[18px] bg-[#F56F46] px-[25px] lg:px-[40px] py-[10px] rounded-2xl">
            {DATAACCEUIL.header.left.btn.txt}
            </NavLink>
        </>
    );
};

export default Btn;