import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";


import { FreeMode, Pagination } from "swiper/modules";
// import { RxArrowTopRight } from "react-icons/rx";

import { DATAREALISATION } from "../data/Constant";
const ActiveSlider = () => {
  return (
    <div>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[100%] lg:max-w-[100%]"
      >
        {DATAREALISATION.slider.map((item) => {
          return (
          <SwiperSlide key={item.id}>
           <div className="relativee cursor-grab  w-[80%] h-[350px] lg:w-[500px] lg:h-[500px] shadow-lg">
             <div className="absolute inset-0 object-cover object-center" style={{backgroundImage:`url(${item.bgImg})`}}>

             </div>
           </div>
          </SwiperSlide>);
        })}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
