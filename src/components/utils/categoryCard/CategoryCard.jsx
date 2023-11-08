import React from "react";
import style from "./categoryCard.module.css";
import { Link } from "react-router-dom";
const CategoryCard = ({ data }) => {
  return (
    <Link to={data.path} className={style.card}>
      <img alt="product/img" src={data.img} className={style.mainImg} />
      <p className={style.title}>{data.title}</p>
    </Link>
  );
};

export default CategoryCard;
