// hooks
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./MobileHeader.module.css";
import logo from "../../../assets/orange.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ClickOutsideWrapper from "../../hooks/useClickOutside";
const MobileHeader = ({ links }) => {
  // hooks
  const { i18n } = useTranslation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  //   logic in design
  const handleShowSidebar = () => setShowSidebar(true);
  const handleCloseSidebar = () => setShowSidebar(false);
  const handleActiveLink = (id) => {
    setActiveLink(id);
    console.log("this is the index", activeLink);
  };
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
              <AiOutlineMenu
                onClick={handleShowSidebar}
                size={30}
                className={`${style.icon} pointer`}
              />
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
            <ul className="mt-4 d-flex align-items-center justify-content-between">
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
          </div>
        </div>
      </ClickOutsideWrapper>
    </div>
  );
};

export default MobileHeader;
