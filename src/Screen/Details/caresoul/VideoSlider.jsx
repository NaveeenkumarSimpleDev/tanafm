import React from "react";
import Slider from "../../../Components/Slider/Slider";

const VideoSlider = (props) => {
  const videos = props.data.filter((vid) => vid != null || vid !== "");

  return <Slider data={videos} videos />;
};

export default VideoSlider;
