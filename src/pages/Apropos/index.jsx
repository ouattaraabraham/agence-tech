// import AutreService from "../../components/AutreService"
import Contacter from "../../components/Contacter"
import Services from "../Acceuil/Services"
// import Partenaire from "../../components/Partenaire"
// import TemoignageScroll from "../../components/TemoignageScroll"
import Lequipe from "./Lequipe"
import Temoin from "../../components/Temoin"
import Presantation from "./Presantation"
// import InfiniteMovingCards from "../../components/ui/infinite-moving-cards"
const Apropos=()=>{
    return (

      <div>
        <Presantation/>
        <Services/>
        {/* <Partenaire/> */}
        <Temoin/>
        {/* <TemoignageScroll/> */}
        <Lequipe/>
        {/* <InfiniteMovingCards/> */}
        {/* <AutreService/> */}
        <Contacter/>
      </div>
      )
  }
  
  export default Apropos