import React from "react";
import style from "./services.module.css";
// imgs
import serv1 from "../../../assets/serv-01.png";
import serv2 from "../../../assets/serv-02.png";
import serv3 from "../../../assets/serv-03.png";
const Services = () => {
  return (
    <div className="row mb-4">
      <div className="col-12 col-md-6 mb-3 mb-md-0">
        <img alt="services/img" className={style.bigImg} src={serv1} />
      </div>
      <div className="col-12 col-md-6 mb-3 mb-md-0">
        <img alt="services/img" className={style.smallImg} src={serv2} />
        <img alt="services/img" className={style.smallImg} src={serv3} />
      </div>
    </div>
  );
};

export default Services;
