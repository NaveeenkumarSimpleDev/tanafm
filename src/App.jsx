import React, { useState, useEffect } from "react";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import Header from "./Components/Header/Header";
import Details from "./Screen/Details/Details";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Categories from "./Screen/categories/Categories";
import HotDeals from "./Screen/HotDeals/HotDeals";
import getData from "./api/getData";

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSeqarchQuery] = useState("");
  useEffect(() => {
    try {
      async function fetchData() {
        const data = await getData();
        setData(() => data);
      }
      fetchData();
    } catch (e) {
      console.log("server is not responding...");
    }
  }, []);

  return (
    <div className="app">
      <Header setSeqarchQuery={setSeqarchQuery} />
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen
              products={data}
              searchQuery={searchQuery}
            />
          }
        />
        <Route path="/detail" element={<Details />} />
        <Route
          path="/categories"
          element={<Categories products={data} searchQuery={searchQuery} />}
        />
        <Route path="/hot-deals" element={<HotDeals products={data} />} />
      </Routes>
    </div>
  );
}
export default App;
