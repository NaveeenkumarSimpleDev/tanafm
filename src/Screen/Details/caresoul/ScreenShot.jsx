import React from "react";
import Slider from "../../../Components/Slider/Slider";

const ScreenShot = (props) => {
  const images = props.data.filter((img) => img != null);
  return <Slider data={images} />;
};

export default ScreenShot;
