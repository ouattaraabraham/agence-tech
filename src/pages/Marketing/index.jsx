import ScrollToTop from "../../components/scrollToTop";
import Presantation from "../../components/Presantation";
import Contacter from "../../components/Contacter";
import AutreService from "../../components/AutreService";
import ChiffreQuiParle from "./ChiffreQuiParle";
import { DATAMARKETING } from "../../data/Constant";
import ServiceMarketing from "./ServiceMarketing";
const Marketing = () => {
  return (
    <div className="bg-[#002057] pt-[50px]">
      <ScrollToTop />
      <Presantation prop={DATAMARKETING.presantation} />
      <ServiceMarketing/>
      <ChiffreQuiParle />
      <AutreService />
      <Contacter />
    </div>
  );
};

export default Marketing;
