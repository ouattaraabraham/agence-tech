import ScrollToTop from "../../components/scrollToTop";
import Presantation from "../../components/Presantation";
import Contacter from "../../components/Contacter";
import AutreService from "../../components/AutreService";
import ChiffreQuiParle from "./ChiffreQuiParle";
import ServiceMarketing from "./ServiceMarketing";
import { DATAPRESANTATION } from "../../data/Constant";

const Marketing = () => {
  return (
    <div className="bg-[#172153]">
      <ScrollToTop />
      <Presantation prop={DATAPRESANTATION.marketing} />
      <ServiceMarketing />
      <ChiffreQuiParle />
      <AutreService />
      <Contacter />
    </div>
  );
};

export default Marketing;
