import { useEffect, useState } from 'react';
import propTypes from 'prop-types'
import { boulle } from '../assets/icon';
const Boules = () => {
  const [rotate, setRotate] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const rotation = window.scrollY / 2; // Adjust this value to control the speed of rotation
      setRotate(rotation);
      console.log("rotate :"+rotate);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rotate]);

  return (
    <div className={` bgCol flex items-center justify-center`}>
      <div style={{ transform: `rotate(${rotate}deg)`, transition: 'transform 0.1s' }}>
        <img
          className="w-[50px] lg:w-[70px]"
          src={boulle}
          alt=""
        />
      </div>
    </div>
  );
};

Boules.propTypes ={
  prop : propTypes.node ,
}

export default Boules;
