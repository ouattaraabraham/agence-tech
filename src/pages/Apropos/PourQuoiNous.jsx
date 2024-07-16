import { DATAAPROPOS } from "../../data/Constant"
export default function PourQuoiNous() {
  return (
    <section className='bg-[#01225c]'>
       <div className='mx-auto px-[20px] py-[50px] lg:py-[100px] lg:flex items-center justify-between sm:max-w-[540px]] md:max-w-[720px] lg:max-w-[800px] xl:max-w-[840px] 2xl:xl:max-w-[1320px]]'>
        <div className="lg:flex items-center gap-10">
                <div className="lg:w-[75%]">
                    <h1 className="text-[#E0E0E0] font-semibold text-[25px] lg:text-[35px]">{DATAAPROPOS.pourQuoiNous.h1}</h1>
                    <div className="pt-5">
                      {DATAAPROPOS.pourQuoiNous.p1?<p>{DATAAPROPOS.pourQuoiNous.p1}</p>:''}       
                      {DATAAPROPOS.pourQuoiNous.p2?<p className='pt-4'>{DATAAPROPOS.pourQuoiNous.p2}</p>:''}  
                      {DATAAPROPOS.pourQuoiNous.p3?<p className='pt-4'>{DATAAPROPOS.pourQuoiNous.p3}</p>:''} 
                      {DATAAPROPOS.pourQuoiNous.p4?<p className='pt-4'>{DATAAPROPOS.pourQuoiNous.p4}</p>:''}  
                      {DATAAPROPOS.pourQuoiNous.p5?<p className='pt-4'>{DATAAPROPOS.pourQuoiNous.p5}</p>:''} 
                    </div>

                </div>

                <div className="lg:w-[25%] mt-5">
                  <div className="flex justify-center">
                  <img  src={DATAAPROPOS.pourQuoiNous.logo} alt="logo Astra One" />
                  </div>
                </div>
            </div>
       </div>
    </section>
  )
}
