import React from "react";
import "./Category.css";

const Category = (props) => {
  const className = "category-name " + props.className;
  return <p className={className}>{props.children}</p>;
};

export default Category;
