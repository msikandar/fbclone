import { Row, Col } from "antd";
import React from "react";
import Stories from "../Body/stories/index";
import AddPost from "../Body/AddPost/index";

function index() {
  const styles = {
    border: {
      border: "1px solid red",
    },
  };
  return (
    <div style={{ paddingTop: "20px" }}>
      <Row>
        <Col xs={0} sm={0} md={0} lg={2} xl={4}></Col>
        <Col xs={24} sm={24} md={16} lg={15} xl={13} style={styles.border}>
          <Stories />
          <AddPost />
        </Col>
        <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
        <Col xs={0} sm={0} md={7} lg={6} xl={6} style={styles.border}>
          contacts
        </Col>
      </Row>
    </div>
  );
}

export default index;
