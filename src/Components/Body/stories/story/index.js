import React from "react";
import { Avatar, Image } from "antd";
import "./index.css";

function index({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar size={45} className="story__avatar" src={<Image src={profileSrc} />} />
      <h4>{title}</h4>
    </div>
  );
}

export default index;
