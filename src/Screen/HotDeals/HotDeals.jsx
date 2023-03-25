import React from "react";
import Category from "../../Components/UI/Category";
import Item from "../Details/Item";

import "./HotDeals.css";

const HotDeals = (props) => {
  return (
    <div>
      <div className="category__page">
        <section>
          <Category className="pos hot-deals">Hot Deals 🔥</Category>
          <div className="category__item">
            {props.products.map((item) => {
              if (item.hotDeal === true)
                return (
                  <Item {...item} key={item._id} className="hot__deals__item" />
                );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HotDeals;
