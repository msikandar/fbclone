import React, { useState } from "react";
import { Input } from "antd";
import "./index.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addComment } from "../../../../redux/actions/appActions";

function Comments({ id }) {
  const [input, setinput] = useState("");
  const posts = useSelector((state) => state.postData);
  const dispatch = useDispatch();
  const post = posts.filter((post) => post.id === id);
  console.log(post);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(addComment(input, id));
    setinput("");
  };
  console.log(id);
  return (
    <div>
      <form>
        <Input
          placeholder="Add Comments"
          autoFocus
          className="input"
          onChange={(e) => {
            setinput(e.target.value);
          }}
          value={input}
          type="text"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          style={{ display: "none" }}
        >
          Hidden Button
        </button>
      </form>
      {post[0].comments.map((comment, index) => (
        <li key={index}>{comment}</li>
      ))}
    </div>
  );
}

export default Comments;
