import { Row, Col } from "antd";
import React from "react";
import Stories from "../Body/stories/index";
import AddPost from "../Body/AddPost/index";
import Post from "./Post";
import Contacts from "./Contacts";

function index() {
  const styles = {
    border: {
      border: "",
    },
  };
  return (
    <div style={{ paddingTop: "10px" }}>
      <Row>
        <Col xs={0} sm={0} md={0} lg={2} xl={4}></Col>
        <Col xs={24} sm={24} md={16} lg={14} xl={12} style={styles.border}>
          <Stories />
          <AddPost />
          <Post
            profilePic="https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            message="Hello"
            timestamp={new Date().getTime()}
            username="sikandar"
            image="https://images.unsplash.com/photo-1535468665140-8af0686eb464?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={0} sm={0} md={7} lg={7} xl={7} style={styles.border}>
          <Contacts/>
        </Col>
      </Row>
    </div>
  );
}

export default index;
