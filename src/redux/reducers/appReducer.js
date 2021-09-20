import { ActionTypes } from "../constants/action-types";

const initialStoryState = {
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
        "https://images.unsplash.com/photo-1628191010210-a59de33e5941?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      profileImage: "https://i.pravatar.cc/305",
      title: "Tahir",
    },
  ],
};

const initialPostState = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    message: "Beautiful",
    timestamp: 1632025079351,
    username: "sikandar",
    image:
      "https://images.unsplash.com/photo-1631903129315-ac063e708d35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  },
];

export const storyReducer = (state = initialStoryState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_STORY: {
      let tempstories = [...initialStoryState.stories];
      tempstories.unshift(payload); //append payload to start of stories array
      const updatedstories = [...tempstories];
      return { ...state, stories: updatedstories }; //copy updated stories to the state
    }

    default:
      return state;
  }
};

export const postReducer = (state = initialPostState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_POST: {
      initialPostState.push(payload);
      return [...initialPostState];
    }
    default:
      return state;
  }
};
