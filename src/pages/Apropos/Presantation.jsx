// import PointFort from "./PointFort";
import {DATAAPROPOS} from "../../data/Constant"
const Presantation = () => {
    return (
        <section className="bg-[#002057]" >
          <div className=" mx-auto pb-[50px] lg:pb-[100px] pt-[30px] px-[20px] lg:px-[100px]] xl:px-[200px]] 2xl:px-[300px]] sm:max-w-[540px]] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1040px] 2xl:max-w-[1320px] 3xl:max-w-[1620px]">
            <h1 className="text-[[#E0E0E0]] text-center text-[50px] lg:text-[70px] font-bold ">{DATAAPROPOS.header.left.txt1}</h1>
            
            <div className="pt-10 flex flex-col lg:flex-row-reverse gap-3 items-center">
              <div className="max-w-[500px] max-h-[500px] lg:w-[40%] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]">
                  <img className="rounded-[60%_40%_30%_70%/60%_30%_70%_40%] " src={DATAAPROPOS.header.right.img} alt="Notre histoire" />
              </div>
              <div className="lg:w-[60%] pt-5 ">

                {DATAAPROPOS.header.left.p1?<p>{DATAAPROPOS.header.left.p1}</p>:''}       
                {DATAAPROPOS.header.left.p2?<p className='pt-4'>{DATAAPROPOS.header.left.p2}</p>:''}  
                {DATAAPROPOS.header.left.p3?<p className='pt-4'>{DATAAPROPOS.header.left.p3}</p>:''} 
                {DATAAPROPOS.header.left.p4?<p className='pt-4'>{DATAAPROPOS.header.left.p4}</p>:''}  
              
              </div>
            </div>
            {/* <PointFort/> */}
           </div>        
        </section>
    );
};

export default Presantation;