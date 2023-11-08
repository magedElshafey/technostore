import React from "react";
import style from "./blogs.module.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import BlogCard from "../../utils/blogCard/BlogCard";
const Blogs = ({ data }) => {
  return (
    <div className={`m-0 p-0 ${style.mainDiv}`}>
      <div className="container py-3">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <p className={`m-0 p-0 ${style.title}`}>latest news</p>
          <Link
            className={`${style.link} m-0 p-0 d-flex align-items-center gap-1`}
          >
            <span className="m-0 p-0">browse all blogs</span>
            <AiOutlineArrowRight className={style.icon} />
          </Link>
        </div>
        <div className="row justify-content-center">
          {data.map((item, index) => (
            <div key={index} className="col-12 col-md-4 mb-3 mb-md-0">
              <BlogCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
