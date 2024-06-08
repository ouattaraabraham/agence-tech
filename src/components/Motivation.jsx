// import {
//   ScrollContainer,
//   ScrollPage,
//   Animator,
//   StickyOut,
//   Move,
//   MoveOut,
//   StickyIn,
//   FadeIn,
//   ZoomIn,
//   MediumText,
//   batch,
//   Fade,
//   Sticky,
//   MoveIn,
// } from "react-scroll-motion";

import { useTransform, motion, useScroll } from "framer-motion"

import { useRef } from "react";


function Motivation() {
  const refMobil = useRef(null);
  const refLg = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "end end"]
  // })

  // const ref= useRef()
  // const valueScrollY = window.scrollY

  // window.addEventListener("scroll", function () {
  //   refMobil.current.style.top = 0;
  //   refMobil.current.style.left = 0;
  //   let fuseCurentMobil = 0;
  //   refLg.current.style.left = 50+'px';
  //   let fuseCurentLg = 0;

  //   if (window.pageYOffset > 2500 && window.pageYOffset < 3240){
  //     refMobil.current.style.display='block'
  //     fuseCurentMobil = window.pageYOffset - 2500 + "px";
  //   refMobil.current.style.left = fuseCurentMobil;
  //   }
  //   else{refMobil.current.style.display='none'}
  //   if (window.pageYOffset > 1900 && window.pageYOffset < 3240){
  //     refLg.current.style.display='block'
  //   fuseCurentLg = window.pageYOffset - 1900 + "px";
  //   refLg.current.style.bottom = fuseCurentLg;
  //   }
  //   else{refMobil.current.style.display='none'}
  // });

  // useEffect(()=>{
  //   ref.current.style.position='absolute'
  //   ref.current.style.left=50+'px'
  //   console.log("valueScrollY :"+valueScrollY);

  // },[valueScrollY])

  // const { scrollYProgress } = useScroll()

  // const trans = useTransform(
  //   scrollYProgress,
  //   [0, 50],
  //   [0, 50],
  //   // { clamp: false }
  // )



  const { scrollYProgress,scrollY} = useScroll()

  const y = useTransform(
    scrollYProgress,
    [0,1,2,3,4],
    [0, 100,200,300,400],
    { clamp: false }
  )


  // const vole = useTransform(
  //   scrollY,
  //   [0, 100],
  //   [0, 360],
  //   { clamp: false }
  // )



  return (
    <section className="">
      {/* mobil */}
      <div className="relative lg:hidden mx-auto py-[100px] flex flex-col items-center justify-center lg:flex-row lg:gap-10 pt-[100px] px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
        <div className="absolute top-0 right-5">
          <img
            className="w-[100px]"
            src="../src/assets/icon/etoiles2.png"
            alt="fuse"
          />
        </div>
        {/* fuse */}
        <div ref={refMobil} className="absolute ">
          <img
            className="w-[100px] "
            src="../src/assets/image/fuse2.svg"
            alt="fuse"
          />
        </div>
        <div>
          <p
            className={`relative flex font-semibold pt-[30px] text-[25px] lg:text-[40px] max-w-2xl before:contents  before:content-quote632 lg:before:content-quote664 after:contents after:content-quote932 lg:after:content-quote964`}
          >
            {""} Faites décoller votre entreprise et brillé au milieu des
            étoiles de ce monde {""}
          </p>
        </div>
      </div>
      {/* lg */}
      <div className="relative hidden  mx-auto  py-[100px] lg:flex flex-col items-center justify-center lg:flex-row lg:gap-10 pt-[100px] px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140pxx] 2xl:max-w-[1320pxx] 3xl:max-w-[1620pxx]">
        {/* left */}
        <div className=" w-[25%]]">
          {/* etoiles */}
          <div className="absolute top-0 left-[100px]">
            <img
              className=""
              src="../src/assets/icon/etoiles2.png"
              alt="fuse"
            />
          </div>
          <motion.div style={{y}}  ref={refLg} className="absolute">
            <img
              className="w-[200px] rotate-[-44deg]"
              src="../src/assets/image/fuse2.svg"
              alt="fuse"
            />
          </motion.div>
        </div>

        {/* right */}
        <div className="ml-32">
          <p
            className={`relative flex font-semibold ml-[100px] pt-[30px] text-[25px] lg:text-[40px] max-w-2xl before:contents  before:content-quote632 lg:before:content-quote664 after:contents after:content-quote932 lg:after:content-quote964`}
          >
            {""} Faites décoller votre entreprise et brillé au milieu des
            étoiles de ce monde {""}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Motivation;

// <section className="">
//   <div className="mx-auto py-[100px] flex flex-col items-center justify-center lg:flex-row lg:gap-10 pt-[100px] px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
//   <div ref={ref}>
//    <img className="w-[50%] md:w-[25%]" src="../src/assets/image/fuse1.svg" alt="fuse" />
//   </div>
//     <div>
//         <p  className={`relative flex font-semibold pt-[30px] text-[25px] lg:text-[40px] max-w-2xl before:contents  before:content-quote632 lg:before:content-quote664 after:contents after:content-quote932 lg:after:content-quote964`}>
//         {""} Faites décoller votre entreprise et brillé au milieu des étoiles de ce monde {""}
//         </p>
//     </div>
//   </div>

// </section>
