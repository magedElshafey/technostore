import React from "react";
import style from "./offerHeader.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// icons
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
const OfferHeader = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/");
  const { i18n } = useTranslation();
  return (
    <div className="d-none d-md-block">
      <div className={style.mainDiv}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/*black friday text*/}
            <div className="d-flex align-items-center gap-1">
              <div className={`${style.blackContainer}`}>
                <p className="m-0 p-0">black</p>
              </div>
              <p className="text-white m-0 p-0">firday</p>
            </div>
            {/**offer text*/}
            <div className="d-flex align-items-center gap-1">
              <p className={`m-0 p-0 ${style.up} text-white`}>up to</p>
              <p className={`m-0 p-0 ${style.percent}`}>59%</p>
              <p className={`m-0 p-0 ${style.off} text-white`}>off</p>
            </div>
            <button
              onClick={handleNavigate}
              className={`d-flex align-items-center justify-content-center gap-2 ${style.btn}`}
            >
              <span className={`m-0 p-0 ${style.shop}`}>shop now</span>
              {i18n.language === "en" ? (
                <FaArrowLeftLong size={15} />
              ) : (
                <FaArrowRightLong size={15} />
              )}
            </button>
            <button
              className={`d-flex align-items-center justify-content-center ${style.closeBtn}`}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferHeader;
