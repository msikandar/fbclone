import { Avatar, Image } from "antd";
import React, { useState } from "react";
import "./index.css";
import Comments from "../Post/comments/index";
import { useDispatch } from "react-redux";
import {
  LikeFilled,
  CommentOutlined,
  SendOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { addLike } from "../../../redux/actions/appActions";

function Post({
  profilePic,
  image,
  username,
  timestamp,
  message,
  comments,
  like,
  id,
}) {
  const [showComment, setshowComment] = useState(false);
  const dispatch = useDispatch();
  const toggleComments = () => {
    console.log("show comments");
    setshowComment(!showComment);
  };
  const handleLike = () => {
    dispatch(addLike(true, id));
  };
  console.log(timestamp);
  return (
    <div className="post">
      <div className="post__top">
        <Avatar
          size={54}
          src={<Image src={profilePic} />}
          className="post__avatar"
        />

        <div className="post__topInfo">
          <h3>{username}</h3>
          <p style={{ color: "GrayText" }}>
            {new Date(timestamp).toUTCString()}
          </p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      {showComment ? <Comments id={id} /> : null}

      <div className="post__options">
        <div className="post__option" onClick={handleLike}>
          <LikeFilled
            style={{ fontSize: "20px", color: like ? "#1777F2" : "white" }}
            
          />
          <p style={{ color: like ? "#1777F2" : "white" }}>Like</p>
        </div>
        <div className="post__option" onClick={toggleComments}>
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
