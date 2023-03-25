import React, { useContext } from "react";
import arrow from "../../assets/1.png";
import Category from "../../Components/UI/Category";
import "./Item.css";
import { Link } from "react-router-dom";
import context from "../../Context/Context";

function Item(props) {
  const className = "card " + props.className;
  const ctx = useContext(context);
  const showDetailsHandler = () => {
    localStorage.setItem("CURR_ITEM", JSON.stringify(props));
    ctx.detilsItem = props;
  };
  return (
    <>
      <div>
        <div className={className}>
          {props.hotDeal && <div className="fire">🔥</div>}
          <Category>{props.categoryName}</Category>
          <img src={props.logo} className="logo" />
          <h1>{props.appName}</h1>
          <p className="link">by Tana FM</p>
          <Link to="/detail" onClick={showDetailsHandler}>
            <button>
              <img src={arrow} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Item;
