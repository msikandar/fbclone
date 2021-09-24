import { ActionTypes } from "../constants/action-types";
import { randomBytes } from "crypto";

const initialPostState = JSON.parse(store("posts")) || [
  {
    id: randomBytes(4).toString("hex"),
    comments: ["heoo", "hello"],
    like: true,
    profilePic:
      "https://images.unsplash.com/photo-1631791563807-d41830aa0af4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=392&q=80",
    message:
      "I'm fascinated by beautiful scenery and what we have here on this Earth.",
    timestamp: 1632025079351,
    username: "Sikandar",
    image:
      "https://images.unsplash.com/photo-1631903129315-ac063e708d35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
];

const initialStoryState = JSON.parse(store("stories")) || {
  stories: [
    {
      image:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      profileImage: "https://i.pravatar.cc/301",
      title: "Asif",
    },
    {
      image:
        "https://images.unsplash.com/photo-1631749665601-99bde3aae4d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      profileImage: "https://i.pravatar.cc/302",
      title: "Wasif",
    },
    {
      image:
        "https://images.unsplash.com/photo-1511438367161-81d958ccace4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      profileImage: "https://i.pravatar.cc/303",
      title: "Kashif",
    },
    {
      image:
        "https://images.unsplash.com/photo-1631730486784-5456119f69ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=410&q=80",
      profileImage: "https://i.pravatar.cc/304",
      title: "Zahid",
    },
    {
      image:
        "https://images.unsplash.com/photo-1604842591806-1f45c2f7e858?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      profileImage: "https://i.pravatar.cc/305",
      title: "Tahir",
    },
  ],
};

if (isNull(store("posts"))) {
  store("posts", JSON.stringify(initialPostState));
}
if (isNull(store("stories"))) {
  store("stories", JSON.stringify(initialStoryState));
}
function isNull(val) {
  //helper function
  if (val === "undefined" || val === null || val === undefined || val === "") {
    return true;
  } else {
    return false;
  }
}

function store(key, value) {
  if (typeof Storage !== "undefined" && typeof value !== "undefined") {
    localStorage.setItem(key, value);
  }

  if (value === undefined) {
    var data;
    if (typeof Storage !== "undefined") {
      data = localStorage.getItem(key);
    }
    return data;
  }
}
export const storyReducer = (state = initialStoryState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_STORY: {
      state.stories.unshift(payload); //append payload to start of stories array
      store("stories", JSON.stringify(state));
      return { ...state }; //copy updated stories to the state
    }

    default:
      return state;
  }
};

export const postReducer = (state = initialPostState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_POST: {
      state.unshift(payload);
      store("posts", JSON.stringify([...state]));
      return [...state];
    }
    case ActionTypes.ADD_COMMENT: {
      console.log(payload);
      let temp = [...state];
      temp.map((list) => {
        if (list.id === payload.id) {
          list.comments.unshift(payload.comment);
        }
        return list;
      });
      store("posts", JSON.stringify(temp));
      return temp;
    }
    case ActionTypes.ADD_LIKE: {
      console.log(payload);
      let temp = [...state];
      temp.map((list) => {
        if (list.id === payload.id) {
          list.like = !list.like;
        }
        return list;
      });
      store("posts", JSON.stringify(temp));
      return temp;
    }
    default:
      return state;
  }
};
