import { ScrollRotate } from "react-scroll-rotate";
import propTypes from 'prop-types'
import { boulle } from '../assets/icon';
const Boules = ({bgColor}) => {
  return (
    <div className={`${bgColor} bgCol flex items-center justify-center`}>
      <ScrollRotate>
        <img
          className="w-[50px] lg:w-[70px]"
          src={boulle}
          alt=""
        />
      </ScrollRotate>
    </div>
  );
};

Boules.propTypes ={
  prop : propTypes.node ,
}

export default Boules;
