import React from "react";
import style from "./weoffer.module.css";
import Offercard from "../../utils/offercard/Offercard";
const WeOffer = ({ data }) => {
  return (
    <div className={`mb-4 ${style.mainDiv} d-flex align-items-center`}>
      <div className="container pt-3 pt-md-0">
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-12 col-md-4 col-md-3 mb-3 mb-lg-0">
              <Offercard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
