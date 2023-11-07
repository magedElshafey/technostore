import React from "react";
// style
import style from "./settings.module.css";
// icons
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { BiLogoYoutube } from "react-icons/bi";

const SettingsHeader = () => {
  return (
    <div className={`d-none d-md-block ${style.mainDiv}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          {/**welcome*/}
          <p className={`m-0 p-0 ${style.welcome} text-white`}>
            welcome to technostore
          </p>
          {/**follow us section*/}
          <div className="d-flex align-items-center gap-1">
            <p className={`m-0 p-0 text-white ${style.follow}`}>follow us : </p>

            <AiOutlineTwitter className="text-white pointer" size={15} />

            <BsFacebook className="text-white pointer" size={15} />

            <FaPinterestP className="text-white pointer" size={15} />

            <BiLogoYoutube className="text-white pointer" size={15} />

            <AiOutlineInstagram className="text-white pointer" size={15} />
            <p className={`text-white m-0 px-4 ${style.line}`}>|</p>
            {/*settings sections*/}
            <div className="d-flex align-items-center gap-4">
              {/*language*/}
              <div className="dropdown">
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
              </div>
              <div className="dropdown">
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
              </div>
              {/**currency */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsHeader;
