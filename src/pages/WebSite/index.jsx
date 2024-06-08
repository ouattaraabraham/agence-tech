import ScrollToTop from "../../components/scrollToTop";
import Presantation from "../../components/Presantation";
import ServiceCreation from "../../components/Services_creation";
// import Motivation from "../../components/Motivation";
import AutreService from "../../components/AutreService";
import Contacter from "../../components/Contacter";
import Chemat from "./Chemat";
import {
  DATASERVICECREATION,
  DATAPRESANTATION,
} from "../../data/Constant";
import Realisation from "../../components/Realisation";


const WebSite = () => {
  return (
    <div className="bg-[#172153]">
      <ScrollToTop />
      <Presantation prop={DATAPRESANTATION.siteWeb} />
      <ServiceCreation prop={DATASERVICECREATION.siteWeb} />
      <Realisation/>
      {/* <Motivation /> */}
      <Chemat />
      <AutreService />
      <Contacter />
    </div>
  );
};

export default WebSite;
