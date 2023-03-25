import React, { useEffect, useState } from "react";
import Item from "../Details/Item";
import "./Homescreen.css";

function HomeScreen({ products, searchQuery }) {
  const filteredData = products.filter((prod) =>
    searchQuery == ""
      ? prod
      : prod.appName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="homeScreen">
      {filteredData.length > 0 ? (
        filteredData.map((item) => {
          return <Item {...item} key={item._id} className="items" />;
        })
      ) : (
        <h1>No result Found...</h1>
      )}
    </div>
  );
}

export default HomeScreen;
