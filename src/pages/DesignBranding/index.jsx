import ScrollToTop from "../../components/scrollToTop";
import AutreService from "../../components/AutreService";
import Contacter from "../../components/Contacter";
import Presantation from "../../components/Presantation";
import Makette from "./Makette";
import {DATABRANDING} from "../../data/Constant";
import Realisation from "../../components/Realisation";
// import Boules from "../../components/Boules";
import Service from "./Service"
// const bgColor = "bg-[#f0f8ff]"
const DesignBranding = () => {
    return (
        <div className="bg-[#002057] pt-[50px]">
            <ScrollToTop/>
            <Presantation prop={DATABRANDING.presantation}/>
            <Makette/>  
            <Service/>  
            {/* <Boules bgColor={bgColor} /> */}
            <Realisation/>
            {/* <Motivation/> */}
            <AutreService/>
            <Contacter/>   
        </div>
    );
};

export default DesignBranding;