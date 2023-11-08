import React from "react";
import style from "./doublebanner.module.css";
import banner1 from "../../../assets/banner-01.png";
import banner2 from "../../../assets/banner-02.png";
const DoubleBanner = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <img alt="banner/img" className={style.mainImg} src={banner1} />
        </div>
        <div className="col-12 col-md-6">
          <img alt="banner/img" className={style.mainImg} src={banner2} />
        </div>
      </div>
    </div>
  );
};

export default DoubleBanner;
