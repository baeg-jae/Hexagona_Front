import apis from "shared/api/main";

const PREV_POST_CHAT = "chat/PREV_POST_CHAT";

export function prevPostChat(payload) {
  return { type: PREV_POST_CHAT, payload };
}

// 초기값
const initialState = {};

export const __prevPostChat = (payload) => {
  return async function (dispatch) {
    try {
      const loadData = await apis.getChatSetting(payload);
      dispatch(prevPostChat(loadData.data));
    } catch (error) {}
  };
};

export default function chatReducer(state = initialState, { payload, type }) {
  switch (type) {
    case PREV_POST_CHAT: {
      return { post_list: payload };
    }
    default:
      return state;
  }
}
