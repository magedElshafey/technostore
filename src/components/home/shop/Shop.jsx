import React from "react";
import style from "./shop.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import CategoryCard from "../../utils/categoryCard/CategoryCard";
import "swiper/css/navigation";
const Shop = ({ data }) => {
  const swiperOptions = {
    loop: true,
    centeredSlides: true,
    spaceBetween: 210,
    navigation: true,

    pagination: {
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 6,
      },
      1024: {
        slidesPerView: 7,
      },
    },
  };
  return (
    <div className={style.mainDiv}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <p className={`${style.shop} m-0 p-0 mb-4 text-center`}>
              shop with categories
            </p>
            <Swiper modules={[Autoplay, Navigation]} {...swiperOptions}>
              {data.map((item, index) => (
                <SwiperSlide
                  className="d-flex justify-content-center d-md-block"
                  key={index}
                >
                  <CategoryCard data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
