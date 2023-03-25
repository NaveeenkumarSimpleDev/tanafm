import React from "react";
import Category from "../../Components/UI/Category";
import Item from "../Details/Item";

import "./Categories.css";

const Categories = (props) => {
  const data = props.products;
  let categories = [];
  data.map((item) => {
    categories.push(item.categoryName);
  });
  const filterCategories = categories.filter(
    (item, index) => categories.indexOf(item) === index
  );

  const fantasyCategory = data.filter((item) => {
    if (item.categoryName.toLowerCase() === "fantasy") {
      return item;
    }
  });
  return (
    <div className="category__page">
      {filterCategories.map((cat) => {
        return (
          <section key={Math.random().toString()}>
            <Category className="pos" key={Math.random().toString()}>
              {cat}
            </Category>
            <div className="category__item" key={Math.random().toString()}>
              {data
                .filter((item) => {
                  return item.categoryName.toLowerCase() === cat.toLowerCase();
                })
                .map((item) => {
                  return <Item {...item} key={item._id} />;
                })}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Categories;
