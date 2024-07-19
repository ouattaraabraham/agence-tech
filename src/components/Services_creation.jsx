
import propTypes from 'prop-types'
import { TbPointFilled } from "react-icons/tb";
import Boules from "./Boules";

const ServiceCreation = ({prop})=> {
    if (!prop) return null

    return ( 
        <section className="bg-[#01225c]">
          <div className="lg:flex flex-col py-[50px] lg:py-[100px] mx-auto px-[20px] lg:px-[2rem] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px]] lg:max-w-[1320px] 3xl:max-w-[1620px]"> 
            <div>
              <Boules/>
              <h2 className="font-bold text-[22px] lg:text-[30px] text-[#E0E0E0] text-center py-10">NOS SERVICES CREATION</h2>
            </div>
            <div >
                <div className="mx-auto max-w-sm  md:pt-10 grid md:grid-cols-2 md:max-w-fit lg:grid-cols-3 gap-5 lg:gap-10 justify-center">

                {
                    prop.map((items)=>

                    <div key={items.id} className="bg-[#022562] text-slate-300 border-2 w-fit rounded-xl flex flex-col items-center px-3 xl:px-8 py-10">
                        <img className="w-[50px]" src={items.icon} alt={items.name} />
                        <h2 className="font-bold text-nowrap text-[20px] pt-6 pb-2 text-[#FFF5CC]">{items.name}</h2>
                        <div >
                        {
                            items.service.map((item,index)=>
                                <div key={index} className=" pt-2">
                                    <TbPointFilled className="inline"/>
                                    <span className="pl-2">{item}</span>
                                </div>
                            )
                        }
                                
                        </div>
                    </div>
                    
                    )
                }
                </div>
            </div>
          </div>
        </section>
     );
}

ServiceCreation.propTypes ={
    prop : propTypes.node ,
}
 
export default ServiceCreation;