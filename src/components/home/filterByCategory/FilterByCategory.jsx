import React, { useState } from "react";
import style from "./filterByCategory.module.css";
import ProductCard from "../../utils/productCard/ProductCard";
import filterBanner from "../../../assets/filterBanner.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const FilterByCategory = ({ isReversed, isBg, text, data, filters }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveIndex = (i) => setActiveIndex(i);
  return (
    <div className={`mb-5 ${style.mainDiv} ${isBg ? style.bg : null} `}>
      <div className="container py-3">
        <div className={`${isReversed ? "row flex-row-reverse" : "row"}`}>
          <div className="col-12 col-lg-3">
            <img
              alt="banner/img"
              className={style.mainImg}
              src={filterBanner}
            />
          </div>
          <div className="col-12 col-lg-9">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <p className={`m-0 p-0 ${style.title}`}>{text}</p>
              <div
                className={`m-0 p-0 d-flex align-items-center gap-3 flex-wrap ${style.filterContainer}`}
              >
                {filters.map((item, index) => (
                  <p
                    onClick={() => handleActiveIndex(index)}
                    className={`m-0 p-0 pb-2 pointer ${style.filter} ${
                      activeIndex === index ? style.active : null
                    }`}
                    key={index}
                  >
                    {item}
                  </p>
                ))}
                <Link
                  className={`m-0 p-0 pb-2 d-flex gap-1 align-items-center ${style.link}`}
                >
                  <span className="m-0 p-0">browse all product</span>
                  <AiOutlineArrowRight className={style.icon} />
                </Link>
              </div>
            </div>
            <div className="row">
              {data.map((item, index) => (
                <div className="col-6 col-md-4 col-lg-3 mb-3" key={index}>
                  <ProductCard data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterByCategory;
