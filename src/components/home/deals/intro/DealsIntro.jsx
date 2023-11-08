import React from "react";
import style from "./intro.module.css";
import DealsCounter from "../counter/DealsCounter";
import { Link } from "react-router-dom";
// icons
import { HiArrowNarrowRight } from "react-icons/hi";
const DealsIntro = () => {
  return (
    <div className="d-flex align-items-center flex-column flex-md-row gap-3 gap-md-0 justify-content-between mb-4">
      <div className="d-flex  gap-3">
        <p className={`m-0 p-0 ${style.best}`}>best deals</p>
        <div className="d-flex align-items-center gap-1">
          <p className={`m-0 p-0 ${style.end}`}>deals end in</p>
          <DealsCounter />
        </div>
      </div>
      <Link to="/" className={`d-flex align-items-center gap-1 ${style.link}`}>
        <span className="m-0 p-0"> Browse All Product</span>
        <HiArrowNarrowRight className={style.icon} />
      </Link>
    </div>
  );
};

export default DealsIntro;
