import Contacter from "../../components/Contacter"
import Services from "../Acceuil/Services"
import Partenaire from "../../components/Partenaire"
import Lequipe from "./Lequipe"
import Temoin from "../../components/Temoin"
import Presantation from "./Presantation"
import NotreMission from "./NotreMission"
const Apropos=()=>{
    return (

      <div>
        <Presantation/>
        <NotreMission/>
        <Services/>
        {/* <Partenaire/> */}
        <Temoin />
        <Partenaire boule={true} />
        {/* <TemoignageScroll/> */}
        <Lequipe/>
        {/* <InfiniteMovingCards/> */}
        {/* <AutreService/> */}
        <Contacter/>
      </div>
      )
  }
  
  export default Apropos