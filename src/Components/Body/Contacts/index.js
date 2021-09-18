import React from "react";
import { List, Avatar } from "antd";
import "./index.css";

function Contacts() {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  return (
      <div>
     
      <List
        size="large"
        className="list"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={{ border: "0px solid #242526" }}>
            <List.Item.Meta
              avatar={
                <Avatar
                  size={50}
                  src="https://images.unsplash.com/photo-1622849026560-7e723676e3d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                />
              }
              title={
                <a style={{ color: "white" }} href="https://ant.design">
                  {item.title}
                </a>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Contacts;
