import React from "react";
import style from "./blogcard.module.css";
const BlogCard = ({ data }) => {
  return (
    <div className={style.card}>
      <img alt="blog/img" className={style.mainImg} src={data.img} />
      <p className={`m-0 p-0 my-3 ${style.title}`}>{data.title}</p>
      <p className={`m-0 p-0 ${style.desc}`}>{data.desc}</p>
    </div>
  );
};

export default BlogCard;
