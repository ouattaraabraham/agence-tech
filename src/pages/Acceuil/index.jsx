import ScrollToTop from "../../components/scrollToTop";
import Realisation from "../../components/Realisation";
import Motivation from "../../components/Motivation"
import Partenaire from "../../components/Partenaire";
import Contacter from "../../components/Contacter";
import Formulaire from "./Formulaire";
import Services from "./Services";
import Header from "./Header";
import Temoin from "../../components/Temoin";

const   Acceuil = () => {
  return (
    <div className="">
      <ScrollToTop />
      <Header />
      {/* body */}
      <Services/>
      {/* <Boules bgColor={bgColor} /> */}
      <Partenaire boule={true} />
      <Realisation />
      <Motivation />
      <Temoin/>
      <Formulaire />
      <Contacter />
    </div>
  );
};

export default Acceuil;
