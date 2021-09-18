import { Avatar, Image } from "antd";
import React from "react";
import "./index.css";
import {
  LikeOutlined,
  CommentOutlined,
  SendOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";

function Post({ profilePic, image, username, timestamp, message }) {
  console.log(timestamp);
  return (
    <div className="post">
      <div className="post__top">
        <Avatar size={54} src={<Image src={profilePic} />} className="post__avatar" />

        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date().toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <LikeOutlined />
          <p>Like</p>
        </div>
        <div className="post__option">
          <CommentOutlined />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <SendOutlined />
          <p>Share</p>
        </div>
        <div className="post__option">
          <UserOutlined />
          <DownOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;
