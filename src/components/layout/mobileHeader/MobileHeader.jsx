// hooks
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ClickOutsideWrapper from "../../hooks/useClickOutside";
// style
import style from "./MobileHeader.module.css";
// img
import logo from "../../../assets/orange.png";
// icons
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { BiLogoYoutube } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
const MobileHeader = ({ links }) => {
  // hooks
  const { i18n } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  //   logic in design
  const handleShowSidebar = () => setShowSidebar(true);
  const handleCloseSidebar = () => setShowSidebar(false);
  const handleActiveLink = (id) => setActiveLink(id);

  return (
    <div className="d-md-none">
      <ClickOutsideWrapper onClickOutside={handleCloseSidebar}>
        <div className={style.navContainer}>
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              {/*logo container*/}
              <div className="d-flex align-items-center gap-1">
                <img alt="logo/img" src={logo} className={style.logo} />
                <p className={`m-0 p-0 fw-bolder ${style.tecno} `}>
                  TechnoStore
                </p>
              </div>
              <div className="d-flex align-items-center gap-1">
                <AiOutlineShoppingCart
                  size={20}
                  className={`pointer ${style.cart}`}
                />
                <AiOutlineHeart
                  size={20}
                  className={`pointer ${style.heart}`}
                />
                <AiOutlineMenu
                  onClick={handleShowSidebar}
                  size={30}
                  className={`${style.icon} pointer`}
                />
              </div>
            </div>
            <div className={`mt-2 ${style.inputContainer}`}>
              <input
                type="text"
                className={style.inp}
                placeholder="search for something"
              />
              <GoSearch className={style.search} />
            </div>
          </div>
        </div>
        <div
          className={`${style.sidebar} ${
            showSidebar ? style.show : style.hide
          } ${i18n.language === "en" ? style.left : style.right}`}
        >
          <div className={`p-3 ${style.opacity}`}>
            <AiOutlineClose
              onClick={handleCloseSidebar}
              className={`${style.close} pointer`}
              size={20}
            />
            <ul className="m-0 p-0 my-4  d-flex align-items-center justify-content-between">
              {links.map((item, index) => (
                <li
                  onClick={() => handleActiveLink(index)}
                  key={index}
                  className={`pointer text-white pb-2 ${style.links} ${
                    activeLink === index ? style.active : null
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            {activeLink === 0 && (
              <ul className="m-0 p-0">
                <li className="mb-3">
                  <Link
                    className="text-white"
                    to="/"
                    onClick={handleCloseSidebar}
                  >
                    woman
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-white"
                    to="/"
                    onClick={handleCloseSidebar}
                  >
                    men
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-white"
                    to="/"
                    onClick={handleCloseSidebar}
                  >
                    kids
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-white"
                    to="/"
                    onClick={handleCloseSidebar}
                  >
                    Accsesories
                  </Link>
                </li>
              </ul>
            )}
            {activeLink === 1 && (
              <ul className="m-0 p-0">
                <li className="mb-3">
                  <Link
                    className="text-white"
                    to="/"
                    onClick={handleCloseSidebar}
                  >
                    About us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-white"
                    to="/"
                    onClick={handleCloseSidebar}
                  >
                    contact us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-white"
                    to="/"
                    onClick={handleCloseSidebar}
                  >
                    FAQS
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-white"
                    to="/"
                    onClick={handleCloseSidebar}
                  >
                    terms & conditions
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    onClick={handleCloseSidebar}
                    to="/"
                    className="text-white d-flex gap-1 align-items-center"
                  >
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
                        stroke="#ffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                        stroke="#ffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className={`m-0 p-0 ${style.text}`}>Track Order</p>
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    onClick={handleCloseSidebar}
                    to="/"
                    className="text-white d-flex gap-1 align-items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21.1406 12.75H18.1406C17.7428 12.75 17.3613 12.908 17.08 13.1893C16.7987 13.4706 16.6406 13.8522 16.6406 14.25V18C16.6406 18.3978 16.7987 18.7794 17.08 19.0607C17.3613 19.342 17.7428 19.5 18.1406 19.5H19.6406C20.0384 19.5 20.42 19.342 20.7013 19.0607C20.9826 18.7794 21.1406 18.3978 21.1406 18V12.75ZM21.1406 12.75C21.1407 11.5618 20.9054 10.3853 20.4484 9.28844C19.9915 8.19159 19.3218 7.19609 18.4781 6.35938C17.6344 5.52266 16.6334 4.86129 15.5328 4.41344C14.4322 3.96558 13.2538 3.7401 12.0656 3.75C10.8782 3.74134 9.70083 3.96774 8.60132 4.41616C7.5018 4.86457 6.50189 5.52613 5.6592 6.36272C4.81651 7.19931 4.1477 8.19439 3.69131 9.29062C3.23492 10.3869 2.99997 11.5626 3 12.75V18C3 18.3978 3.15804 18.7794 3.43934 19.0607C3.72064 19.342 4.10218 19.5 4.5 19.5H6C6.39782 19.5 6.77936 19.342 7.06066 19.0607C7.34196 18.7794 7.5 18.3978 7.5 18V14.25C7.5 13.8522 7.34196 13.4706 7.06066 13.1893C6.77936 12.908 6.39782 12.75 6 12.75H3"
                        stroke="#ffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className={`m-0 p-0 ${style.text}`}>Customer Support</p>
                  </Link>
                </li>
              </ul>
            )}
            {activeLink === 2 && (
              <ul className="m-0 p-0">
                <li className="mb-3">
                  <Link
                    className="text-white"
                    to="/"
                    onClick={handleCloseSidebar}
                  >
                    Login
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    className="text-white"
                    to="/"
                    onClick={handleCloseSidebar}
                  >
                    Logout
                  </Link>
                </li>
                <li className="dropdown mb-3">
                  <button
                    className={`dropdown-toggle ${style.select}`}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    en
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/#">
                        ar
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <button
                    className={`dropdown-toggle ${style.select}`}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    EGP
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/#">
                        sar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        USD
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        AED
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
            <div className="d-flex align-items-center gap-2 flex-wrap mt-3">
              <p className={`m-0 p-0  ${style.follow}`}>follow us : </p>

              <AiOutlineTwitter className="text-white pointer" size={20} />

              <BsFacebook className="text-white pointer" size={20} />

              <FaPinterestP className="text-white pointer" size={20} />

              <BiLogoYoutube className=" text-white pointer" size={20} />

              <AiOutlineInstagram className="text-white pointer" size={20} />
            </div>
          </div>
        </div>
      </ClickOutsideWrapper>
    </div>
  );
};

export default MobileHeader;
