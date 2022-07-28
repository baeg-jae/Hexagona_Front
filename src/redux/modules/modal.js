const MISSION_ADD_ERROR = "modal/MISSION_ADD_ERROR";
const MISSION_ADD_SUCCESS = "modal/MISSION_ADD_SUCCESS";
const MISSION_EDIT_SUCCESS = "modal/MISSION_EDIT_SUCCESS";
const MISSION_DELETE_SUCCESS = "modal/MISSION_DELETE_SUCCESS";

const USER_PROFILE_SUCCESS = "modal/USER_PROFILE_SUCCESS";
const USER_PROFILE_ERROR = "modal/USER_PROFILE_ERROR";
const USER_PROFILE_DUP_ERROR = "modal/USER_PROFILE_DUP_ERROR";

//  목표 관련 액션
export function MissionAddModalError(payload) {
  return { type: MISSION_ADD_ERROR, payload };
}

export function MissionAddModalSuccess(payload) {
  return { type: MISSION_ADD_SUCCESS, payload };
}
export function MissionEditModalSuccess(payload) {
  return { type: MISSION_EDIT_SUCCESS, payload };
}
export function MissionDeleteModalSuccess(payload) {
  return { type: MISSION_DELETE_SUCCESS, payload };
}

//  유저 관련 액션
export function UserProfileModalError(payload) {
  return { type: USER_PROFILE_ERROR, payload };
}

export function UserProfileModalDupError(payload) {
  return { type: USER_PROFILE_DUP_ERROR, payload };
}

export function UserProfileModalSuccess(payload) {
  return { type: USER_PROFILE_SUCCESS, payload };
}

// 초기값
const initialState = {
  MissionError: false,
  MissionSuccess: false,
  MissionEditSuccess: false,
  MissionDeleteSuccess: false,
  UserChange: false,
  UserChangeError: false,
  UserChangeDupError: false,
};

export default function chatReducer(state = initialState, { payload, type }) {
  switch (type) {
    case MISSION_ADD_ERROR: {
      return { MissionError: payload };
    }
    case MISSION_ADD_SUCCESS: {
      return { MissionSuccess: payload };
    }
    case MISSION_EDIT_SUCCESS: {
      return { MissionEditSuccess: payload };
    }
    case MISSION_DELETE_SUCCESS: {
      return { MissionDeleteSuccess: payload };
    }

    case USER_PROFILE_SUCCESS: {
      return { UserChange: payload };
    }
    case USER_PROFILE_ERROR: {
      return { UserChangeError: payload };
    }
    case USER_PROFILE_DUP_ERROR: {
      return { UserChangeDupError: payload };
    }
    default:
      return state;
  }
}
