// import ScrollToTop from "../components/scrollToTop
import Formulaire from "../../components/Formulaire"
import ScrollToTop from "../../components/scrollToTop";
// import Btn from "../../components/Btn";
import { DATACONTACT } from "../../data/Constant";

const Contacter = () => {
  // const handlerSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;

  //   const element = form.elements;

  //   const nom = element.Nom.Value;
  //   const prenom = element.Prenom.Value;
  //   const email = element.Email.Value;
  //   const entreprise = element.Entreprise.Value;
  //   const telephone = element.Telephone.Value;
  //   const checkbox = element.Checkbox.Value;

  //   const objetForm = {
  //     nom: nom,
  //     prenom: prenom,
  //     email: email,
  //     entreprise: entreprise,
  //     telephone: telephone,
  //     checkbox: checkbox,
  //   };
  //   console.log("form:" + objetForm);

  //   form.reset();
  // };

  return (
      <section className="bg-[#002057]">
        <ScrollToTop/>
        <div className="mx-auto py-[50px]   px-[20px] lg:px-[100px] xl:px-[200pxx] 2xl:px-[300pxx] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
          <div className="lg:flex gap-5">
            {/* left */}
            <div className="lg:w-[50%]">
              <div className="pb-10">
                <h1 className="text-[#4B7BE5] text-[40px] lg:text-[60px] font-bold pb-[15px]">
                  {DATACONTACT.left.h1}
                </h1>
                <p>{DATACONTACT.left.p1}</p>
              </div>
              {/* nos adresses */}
              <div className="pb-5">
                <h3 className="text-[#F56F46] font-bold pb-3">
                  {DATACONTACT.left.coordonnees.h3}
                </h3>
                <p className="pb-2">{DATACONTACT.left.coordonnees.num}</p>
                <p>{DATACONTACT.left.coordonnees.lenkSite}</p>
              </div>
              {/* adress */}
              <div className="pb-5">
                <h3 className="text-[#F56F46] font-bold pb-2">
                  {DATACONTACT.left.adresse.h3}
                </h3>
                <p>{DATACONTACT.left.adresse.rue}</p>
              </div>
            </div>
            {/* formulaire */}
            <div className="lg:w-[50%] text-[#172153]] border-[#172153] mt-10 lg:mt-0 ">
               <Formulaire/>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contacter;
