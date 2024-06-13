
import {DATACONTACT } from "../../data/Constant";


const Formulaire = () => {
    const handlerSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
  
      const element = form.elements;
  
      const nom = element.Nom.Value;
      const prenom = element.Prenom.Value;
      const email = element.Email.Value;
      const entreprise = element.Entreprise.Value;
      const telephone = element.Telephone.Value;
      const checkbox = element.Checkbox.Value;
  
      const objetForm = {
        nom: nom,
        prenom: prenom,
        email: email,
        entreprise: entreprise,
        telephone: telephone,
        checkbox: checkbox,
      };
      console.log("form:" + objetForm);
  
      form.reset();
    };
    return (
      <section className="bg-[#0E1744]">
        <div className="mx-auto py-[50px] lg:py-[100px] lg:pb-[150px] pt-[50px] px-[20px] lg:px-[100pxx] xl:px-[200pxx] 2xl:px-[300pxx] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] xl:max-w-[1140pxx] 2xl:max-w-[1320pxx] 3xl:max-w-[1620pxx]">
          <div className="px-6 lg:flex gap-12 text-white mx-auto sm:max-w-[540pxx] md:max-w-[720pxx] lg:max-w-[960pxx] xl:max-w-[1140pxx] 2xl:max-w-[1320pxx]">
            {/* left */}
            <div className="lg:w-[50%] ">
                <img className="h-[80%] object-cover object-center" src={DATACONTACT.leftImage} alt="image" />
            </div>
            {/* formulaire */}
            <div className="lg:w-[50%] mt-10 lg:mt-0 ">
              <h2 className="font-bold lg:text-[30px]">PARLEZ-NOUS</h2>
              <form
                onSubmit={handlerSubmit}
                className="mx-auto pt-10 pb-8 sm:max-w-[540px] md:max-w-[720pxx] lg:max-w-[960pxx] xl:max-w-[1140pxx] 2xl:max-w-[1320pxx] 3xl:max-w-[1620pxx]"
                action=""
              >
                <input
                  className="mb-6 border-[1px] border-white bg-[#172153]  w-full px-4 py-2"
                  type={DATACONTACT.right.form.inputs.inputNom.type}
                  id={DATACONTACT.right.form.inputs.inputNom.nom}
                  required
                  placeholder={DATACONTACT.right.form.inputs.inputNom.nom}
                />
                <input
                  className="mb-6 border-[1px] border-white bg-[#172153] w-full px-4 py-2"
                  type={DATACONTACT.right.form.inputs.inputPrenom.type}
                  id={DATACONTACT.right.form.inputs.inputPrenom.nom}
                  required
                  placeholder={DATACONTACT.right.form.inputs.inputPrenom.nom}
                />
                <input
                  className="mb-6 border-[1px] border-white bg-[#172153] w-full px-4 py-2"
                  type={DATACONTACT.right.form.inputs.inputEmail.type}
                  id={DATACONTACT.right.form.inputs.inputEmail.nom}
                  placeholder={DATACONTACT.right.form.inputs.inputEmail.nom}
                />
                <input
                  className="mb-6 border-[1px] border-white bg-[#172153] w-full px-4 py-2"
                  type={DATACONTACT.right.form.inputs.inputEntreprise.type}
                  id={DATACONTACT.right.form.inputs.inputEntreprise.nom}
                  placeholder={DATACONTACT.right.form.inputs.inputEntreprise.nom}
                />
                <input
                  className="mb-6 border-[1px] border-white bg-[#172153] w-full px-4 py-2"
                  type={DATACONTACT.right.form.inputs.inputTelephone.type}
                  id={DATACONTACT.right.form.inputs.inputTelephone.nom}
                  placeholder={DATACONTACT.right.form.inputs.inputTelephone.nom}
                />
                <textarea
                  required
                  rows={DATACONTACT.right.form.inputs.inputCheckbox.type}
                  className="mb-2 border-[1px] border-white bg-[#172153] w-full px-4 py-2"
                  type={DATACONTACT.right.form.inputs.inputMessage.nom}
                  id={DATACONTACT.right.form.inputs.inputMessage.nom}
                  placeholder={DATACONTACT.right.form.inputs.inputMessage.nom}
                />
                <input
                  type={DATACONTACT.right.form.inputs.inputCheckbox.type}
                  id={DATACONTACT.right.form.inputs.inputCheckbox.nom}
                />{" "}
                <label
                  className="text-[13px] lg:text-[16px] text-white"
                  htmlFor={DATACONTACT.right.form.inputs.inputlabel.htmlFor}
                >
                  {DATACONTACT.right.form.inputs.inputlabel.text}
                </label>
                <button
                  className="bg-[#F56F46] block px-10 py-2 mt-2 lg:mt-3 rounded-3xl"
                  type={DATACONTACT.right.form.inputs.btn.type}
                >
                  {DATACONTACT.right.form.inputs.btn.text}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Formulaire