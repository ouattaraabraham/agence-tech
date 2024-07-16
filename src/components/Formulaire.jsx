
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Btn from "./Btn";
import { DATACONTACT } from "../data/Constant";

const Formulaire = () => {
  const form= useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3ew1wud', 'template_tv6c6ck', form.current, {
        publicKey: '2lP3y0LaUMhc28JGb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };


  
  return (

    <form
    ref={form}
    onSubmit={sendEmail}
    className="mx-auto px-6 pt-10 pb-8 sm:max-w-[540px] md:max-w-[720pxx] lg:max-w-[960pxx] xl:max-w-[1140pxx] 2xl:max-w-[1320pxx] 3xl:max-w-[1620pxx]"  >
    <input
      className="mb-6 text-white border-white border-[1px] bg-[#01225c] w-full px-4 py-2"
      type={DATACONTACT.right.form.inputs.prenom.type}
      placeholder={DATACONTACT.right.form.inputs.prenom.placeholder}
      name={DATACONTACT.right.form.inputs.prenom.name}
      required
    />
    <input
      className="mb-6 text-white border-[1px] bg-[#01225c] w-full px-4 py-2"
      type={DATACONTACT.right.form.inputs.nom.type}
      placeholder={DATACONTACT.right.form.inputs.nom.placeholder}
      name={DATACONTACT.right.form.inputs.nom.name}


      required
    />
    <input
      className="mb-6 border-[1px] bg-[#01225c] w-full px-4 py-2"
      type={DATACONTACT.right.form.inputs.email.type}
      placeholder={DATACONTACT.right.form.inputs.email.placeholder}
      name={DATACONTACT.right.form.inputs.email.name}

      required
    />
    <input
      className="mb-6 border-[1px] bg-[#01225c] w-full px-4 py-2"
      type={DATACONTACT.right.form.inputs.entreprise.type}
      placeholder={DATACONTACT.right.form.inputs.entreprise.placeholder}
      name={DATACONTACT.right.form.inputs.entreprise.name}

    />
    <input
      className="mb-6 border-[1px] bg-[#01225c] w-full px-4 py-2"
      type={DATACONTACT.right.form.inputs.telephone.type}
      placeholder={DATACONTACT.right.form.inputs.telephone.placeholder}
      name={DATACONTACT.right.form.inputs.telephone.placeholder}

    />
    <textarea
      rows={DATACONTACT.right.form.inputs.checkbox.type}
      className="mb-2 text-white border-[1px] bg-[#01225c] w-full px-4 py-2"
      type={DATACONTACT.right.form.inputs.message.type}
      placeholder={DATACONTACT.right.form.inputs.message.placeholder}
      name={DATACONTACT.right.form.inputs.message.name}
      required
    />
    <input
      type={DATACONTACT.right.form.inputs.checkbox.type}
      id={DATACONTACT.right.form.inputs.checkbox.placeholder}
      name={DATACONTACT.right.form.inputs.checkbox.name}

    />{" "}
    <label
      className="text-white text-[13px] lg:text-[16px]"
      htmlFor={DATACONTACT.right.form.inputs.label.htmlFor}
    >
      {DATACONTACT.right.form.inputs.label.text}
    </label>
     <Btn txt={DATACONTACT.right.form.inputs.btn.text} type={true} top={40}/>
  </form>


    // <form ref={form} onSubmit={sendEmail}
    
    //  className="flex flex-col gap-4">
    //    <input type="text"
    //   placeholder="Full Name"
    //   name="user_name" required />

    //   <input type="email"
    //         placeholder="email"
    //         name="use_email" required />
    //   <input type="text"
    //   placeholder="subject"
    //   name="subject" required />
    //   <textarea name="message" 
    //   cols="30" rows="10"></textarea>
    //   <button type="submit">send message</button>

    // </form>
  );
};

export default Formulaire;
