import React from "react";
import "./Header.css";
import Menu from "./Menu/Menu";
import logo from "../../assets/logo.jpg";
import hamburMenu from "../../assets/hmenu2.png";
import MobileMenu from "./MobileMenu/MobileMenu";

function Header({ setSeqarchQuery }) {
  const searchHandler = (e) => {
    setSeqarchQuery(e.target.value);
  };

  const mobileMenuHandler = () => {
    const mob = document.getElementById("mob__open");
    mob.style.clipPath = "inset(0 0 0 0)";
  };
  return (
    <>
      <div className="fixed">
        <header className="header">
          <div className="logo-div">
            <img src={logo} />
            <h1 className="logo">TanaFM</h1>
          </div>

          {/* Mobile menu icon */}

          <div className="mobile_menu">
            <img src={hamburMenu} onClick={mobileMenuHandler} />
          </div>
          <div className="search-container">
            <select className="search-container__select">
              <optgroup>
                <option defaultChecked>All Categories</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </optgroup>
            </select>

            <input
              className="search-container__input"
              type="search"
              placeholder="Search here"
              onChange={(e) => searchHandler(e)}
            />

            <button className="search-container__btn">Search</button>
          </div>
        </header>
        <Menu />
      </div>
      <MobileMenu />
    </>
  );
}

export default Header;
