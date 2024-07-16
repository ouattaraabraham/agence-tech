import ScrollToTop from "../../components/scrollToTop";
import AutreService from "../../components/AutreService";
import Contacter from "../../components/Contacter";
// import Motivation from "../../components/Motivation";
import Presantation from "../../components/Presantation";
// import ServiceCreation from "../../components/Services_creation";
import ServiceMarketing from "../Marketing/ServiceMarketing"
import Makette from "./Makette";

import {DATABRANDING} from "../../data/Constant";
import Realisation from "../../components/Realisation";
// import Boules from "../../components/Boules";

// const bgColor = "bg-[#f0f8ff]"
const DesignBranding = () => {
    return (
        <div className="bg-[#002057] pt-[50px]">
            <ScrollToTop/>
            <Presantation prop={DATABRANDING.presantation}/>
            <Makette/>    
            {/* <Boules bgColor={bgColor} /> */}
            <ServiceMarketing/>
            {/* <ServiceCreation prop={DATABRANDING.serviceCre}/>    */}
            <Realisation/>
            {/* <Motivation/> */}
            <AutreService/>
            <Contacter/>   
        </div>
    );
};

export default DesignBranding;