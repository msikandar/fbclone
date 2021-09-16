import { Row, Col } from "antd";
import React from "react";

function index() {
  const styles = {
    border: {
      border: "1px solid red",
    },
  };
  return (
    <div style={{ padding: "10px" }}>
      <Row>
        <Col xs={24} sm={24} md={18} lg={16} xl={16} style={styles.border}>
          col-12
        </Col>
        <Col xs={0} sm={0} md={6} lg={8} xl={8} style={styles.border}>
          col-12
        </Col>
      </Row>
    </div>
  );
}

export default index;
