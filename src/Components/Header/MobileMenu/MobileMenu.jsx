import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.css";
import close from "../../../assets/close.png";
import context from "../../../Context/Context";

const MobileMenu = () => {
  const ctx = useContext(context);

  const closePage = () => {
    const mob = document.getElementById("mob__open");
    mob.style.clipPath = "inset(0 0 0 100%)";
  };
  return (
    <div className="mob__menu-screen" id="mob__open">
      <div className="mob__menu">
        <img src={close} onClick={closePage} className="close__icon" />
        <ul>
          <li>
            <Link to="/" onClick={closePage}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/hot-deals" onClick={closePage}>
              Hot Deals
            </Link>
          </li>
          <li>
            <Link to="/categories" onClick={closePage}>
              Categories
            </Link>
          </li>
          {ctx.ownerLogin && (
            <li>
              <Link to="/Update-data" onClick={closePage}>
                <a>Update</a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
