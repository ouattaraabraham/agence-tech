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
            slidesPerView: 1,
            spaceBetween: 15,
          },
          760: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
       
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="pr-24 md:pr-0 max-w-[100%] lg:max-w-[100%]"
      >
        {DATAREALISATION.slider.map((item) => {
          return (
          <SwiperSlide  key={item.id}>
           <div className="relative cursor-grab  w-[98%] h-[300px] sm:h-[350px] lg:w-[100%] lg:h-[400px] shadow-lg">
             <div className="absolute  inset-0 object-cover object-center" style={{backgroundImage:`url(${item.bgImg})`}}>

             </div>
           </div>
          </SwiperSlide>);
        })}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
