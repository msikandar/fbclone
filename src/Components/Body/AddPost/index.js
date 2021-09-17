import { Avatar, Image } from "antd";
import React, { useState } from "react";
import { VideoCameraFilled, SmileTwoTone } from "@ant-design/icons";
import "./index.css"

function AddPost() {
  const [input, setInput] = useState("");
  const [inputURL, setInputURL] = useState("");
  const user = {
    displayName: "sikandar",
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // db.collection('posts').add({
    //   message: input,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   profilePic: user.photoURL,
    //   username: user.displayName,
    //   image: inputURL
    // })

    setInput("");
    setInputURL("");
  };
  return (
    <div className="addPost">
      <div className="addPost__top">
        <Avatar
          src={
            <Image src="https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
          }
        />
        <form>
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
      <div className="addPost__bottom">
        <div className="addPost__option">
          <VideoCameraFilled style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="addPost__option">
          <img
            src="https://img.icons8.com/fluency/28/000000/image-gallery.png"
            alt=""
          />
          <h3>Photo/Video</h3>
        </div>
        <div className="addPost__option">
          <SmileTwoTone twoToneColor="orange" />

          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default AddPost;