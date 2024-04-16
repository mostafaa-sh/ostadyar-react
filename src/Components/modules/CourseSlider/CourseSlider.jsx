import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import SingleCourse from "../../modules/SingleCourse/SingleCourse";

import { Autoplay } from "swiper/modules";
function CourseSlider() {
  return (
    <>
      <div className="popular__slider">
        <Swiper
          className="swiper swiper-container"
          speed={800}
          loop={true}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <SingleCourse />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCourse />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCourse />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCourse />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCourse />
          </SwiperSlide>
          <SwiperSlide>
            <SingleCourse />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default CourseSlider;
