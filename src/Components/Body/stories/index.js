import React, { useState, useEffect } from "react";
import Story from "../stories/story/index";
import { useSelector, useDispatch } from "react-redux";
import { addStory } from "../../../redux/actions/appActions";
import { PlusCircleFilled } from "@ant-design/icons";
import { Modal, Input } from "antd";

function Index() {
  const stories = useSelector((state) => state.storyData.stories);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [input, setInput] = useState("");
  const showModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {}, [dispatch]);
  const handleOk = () => {
    if (input !== "") {
      dispatch(
        addStory({
          image: input,
          profileImage: "https://i.pravatar.cc/301",
          title: "User",
        })
      );
    }

    setInput("");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div
      className="site-card-wrapper"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      {stories.map((story, index) => {
        if (index <= 4) {
          return (
            <Story
              key={index}
              image={story.image}
              profileSrc={story.profileImage}
              title={story.title}
            />
          );
        } else return null;
      })}
      <PlusCircleFilled
        style={{
          position: "absolute",
          right: "0px",
          top: "76px",
          fontSize: "40px",
          color: "#242526",
          background: "white",
          borderRadius: "100px",
          boxShadow: "0px 5px 17px -7px rgba(0, 0, 0, 0.75)",
          transition: "transform 100ms ease-in",
          cursor: "pointer",
        }}
        onClick={showModal}
      />
      <Modal
        title="Add Story"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Image Url"
          onChange={(e) => handleInput(e)}
          value={input}
        />
      </Modal>
    </div>
  );
}

export default Index;
