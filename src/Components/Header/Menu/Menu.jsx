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
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/hot-deals">
              <a>Hot Deals 🔥</a>
            </Link>
          </li>
          <li>
            <Link to="/categories">
              <a>Categories</a>
            </Link>
          </li>
          {ctx.ownerLogin && (
            <li>
              <Link to="/Update-data">
                <a>Update</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
