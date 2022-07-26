import apis from "shared/api/main";

const ADD_OTHER_PIC = "chat/ADD_OTHER_PIC";

export const getUser = (payload) => ({
  type: ADD_OTHER_PIC,
  payload,
});

// 초기값
const initialState = {
  otherPic: "",
};

export default function chatReducer(state = initialState, { payload, type }) {
  switch (type) {
    case ADD_OTHER_PIC:
      return {
        ...state,
        isLogin: payload,
        newUser: payload.newUser,
      };

    default:
      return state;
  }
}
