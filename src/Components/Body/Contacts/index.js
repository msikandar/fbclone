import React from "react";
import { List, Avatar } from "antd";
import "./index.css";

function Contacts() {
  const contacts = [
    {
      title: "Asif Ahmed",
      image: "https://i.pravatar.cc/301",
    },
    {
      title: "Zahid Ali",
      image: "https://i.pravatar.cc/302",
    },
    {
      title: "Brook James",
      image: "https://i.pravatar.cc/303",
    },
    {
      title: "Haarish",
      image: "https://i.pravatar.cc/304",
    },
    {
      title: "Asif Ahmed",
      image: "https://i.pravatar.cc/301",
    },
    {
      title: "Zahid Ali",
      image: "https://i.pravatar.cc/302",
    },
    {
      title: "Brook James",
      image: "https://i.pravatar.cc/303",
    },
    {
      title: "Haarish",
      image: "https://i.pravatar.cc/304",
    },
    {
      title: "Asif Ahmed",
      image: "https://i.pravatar.cc/301",
    },
    {
      title: "Zahid Ali",
      image: "https://i.pravatar.cc/302",
    },
    {
      title: "Brook James",
      image: "https://i.pravatar.cc/303",
    },
    {
      title: "Haarish",
      image: "https://i.pravatar.cc/304",
    },
  ];
  return (
    <div>
      <List
        size="large"
        className="list"
        itemLayout="horizontal"
        dataSource={contacts}
        renderItem={(item) => (
          <List.Item style={{ border: "0px solid #242526" }}>
            <List.Item.Meta
              avatar={<Avatar size={50} src={item.image} />}
              title={<p style={{ color: "white", paddingTop:"12px" }}>{item.title}</p>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Contacts;
