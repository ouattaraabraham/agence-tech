import Boules from "../../components/Boules";
import { DATAMARKETING } from "../../data/Constant";
const ChiffreQuiParle = () => {
  const {chiffreQuiParle}= DATAMARKETING
  return (
    <section className="bg-[#022562]">
      <div className="mx-auto flex flex-col items-center pt-[100px] px-[.75rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320pxx] 3xl:max-w-[1620pxx]">
        <Boules/>
        <h3 className="font-semibold pt-[50px] pb-6 text-center text-[14px] lg:text-[18px]">
          {chiffreQuiParle.h3}
        </h3>
        <h2 className="font-semibold pb-10 lg:pb-20 text-center text-[25px] lg:text-[40px]">
          {chiffreQuiParle.h2}
        </h2>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {chiffreQuiParle.chiffre.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[33.33%] flex flex-col items-center pb-7"
              >
                <h3 className=" text-[#F56F46] font-semibold text-[30px] lg:text-[55px]">
                  {item.h3}
                </h3>
                <p className="text-[18px] text-center max-w-[240px]">
                  {" "}
                  {item.p}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChiffreQuiParle;
