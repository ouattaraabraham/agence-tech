import ScrollToTop from "../../components/scrollToTop";
import AutreService from "../../components/AutreService";
import Contacter from "../../components/Contacter";
// import Motivation from "../../components/Motivation";
import Presantation from "../../components/Presantation";
import ServiceCreation from "../../components/Services_creation";
import Makette from "./Makette";

import {
    DATASERVICECREATION,
    DATAPRESANTATION,
  } from "../../data/Constant";
import Realisation from "../../components/Realisation";

const DesignBranding = () => {
    return (
        <div className="bg-[#172153]">
            <ScrollToTop/>
            <Presantation prop={DATAPRESANTATION.branding}/>
            <Makette/>    
            <ServiceCreation prop={DATASERVICECREATION.branding}/>   
            <Realisation/>
            {/* <Motivation/> */}
            <AutreService/>
            <Contacter/>   
        </div>
    );
};

export default DesignBranding;