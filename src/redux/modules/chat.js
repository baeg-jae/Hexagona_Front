const ADD_CHAT_MSG = "chat/ADD_CHAT_MSG";

export const addChat = (payload) => ({
  type: ADD_CHAT_MSG,
  payload,
});

// 초기값
const initialState = {
  otherPic: "",
  message: [],
};

export default function chatReducer(state = initialState, { payload, type }) {
  console.log(payload, type);
  switch (type) {
    case ADD_CHAT_MSG:
      console.log(payload);
      return {
        ...state,
        message: [...state.message, payload],
      };

    default:
      return state;
  }
}
