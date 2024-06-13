import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types'

const Presantation = ({prop}) => {
  if (!prop) return null

  return (
    <section>
        <div className="text-[#F9F9F9] relative mx-auto pb-[100px] lg:pb-[150px] pt-[30px] px-[20px] lg:px-[200px] xl:px-[200px]  sm:max-w-[540px] md:max-w-[600px] lg:max-w-[1060px] ">
          <div className='absolute hidden lg:block left-0 top-[20%]'>
            <img className='w-[150px]' src="../src/assets/icon/etoile-filante.png" alt="" />
          </div>
          {/* <div className='absolute right-0 top-[20%]'>
            <img className='w-[150pxx]' src="../src/assets/icon/etoiles1.png" alt="" />
          </div> */}
          <h1 className="text-[40px] lg:text-[60px] font-bold pb-[15px]">{prop.txt1}</h1>
          <h2 className="text-[20px] text-[#82A5F2] lg:text-[22px] pb-[30px]">{prop.txt2}</h2>
          <p className="text-[18px] lg:text-[20px]">{prop.txt3}
            <br />
            <br />
            {prop.txt4} 
          </p>
          <button className="mt-[50px] md:mt-[35px] lg:mt-[70px]">
             <NavLink className="text-[18px] lg:text-[20px] bg-[#F56F46]] text-[#022562] bg-[#87AAF8] px-[25px] py-[10px] lg:py-[13px] lg:px-[45px] rounded-3xl">contacter-Nous</NavLink>
          </button>
        </div>
    </section>
  );
};

Presantation.propTypes ={
  prop : propTypes.node ,
}

export default Presantation;
