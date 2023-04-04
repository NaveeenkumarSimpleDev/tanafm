import React, { useEffect, useState } from "react";
import Item from "../Details/Item";
import "./Homescreen.css";
import Loading from "../loading/Loading";

function HomeScreen({ products, searchQuery, isLoading }) {
  const filteredData = products.filter((prod) =>
    searchQuery == ""
      ? prod
      : prod.appName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="homeScreen">
      {isLoading && <Loading />}
      {filteredData.length > 0 ? (
        filteredData.map((item) => {
          return <Item {...item} key={item._id} className="items" />;
        })
      ) : searchQuery === "" ? (
        <Loading />
      ) : (
        <h1>No result Found...</h1>
      )}
    </div>
  );
}

export default HomeScreen;
