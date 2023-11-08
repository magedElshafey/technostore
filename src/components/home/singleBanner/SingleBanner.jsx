import React from "react";
import style from "./singleBanner.module.css";
import banner from "../../../assets/banner-03.png";
const SingleBanner = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12">
          <img alt="banner/img" className={style.mainImg} src={banner} />
        </div>
      </div>
    </div>
  );
};

export default SingleBanner;
