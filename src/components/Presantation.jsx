import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types'
import Btn from './Btn';

const style="py-2 px-4 lg:py-3 lg:px-7 lg:mt-2 lg:mb-2"

const Presantation = ({prop}) => {
  if (!prop) return null

  return (
    <section className='bg-[#002057]'>
        <div className="relative mx-auto pb-[100px] lg:pb-[150px] pt-[30px] px-[20px] lg:px-[200px] xl:px-[200px]  sm:max-w-[540px] md:max-w-[600px] lg:max-w-[1060px] ">
          <div className='absolute hidden lg:block left-0 top-[20%]'>
            <img className='w-[150px]' src="../src/assets/icon/etoile-filante.png" alt="" />
          </div>
          {/* <div className='absolute right-0 top-[20%]'>
            <img className='w-[150pxx]' src="../src/assets/icon/etoiles1.png" alt="" />
          </div> */}
          <h1 className="text-[#E0E0E0] text-[40px] lg:text-[60px] font-bold pb-[15px]">{prop.txt1}</h1>
          <h2 className="text-[18px] text-[#FFF5CC] lg:text-[20px] pb-[30px]">{prop.txt2}</h2>
          <div className="text-[18px]] lg:text-[19px]]">
          {prop.p1?<p>{prop.p1}</p>:''}       
          {prop.p2?<p className='pt-4'>{prop.p2}</p>:''}  
          {prop.p3?<p className='pt-4'>{prop.p3}</p>:''} 
          {prop.p4?<p className='pt-4'>{prop.p4}</p>:''}  
          {prop.p5?<p className='pt-4'>{prop.p5}</p>:''}           
          </div>
          <div className='pt-7 lg:pt-10'>
            <NavLink to="">
                <Btn txt={"Contacter"} style={style} top={45}/>
            </NavLink>
          </div>
          {/* <button className="mt-[50px] md:mt-[35px] lg:mt-[70px]">
             <NavLink className="text-[18px] lg:text-[20px] bg-[#F56F46]] text-[#022562] bg-[#87AAF8] px-[25px] py-[10px] lg:py-[13px] lg:px-[45px] rounded-3xl">contacter-Nous</NavLink>
          </button> */}
        </div>
    </section>
  );
};

Presantation.propTypes ={
  prop : propTypes.node ,
}

export default Presantation;
