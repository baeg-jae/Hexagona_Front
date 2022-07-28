const MISSION_ADD_ERROR = "modal/MISSION_ADD_ERROR";
const MISSION_ADD_SUCCESS = "modal/MISSION_ADD_SUCCESS";
const MISSION_EDIT_SUCCESS = "modal/MISSION_EDIT_SUCCESS";
const MISSION_DELETE_SUCCESS = "modal/MISSION_DELETE_SUCCESS";
const MISSION_PHOTO_SUCCESS = "modal/MISSION_PHOTO_SUCCESS";

const USER_PROFILE_SUCCESS = "modal/USER_PROFILE_SUCCESS";
const USER_PROFILE_ERROR = "modal/USER_PROFILE_ERROR";
const USER_PROFILE_DUP_ERROR = "modal/USER_PROFILE_DUP_ERROR";

const COMMENT_ADD_SUCCESS = "modal/COMMENT_ADD_SUCCESS";
const COMMENT_ADD_ERROR = "modal/COMMENT_ADD_ERROR";
const COMMENT_DELETE_SUCCESS = "modal/COMMENT_DELETE_SUCCESS";

const POST_DELETE_SUCCESS = "modal/POST_DELETE_SUCCESS";

const CHAT_JOIN_ROOM = "modal/CHAT_JOIN_ROOM";

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
export function MissionPhotoModalSuccess(payload) {
  return { type: MISSION_PHOTO_SUCCESS, payload };
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

// 댓글 & 게시글 관련 액션
export function CommentAddSuccess(payload) {
  return { type: COMMENT_ADD_SUCCESS, payload };
}
export function CommentAddError(payload) {
  return { type: COMMENT_ADD_ERROR, payload };
}
export function CommentDeleteSuccess(payload) {
  return { type: COMMENT_DELETE_SUCCESS, payload };
}
export function PostDeleteSuccess(payload) {
  return { type: POST_DELETE_SUCCESS, payload };
}

// 채팅 관련 모달
export function ChatJoinModal(payload) {
  return { type: CHAT_JOIN_ROOM, payload };
}
// 초기값
const initialState = {
  MissionError: false,
  MissionSuccess: false,
  MissionEditSuccess: false,
  MissionDeleteSuccess: false,
  MissionPhotoSuccess: false,
  //
  UserChange: false,
  UserChangeError: false,
  UserChangeDupError: false,
  //
  CommentAddSuccess: false,
  CommentAddError: false,
  CommentDeleteSuccess: false,
  PostDeleteSuccess: false,
  //
  ChatJoinAlert: false,
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
    case MISSION_PHOTO_SUCCESS: {
      return { MissionPhotoSuccess: payload };
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

    case COMMENT_ADD_SUCCESS: {
      return { CommentAddSuccess: payload };
    }
    case COMMENT_ADD_ERROR: {
      return { CommentAddError: payload };
    }
    case COMMENT_DELETE_SUCCESS: {
      return { CommentDeleteSuccess: payload };
    }
    case POST_DELETE_SUCCESS: {
      return { PostDeleteSuccess: payload };
    }

    case CHAT_JOIN_ROOM: {
      return { ChatJoinAlert: payload };
    }
    default:
      return state;
  }
}
