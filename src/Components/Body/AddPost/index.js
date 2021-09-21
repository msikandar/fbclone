import { Avatar, Image, Row, Col } from "antd";
import React, { useState } from "react";
import { VideoCameraFilled, SmileFilled } from "@ant-design/icons";
import "./index.css";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/actions/appActions";

function AddPost() {
  const [input, setInput] = useState("");
  const [inputURL, setInputURL] = useState("");

  const user = {
    displayName: "sikandar",
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // db.collection('posts').add({
    //   message: input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   profilePic: user.photoURL,
    //   username: user.displayName,
    //   image: inputURL
    // })
    if (input.length > 0) {
      dispatch(
        addPost({
          message: input,
          timestamp: new Date().getTime(),
          profilePic: "https://i.pravatar.cc/300",
          username: "User",
          image:
            inputURL !== ""
              ? inputURL
              : "https://images.unsplash.com/photo-1549813069-f95e44d7f498?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
        })
      );
    }
    console.log(input, inputURL);

    setInput("");
    setInputURL("");
  };
  return (
    <div className="addPost">
      <div className="addPost__top">
        <Avatar
          src={
            <Image src="https://images.unsplash.com/photo-1631791563807-d41830aa0af4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=392&q=80" />
          }
        />
        <form style={{ width: "100%" }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="addPost__input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
            value={inputURL}
            onChange={(e) => setInputURL(e.target.value)}
            type="text"
            placeholder="Image URL (Optional)"
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </form>
      </div>
      <div>
        <Row className="addPost__bottom">
          <Col xs={12} sm={8} md={8} lg={8} xl={8}>
            <div className="addPost__option">
              <VideoCameraFilled
                style={{ color: "red", fontSize: "20px", paddingBottom: "5px" }}
              />
              <h3>Live Video</h3>
            </div>
          </Col>
          <Col xs={12} sm={8} md={8} lg={8} xl={8}>
            <div className="addPost__option">
              <img
                src="https://img.icons8.com/fluency/28/000000/image-gallery.png"
                alt=""
              />
              <h3>Photo/Video</h3>
            </div>
          </Col>
          <Col xs={0} sm={8} md={8} lg={8} xl={8}>
            <div className="addPost__option">
              <SmileFilled
                style={{
                  color: "orange",
                  fontSize: "20px",
                  paddingBottom: "5px",
                }}
              />

              <h3>Feeling/Activity</h3>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AddPost;
