import React from "react";
import style from "./blogcard.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
const BlogCard = ({ data }) => {
  return (
    <div className={style.card}>
      <div className="d-flex justify-content-center">
        <img alt="blog/img" className={style.mainImg} src={data.img} />
      </div>
      <p className={`m-0 p-0 my-3 ${style.title}`}>{data.title}</p>
      <p className={`m-0 p-0 ${style.desc}`}>{data.desc}</p>

      <button className={style.btn}>
        <span> read more</span>
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default BlogCard;
