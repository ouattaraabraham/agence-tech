import { NavLink } from 'react-router-dom'
import { DATAAPROPOS } from '../../data/Constant'
export default function DifferenrService() {
  return (
    <section className='bg-[#002057] '>
      <div className=" text-slate-300 mx-auto py-[50px] lg:py-[100px]  px-[20px] lg:px-[100px]] xl:px-[200px]] 2xl:px-[300px]] sm:max-w-[540px] md:max-w-[620px] lg:max-w-[960px] xl:max-w-[1040px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
          <h2 className='text-center text-[#E0E0E0] font-bold text-[20px] lg:text-[45px]'>
            NOTRE EXPERTISE 
          </h2>
          
          <div className="pt-2 lg:pt-20 lg:flex items-center gap-5">

        {
          DATAAPROPOS.service.map(item=>

            <div key={item.id} className='pt-12'>
                <div className='text-[#87AAF8]] text-[#FFF5CC] flex gap-5 items-center'>
                   <h2 className='font-semibold text-[18px] lg:text-[23px]'>{item.name}</h2>
                   <img className='w-[35px]' src={item.icon} alt="icon" />
                </div>
                <p className='pt-5'>
                  {item.p}
                </p>
                
                    <button className='font-semibold pt-5 text-[#F56F46]'>
                      <NavLink  to={item.link}>
                       {item.btn} +
                      </NavLink>
                    </button>
            </div>
            )
        }
            
         
        </div>
      </div>
 </section>
)
  
}
