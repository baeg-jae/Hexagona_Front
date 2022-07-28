const MISSION_ADD_ERROR = "modal/MISSION_ADD_ERROR";
const MISSION_ADD_SUCCESS = "modal/MISSION_ADD_SUCCESS";

export function MissionAddModalError(payload) {
  return { type: MISSION_ADD_ERROR, payload };
}

export function MissionAddModalSuccess(payload) {
  return { type: MISSION_ADD_SUCCESS, payload };
}

// 초기값
const initialState = {
  MissionError: false,
  MissionSuccess: false,
};

export default function chatReducer(state = initialState, { payload, type }) {
  switch (type) {
    case MISSION_ADD_ERROR: {
      return { MissionError: payload };
    }
    case MISSION_ADD_SUCCESS: {
      return { MissionSuccess: payload };
    }
    default:
      return state;
  }
}
