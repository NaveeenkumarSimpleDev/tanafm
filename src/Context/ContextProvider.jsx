import React from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const crr = JSON.parse(localStorage.getItem("CURR_ITEM")) || {};

  const contex = {
    detilsItem: crr
  };

  return <Context.Provider value={contex}>{props.children}</Context.Provider>;
};

export default ContextProvider;
