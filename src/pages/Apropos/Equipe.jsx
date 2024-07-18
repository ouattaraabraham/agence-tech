import EquipeGp from "../../components/EquipeGp";
import { DATAAPROPOS } from "../../data/Constant"

export default function Equipe() {
  return (
    <section className='bg-[#022562]'>
       <div className='mx-auto px-[20px] text-[14px] lg:text-[16px] py-[50px] lg:py-[100px] sm:max-w-[540px]] md:max-w-[720px] lg:max-w-[800px] xl:max-w-[840px] 2xl:xl:max-w-[1320px]]'>
        <h2 className="text-[#E0E0E0] font-bold text-center py-10 text-[25px] lg:text-[35px]">{DATAAPROPOS.equipe.h2}</h2>
        <div className="pt-5 flex flex-col lg:flex-row lg:gap-10 items-center lg:items-start gap-4">   
              <div >
              <div className="mt-20 mb-10 sm:my-0 sm:order-2 animate-heroAnimation relative overflow-hidden rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] w-[14rem] h-[14rem] max-w-[300px] max-h-[300px] w-[90vw]] h-[90vw]] ">
                <img className="rounded-[60%_40%_30%_70%/60%_30%_70%_40%] w-full h-full h-[200px]] w-[200px]] md:h-[350px]] md:w-[350px]] lg:h-[350px]] lg:w-[450px]] object-cover object-top" src={DATAAPROPOS.equipe.pdg.img} alt="image du pdg" />
              </div>
                <div className="text-center pt-5 text-[16px] lg:text-[17px]">
                  <h2 className="font-semibold text-[#FFF5CC] ">{DATAAPROPOS.equipe.pdg.Name}</h2>
                  <h3 className="pt-3 font-semibold">{DATAAPROPOS.equipe.pdg.Fonction}</h3>
                </div>
              </div>

              <div className="md:w-[75%] lg:pt-10">
                  <div className="pt-5">
                    {DATAAPROPOS.equipe.pdg.p1?<p>{DATAAPROPOS.equipe.pdg.p1}</p>:''}       
                    {DATAAPROPOS.equipe.pdg.p2?<p className='pt-4'>{DATAAPROPOS.equipe.pdg.p2}</p>:''}  
                    {DATAAPROPOS.equipe.pdg.p3?<p className='pt-4'>{DATAAPROPOS.equipe.pdg.p3}</p>:''} 
                    {DATAAPROPOS.equipe.pdg.p4?<p className='pt-4'>{DATAAPROPOS.equipe.pdg.p4}</p>:''}  
                    {DATAAPROPOS.equipe.pdg.p5?<p className='pt-4'>{DATAAPROPOS.equipe.pdg.p5}</p>:''} 
                  </div>

              </div>
        </div>
        <div className="pt-14 lg:pt-20">
          <EquipeGp/>
        </div>
    </div>
 </section>
  )
}