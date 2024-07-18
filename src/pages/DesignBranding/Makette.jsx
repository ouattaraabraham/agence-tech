import {DATABRANDING } from "../../data/Constant";
import { ifone } from "../../assets/image";
const Makette = () => {
  return (
    <section className="bg-[#f0f8ff]">
      <div className=" py-[50px] lg:py-[100px] mx-auto px-[20px] max-w-[500px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
        <div className="lg:flex justify-between items-center">
          <div className="mb-24 lg:mb-0 lg:w-[45%] text-[20px] lg:text-[24px]">
            {DATABRANDING.markette.txt.map((item) => {
              return (
                <div key={item.id} className="relative text-black mb-8">
                  <div
                    key={item.id}
                    className="pb-2 px-1 text-slate-800 font-bold flex justify-between"
                  >
                    <span>{item.span1}</span>
                    <span>{item.span2}</span>
                  </div>
                  <div className="absolute w-full h-[5px] bg-[#F56F46]"></div>
                </div>
              );
            })}
          </div>
          <img
            className="m-auto lg:m-0 w-[80%] lg:w-[40%]"
            src={ifone}
            alt={DATABRANDING.markette.img.name}
          />
        </div>
      </div>
    </section>
  );
};

export default Makette;
