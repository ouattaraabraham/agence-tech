const NotreMission = () => {
  return (
    <div>
      <div className=" pb-[100px] flex flex-col items-center justify-between mx-auto px-[1rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1320px] xl:max-w-[1140pxx] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
      <h1 className=" text-[20px] lg:text-[35px]">Notre mission</h1>
        <div className="mx-auto">
          {/* mobile */}
          <div className="relative lg:hidden border-2 px-4 py-4 before:content-[''] before:block before:w-[40px] before:h-[40px] before:absolute before:-top-2 before:-left-2 before:bg-[#172153] , after:content-[''] after:block after:w-[40px] after:h-[40px] after:absolute after:-bottom-2 after:-right-2 after:bg-[#172153]">
            <p
              className={`relative flex font-semibold text-[25px] lg:text-[40px] max-w-2xl before:contents  before:content-quote632 lg:before:content-quote664 after:contents after:content-quote932 lg:after:content-quote964`}
            >
              {""} Faites décoller votre entreprise et brillé au milieu des
              étoiles de ce monde {""}
            </p>
          </div>
          {/* lg */}
          <div  className="hidden lg:block relative border-2 px-8 py-8 before:content-[''] before:block before:w-[60px] before:h-[60px] before:absolute before:-top-2 before:-left-2 before:bg-[#172153] , after:content-[''] after:block after:w-[40px] after:h-[40px] after:absolute after:-bottom-2 after:-right-2 after:bg-[#172153]">
            <p
              className={`relative flex font-semibold text-[25px] lg:text-[35px] max-w-2xl before:contents  before:content-quote632 lg:before:content-quote664 after:contents after:content-quote932 lg:after:content-quote964`}
            >
              {""} Allier la créativité et l’expertise technique pour accompagner nos clients vers le succès. {""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotreMission;
