import React, { useContext } from "react";
import { Link } from "react-router-dom";
import context from "../../../Context/Context";
import "./Menu.css";

function Menu() {
  const ctx = useContext(context);

  return (
    <div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/hot-deals">
              Hot Deals 🔥
            </Link>
          </li>
          <li>
            <Link to="/categories">
              Categories
            </Link>
          </li>
          {/* {ctx.ownerLogin && (
            <li>
              <Link to="/Update-data">
                Update
              </Link>
            </li>
          )} */}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
