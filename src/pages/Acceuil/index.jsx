import ScrollToTop from "../../components/scrollToTop";
import Realisation from "../../components/Realisation";
import Motivation from "../../components/Motivation"
import Partenaire from "../../components/Partenaire";
import Contacter from "../../components/Contacter";
import Services from "./Services";
import Header from "./Header";
import Temoin from "../../components/Temoin";

const   Acceuil = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Services/>
      <Partenaire boule={true} />
      <Realisation />
      <Motivation />
      <Temoin/>
      <Contacter />
    </div>
  );
};

export default Acceuil;
