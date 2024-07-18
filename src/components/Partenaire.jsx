import propTypes from 'prop-types'

import { DATAPARTENAIRE } from "../data/Constant";
import Boules from "./Boules";

const Partenaire = ({boule}) => {
  // if (!boule) return null


  return (
    <section className="bg-[#022562]">
      <div className="py-[50px] lg:pb-[100px]">
      {boule?<Boules/>:''}
        <h1 className=" pt-[50px] font-bold text-center text-[22px] lg:text-[32px]">
          {" "}
          {DATAPARTENAIRE.h1}{" "}
        </h1>
        {/* partenaire */}
        <div className="overflow-hidden pt-[100px] pb-[50px] lg:pt-[150px]">
          <div className="flex gap-10 animate-temoignage hover:pause">
            {DATAPARTENAIRE.logo.map((item, index) => {
              return (
                <>
                  <div key={index} className="relative">
                    <img
                      className="max-w-[150px] lg:max-w-[250px]"
                      src={item}
                      alt="logo"
                    />
                  </div>

                  <div key={index} className="relative">
                    <img
                      className="max-w-[150px] lg:max-w-[250px]"
                      src={item}
                      alt="logo"
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

Partenaire.propTypes ={
  prop : propTypes.node ,
}

export default Partenaire;
