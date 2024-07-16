
import { DATAMARKETING } from "../../data/Constant";

export default function ServiceMarketing() {
  return (
    <section className="bg-[#F9F9F9]">
        <div className="text-slate-800 py-[100px]  justify-between mx-auto px-[.75rem] sm:max-w-[540px] md:max-w-[960px] lg:max-w-[960px]] xl:max-w-[1140px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
            <h2 className="mx-auto text-center font-bold text-[20px] lg:text-[35px] max-w-[720px] ">{DATAMARKETING.services.h2}</h2>
            <div className="pt-10 md:pt-20 md:flex gap-8 lg:gap-10">
                {DATAMARKETING.services.service.map(item=>
                <div className="pt-10 pb-8 md:pb-10 font-semibold flex flex-col items-center relative after:absolute after:content-[''] after:w-full after:h-[3px] after:bottom-0 after:bg-[#F56F46]" key={item.id}>
                    <div >
                    {/* <div>{item.img}</div> */}
                      <img className={`rounded-full ${item.id==2?"max-w-[130px] lg:max-w-[170px]":"max-w-[100px] lg:max-w-[150px]"} `} src={item.img} alt="" />
                    </div>
                        <h3 className="pt-5 md:pt-8 font-bold lg:text-[20px]">{item.h3}</h3>
                         <p className="pt-6 md:pt-9 px-2 text-center">{item.p}</p>
                </div>
                )}
            </div>
        </div>
    </section>
  )
}
