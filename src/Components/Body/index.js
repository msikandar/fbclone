import { Row, Col } from "antd";
import React from "react";
import Stories from "../Body/stories/index";
import AddPost from "../Body/AddPost/index";
import Post from "./Post";
import Contacts from "./Contacts";
import { useSelector } from "react-redux";

function Index() {
  const styles = {
    border: {
      border: "",
    },
  };
  const posts = useSelector((state) => state.postData);
  console.log(posts, "i am the post data");
  return (
    <div style={{ paddingTop: "10px" }}>
      <Row>
        <Col xs={0} sm={0} md={0} lg={2} xl={4}></Col>
        <Col xs={24} sm={24} md={16} lg={14} xl={12} style={styles.border}>
          <Stories />
          <AddPost />
          {posts.map((post, index) => {
            return (
              <Post
                key={index}
                id={post.id}
                profilePic={post.profilePic}
                message={post.message}
                timestamp={post.timestamp}
                username={post.username}
                image={post.image}
                comments={post.comments}
                like={post.like}
              />
            );
          })}
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={0} sm={0} md={7} lg={7} xl={7} style={styles.border}>
          <Contacts />
        </Col>
      </Row>
    </div>
  );
}

export default Index;
