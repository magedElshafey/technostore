import React from "react";
import style from "./deals.module.css";
import DealsIntro from "./intro/DealsIntro";
import ProductCard from "../../utils/productCard/ProductCard";
const Deals = ({ data }) => {
  return (
    <div className="container mb-4">
      <DealsIntro />
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 mb-3 ">
            <ProductCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
