
import { DATAMARKETING } from "../../data/Constant";

const ServiceMarketing = () => {
  return (
    <section className="bg-[#f0f8ff] text-[#172153]">
      <div className="py-[100px] mx-auto px-[20px] max-w-[560px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
        <div className="lg:flex justify-between gap-10">
          <div className=" rounded-2xl pb-10 lg:pb-0 lg:w-[50%]">
            <img
              className="w-full h-full object-cover rounded-2xl "
              src={DATAMARKETING.serviceMarketing.img}
              alt="image-conceteur"
            />
          </div>
          <div className="lg:w-[50%]">
            <h2 className="pb-8 font-bold text-[20px] lg:text-[25px]">{DATAMARKETING.serviceMarketing.h2}</h2>
            {
              DATAMARKETING.serviceMarketing.p.map((item,index)=>{
                    return(
                        <p key={index} className="pb-5">{item}</p>

                    )
                })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMarketing;
