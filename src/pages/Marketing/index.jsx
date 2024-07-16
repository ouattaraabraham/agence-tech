import ScrollToTop from "../../components/scrollToTop";
import Presantation from "../../components/Presantation";
import Contacter from "../../components/Contacter";
import AutreService from "../../components/AutreService";
import ChiffreQuiParle from "./ChiffreQuiParle";
import { DATAMARKETING } from "../../data/Constant";
import Service from "./Service";
const Marketing = () => {
  return (
    <div className="bg-[#002057] pt-[50px]">
      <ScrollToTop />
      <Presantation prop={DATAMARKETING.presantation} />
      <Service/>
      <ChiffreQuiParle />
      <AutreService />
      <Contacter />
    </div>
  );
};

export default Marketing;
