import React from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const crr = JSON.parse(localStorage.getItem("CURR_ITEM")) || {};
  const isLogin = localStorage.getItem("OWNER_LOGIN")?.toString();

  const contex = {
    detilsItem: crr,
    ownerLogin: isLogin === "1" ? true : false,
  };

  return <Context.Provider value={contex}>{props.children}</Context.Provider>;
};

export default ContextProvider;
