import React, { useState } from "react";
import rightArrow from "../../assets/right-arrow.png";
import leftArrow from "../../assets/left-arrow.png";
import "./Slider.css";
const Slider = (props) => {
  const slides = props.data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  const prevHandler = () => {
    setCurrentIndex((current) => current - 1);
  };
  const nextHandler = () => {
    setCurrentIndex((current) => current + 1);
  };
  return (
    <div className="screenshot-img">
      {currentIndex != 0 && (
        <img className="left-arrow" src={leftArrow} onClick={prevHandler} />
      )}

      {currentIndex !== slides.length - 1 && (
        <img className="right-arrow" src={rightArrow} onClick={nextHandler} />
      )}
      <div className="slides">
        {props.videos ? (
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src={currentSlide}
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
          />
        ) : (
          <img src={currentSlide} alt="image" />
        )}
      </div>
    </div>
  );
};

export default Slider;
