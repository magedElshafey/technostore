import React from "react";
// style
import style from "./categoriesHeader.module.css";
import { Link } from "react-router-dom";
const CategoriesHeader = () => {
  return (
    <div className={`d-none d-md-block  ${style.mainDiv}`}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/**left side*/}
          <div className={style.leftSide}>
            <div className="dropdown">
              <button
                className={`dropdown-toggle ${style.select}`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All categories
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/#">
                    woman
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    men
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">
                    kids
                  </a>
                </li>
              </ul>
            </div>
            <Link to="/" className="d-flex gap-1 align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5.25 21.75H18.75"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className={`m-0 p-0 ${style.text}`}>Track Order</p>
            </Link>
            <Link to="/" className="d-flex gap-1 align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.1406 12.75H18.1406C17.7428 12.75 17.3613 12.908 17.08 13.1893C16.7987 13.4706 16.6406 13.8522 16.6406 14.25V18C16.6406 18.3978 16.7987 18.7794 17.08 19.0607C17.3613 19.342 17.7428 19.5 18.1406 19.5H19.6406C20.0384 19.5 20.42 19.342 20.7013 19.0607C20.9826 18.7794 21.1406 18.3978 21.1406 18V12.75ZM21.1406 12.75C21.1407 11.5618 20.9054 10.3853 20.4484 9.28844C19.9915 8.19159 19.3218 7.19609 18.4781 6.35938C17.6344 5.52266 16.6334 4.86129 15.5328 4.41344C14.4322 3.96558 13.2538 3.7401 12.0656 3.75C10.8782 3.74134 9.70083 3.96774 8.60132 4.41616C7.5018 4.86457 6.50189 5.52613 5.6592 6.36272C4.81651 7.19931 4.1477 8.19439 3.69131 9.29062C3.23492 10.3869 2.99997 11.5626 3 12.75V18C3 18.3978 3.15804 18.7794 3.43934 19.0607C3.72064 19.342 4.10218 19.5 4.5 19.5H6C6.39782 19.5 6.77936 19.342 7.06066 19.0607C7.34196 18.7794 7.5 18.3978 7.5 18V14.25C7.5 13.8522 7.34196 13.4706 7.06066 13.1893C6.77936 12.908 6.39782 12.75 6 12.75H3"
                  stroke="#5F6C72"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className={`m-0 p-0 ${style.text}`}>Customer Support</p>
            </Link>
            <Link to="/" className={`m-0 p-0 ${style.text}`}>
              page title
            </Link>
            <Link to="/" className={`m-0 p-0 ${style.text}`}>
              page title
            </Link>
          </div>
          <div className="d-flex align-items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M17.4343 4.375C18.9185 4.77332 20.2718 5.55499 21.3584 6.64159C22.445 7.72818 23.2266 9.08147 23.625 10.5656"
                stroke="#191C1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5266 7.75468C17.4192 7.99175 18.2333 8.46057 18.8864 9.11364C19.5395 9.7667 20.0083 10.5808 20.2454 11.4734"
                stroke="#191C1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.1172 13.65C11.0176 15.5094 12.5211 17.0091 14.3828 17.9047C14.5201 17.9697 14.672 17.9979 14.8235 17.9864C14.975 17.9748 15.1209 17.9241 15.2469 17.8391L17.9812 16.0125C18.1021 15.9306 18.2417 15.8806 18.387 15.8672C18.5324 15.8538 18.6788 15.8774 18.8125 15.9359L23.9313 18.1344C24.1062 18.2072 24.2524 18.3355 24.3472 18.4995C24.4421 18.6636 24.4804 18.8542 24.4563 19.0422C24.294 20.3085 23.6759 21.4722 22.7177 22.3158C21.7594 23.1593 20.5266 23.6247 19.25 23.625C15.3049 23.625 11.5214 22.0578 8.73179 19.2682C5.94218 16.4786 4.375 12.6951 4.375 8.75C4.37529 7.47337 4.84073 6.24059 5.68425 5.28233C6.52776 4.32407 7.69154 3.70599 8.95781 3.54375C9.14576 3.51961 9.33643 3.55792 9.50047 3.65278C9.66451 3.74765 9.79281 3.89381 9.86562 4.06875L12.0641 9.19844C12.1212 9.33007 12.1451 9.47374 12.1337 9.61679C12.1223 9.75984 12.0758 9.89789 11.9984 10.0188L10.1719 12.7969C10.0906 12.9225 10.0428 13.0669 10.0333 13.2163C10.0237 13.3657 10.0526 13.515 10.1172 13.65V13.65Z"
                stroke="#191C1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className={`m-0 p-0 ${style.mob}`}>+1-23456789012</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesHeader;
