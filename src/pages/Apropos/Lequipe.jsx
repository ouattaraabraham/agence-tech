import { useRef } from "react";

import EquipeGp from "../../components/EquipeGp";
const Lequipe = () => {
  const refPageMove = useRef(null);

  window.addEventListener("scroll", function () {
    // console.log("position :" + window.pageYOffset);

    if(window.innerWidth<770){
        console.log("widht<7070 :");
      if (window.pageYOffset > 3900) {
        refPageMove.current.style.top = -300 + "px";
      } else if (window.pageYOffset < 3900) {
  
        refPageMove.current.style.top = 0 + "px";
      }
    }
    else if (window.innerWidth>770 && window.innerWidth<1024){
       console.log("1024>widht>770 :");
      if (window.pageYOffset > 2900) {
        refPageMove.current.style.top = -400 + "px";
      } else if (window.pageYOffset < 2900) {
        refPageMove.current.style.top = 0 + "px";
      }
    }
    else if (window.innerWidth>1024 ){
      console.log("widht>10240 :"+ window.pageYOffset);
      if (window.pageYOffset > 2900) {
        refPageMove.current.style.top = -530 + "px";
      } else if (window.pageYOffset < 2900) {
        refPageMove.current.style.top = 0 + "px";
      }
    }
  });
  return (
    <section className="bg-[radial-gradient(black,transparent)]">
      <div className="pt-[100px] pb-[100px] ">
        
        <div className="">
          <h2 className="pb--16 font-bold text-[25px] lg:text-[30px] text-center">
            Notre equipe
          </h2>
          <div className=" relative overflow-hidden h-[850px] lg:h-[950px]">
            <div
              ref={refPageMove}
              className="relative ease-in duration-500 pt-[100px] pb-[100px]  mx-auto  px-[20px] md:px-[50px]  sm:max-w-[650pxx] md:max-w-[650pxx] md:md:px-[100px] lg:max-w-[1060px] "
            >
              {/* equipier */}
              <div className="flex  mt-10 md:mt-5">
                <div className="w-fit flex flex-col justify-center">
                  <div className="relative">
                    <div className="z-20 relative overflow-hidden flex justify-center items-end bg-[#1E76DC] w-[140px] md:w-[170px] lg:md:w-[230px] h-[140px] md:h-[170px] lg:h-[230px] rounded-full">
                      <img
                        className="absolute h-[130px] md:h-[150px] lg:h-[220px] objet-fit "
                        src="../src/assets/image/ab.png"
                        alt=""
                      />
                    </div>
                    {/* boule ronde derriere */}
                    <div className="absolute top-[-30px] bg-white w-[130px] md:w-[150px] lg:w-[210px] h-[130px] md:h-[150px] lg:h-[210px] rounded-full"></div>
                  </div>
                  <div className="flex flex-col justify-center text-center">
                    <h3 className="font-bold">Abraham</h3>
                    <h4>Fontateur</h4>
                  </div>
                </div>
                <p className="ml-4 text-[#ff8f8f] lg:text-[20px] ">
                  ... Quand les experts s’aligne le resultat devient magic
                </p>
              </div>

              {/* equipier */}
              <div className="flex flex-row-reverse mt-14 md:mt-0">
                <div className="w-fit flex flex-col justify-center">
                  <div className="relative">
                    <div className="z-20 relative overflow-hidden flex justify-center items-end bg-[#1E76DC] w-[140px] md:w-[170px] lg:w-[230px] h-[140px] md:h-[170px] lg:h-[230px] rounded-full">
                      <img
                        className="absolute h-[130px] md:h-[150px] lg:h-[220px] objet-fit "
                        src="../src/assets/image/ab.png"
                        alt=""
                      />
                    </div>
                    {/* boule ronde derriere */}
                    <div className="absolute top-[-30px] bg-white w-[120px] md:w-[150px] lg:w-[210px] h-[120px] md:h-[150px] lg:h-[210px] rounded-full"></div>
                  </div>
                  <div className="flex flex-col justify-center text-center">
                    <h3 className="font-bold">Marc</h3>
                    <h4>expert gestion de projet</h4>
                  </div>
                </div>
                <p className="mr-4 text-[#ff8f8f] text-end lg:text-[20px]">
                  Quand les experts s’aligne le resultat devient magic ...
                </p>
              </div>
              {/* equipe gp */}
              <div className="relative flex-row-reverse mt-14 md:mt-16">
                <EquipeGp />
                <p className="absolute lg:text-[20px] top-[-40px] sm:relativee sm:top-00  text-[#ff8f8f]">
                  Tous ensamble pour le travail ...
                </p>
              </div>
              {/* surplus */}
              <div className="flex  mt-14 md:mt-16">
                <img
              className="object-cover !m-0 !p-0 object-top rounded-full h-[70px] sm:h-[100px] md:h-[130px] w-[70px] sm:w-[100px] md:w-[130px] border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
                  src="../src/assets/image/equipe.jpg"
                  alt=""
                />
                <div className="ml-14 mt-5 md:mt-10 relative w-[200px] sm:w-[260px] lg:w-[400px] after:absolute after:border-t-[2rem] sm:after:border-t-[3rem] after:border-t-[#ff8f8f]  after:border-l-transparent after:border-l-[2rem] sm:after:border-l-[3rem] after:top-0 after:-left-8 sm:after:-left-12 after:content-[''] ">
                  <img src="../src/assets/image/equipe.jpg" alt="" />
                </div>
              </div>
                {/* laste div */}
              <div className="flex flex-row-reverse  mt-14 md:mt-16">
                <img
              className="object-cover !m-0 !p-0 object-top rounded-full h-[70px] sm:h-[100px] md:h-[130px] w-[70px] sm:w-[100px] md:w-[130px] border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
                  src="../src/assets/image/equipe.jpg"
                  alt=""
                />
                <span className="ml-14 mt-5">
                    dd :smiley: :+1: :1st_place_medal:
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lequipe;
