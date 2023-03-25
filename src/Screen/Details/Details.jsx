import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Category from "../../Components/UI/Category";
import context from "../../Context/Context";
import "./Details.css";

import ScreenShot from "./caresoul/ScreenShot";
import VideoSlider from "./caresoul/VideoSlider";

const Details = () => {
  const ctx = useContext(context);

  return (
    <div className="details">
      <div className="details__card">
        <Category>{ctx.detilsItem.categoryName}</Category>
        <div>
          <h1>{ctx.detilsItem.appName}</h1>
          <p>
            {ctx.detilsItem.postedDate}
            <Link to="/">
              <a>TanaFM</a>
            </Link>
          </p>
          <div className="poster-img">
            <a href={ctx.detilsItem.appLink} target="_blank">
              <img src={ctx.detilsItem.poster} />
            </a>
            <a href={ctx.detilsItem.appLink} target="_blank">
              Download Now 😍
            </a>
          </div>
          <p>{ctx.detilsItem.installProess}</p>
        </div>
        <div className="tutorials">
          <h2>Tutorial video & Scree Shot</h2>
          <p>
            <strong>App hot offers & overview</strong>
          </p>
          {ctx.detilsItem.slideImages.length > 0 && (
            <div className="screenshots">
              <ScreenShot data={ctx.detilsItem.slideImages} />
            </div>
          )}
          {ctx.detilsItem.videoLinks.length > 0 && (
            <div className="screenshots">
              <VideoSlider data={ctx.detilsItem.videoLinks} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
