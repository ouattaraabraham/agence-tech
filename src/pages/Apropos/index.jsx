import Contacter from "../../components/Contacter"
// import Lequipe from "./Lequipe"
import Presantation from "./Presantation"
import PourQuoiNous from "./PourQuoiNous"
import Equipe from "./Equipe"
import DifferenrService from "./DifferenrService"
import ScrollToTop from "../../components/scrollToTop"
const Apropos=()=>{
    return (

      <div className="bg-[#002057] pt-[50px]">
        <ScrollToTop/>
        <Presantation/>
        <PourQuoiNous/>
        <DifferenrService/>
        <Equipe/>
        {/* <Lequipe/> */}
        <Contacter/>
      </div>
      )
  }
  
  export default Apropos