import ScrollToTop from "../../components/scrollToTop";
import Presantation from "../../components/Presantation";
import ServiceCreation from "../../components/Services_creation";
// import Motivation from "../../components/Motivation";
import AutreService from "../../components/AutreService";
import Contacter from "../../components/Contacter";
import Chemat from "./Chemat";
import {DATAWEB} from "../../data/Constant";
import Realisation from "../../components/Realisation";


const WebSite = () => {
  return (
    <div className="bg-[#002057] pt-[50px]">
      <ScrollToTop />
      <Presantation prop={DATAWEB.presantation} />
      <ServiceCreation prop={DATAWEB.serviceCre} />
      <Realisation/>
      {/* <Motivation /> */}
      <Chemat />
      <AutreService />
      <Contacter />
    </div>
  );
};

export default WebSite;
