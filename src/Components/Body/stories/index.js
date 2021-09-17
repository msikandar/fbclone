import React from "react";
import Story from "../stories/story/index";

const img =
  "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
const img2 =
  "https://images.unsplash.com/photo-1631749665601-99bde3aae4d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";
const img3 =
  "https://images.unsplash.com/photo-1511438367161-81d958ccace4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80";
const img4 =
  "https://images.unsplash.com/photo-1631730486784-5456119f69ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=410&q=80";
const img5 =
  "https://images.unsplash.com/photo-1628191010210-a59de33e5941?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";

function index() {
  return (
    <div className="site-card-wrapper" style={{ display: "flex", justifyContent: "space-around" }}>
      <Story
        image={img}
        profileSrc="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        title="Asif"
      />
      <Story
        image={img2}
        profileSrc="https://images.unsplash.com/photo-1622810838327-d7d664aa176c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        title="Wasif"
      />
      <Story
        image={img3}
        profileSrc={img}
        title="Ali Zafar"
      />
      <Story
        image={img4}
        profileSrc={img2}
        title="Koof Arorr"
      />
      <Story
        image={img5}
        profileSrc={img3}
        title="Brook James"
      />
    </div>
  );
}

export default index;
