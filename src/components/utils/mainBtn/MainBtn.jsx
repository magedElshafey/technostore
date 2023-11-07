import React from "react";
import style from "./mainBtn.module.css";
// icons
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
// hooks
import { useTranslation } from "react-i18next";
const MainBtn = ({ text, action }) => {
  const { i18n } = useTranslation();
  return (
    <button
      onClick={action}
      className={`d-flex align-items-center justify-content-center gap-2 text-white text-uppercase ${style.btn}`}
    >
      <p className="m-0 p-0">{text}</p>
      {i18n.language === "en" ? (
        <AiOutlineArrowLeft />
      ) : (
        <AiOutlineArrowRight />
      )}
    </button>
  );
};

export default MainBtn;
