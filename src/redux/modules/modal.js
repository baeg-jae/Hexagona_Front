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
const CHAT_JOIN_ERROR = "modal/CHAT_JOIN_ERROR";

const SIGNUP_SUCCESS = "modal/SIGNUP_SUCCESS";
const SIGNUP_ERROR = "modal/SIGNUP_ERROR";
const SIGNUP_DUP = "modal/SIGNUP_DUP";

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
export function ChatJoinModalError(payload) {
  return { type: CHAT_JOIN_ERROR, payload };
}

// 회원가입 관련 모달
export function SignUpSuccess(payload) {
  return { type: SIGNUP_SUCCESS, payload };
}
export function SignUpError(payload) {
  return { type: SIGNUP_ERROR, payload };
}
export function SignUpDup(payload) {
  return { type: SIGNUP_DUP, payload };
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
  ChatJoinError: false,
  //
  SignUpSuccess: false,
  SignUpError: false,
  SignUpDup: false,
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
    case CHAT_JOIN_ERROR: {
      return { ChatJoinError: payload };
    }

    case SIGNUP_SUCCESS: {
      return { SignUpSuccess: payload };
    }
    case SIGNUP_ERROR: {
      return { SignUpError: payload };
    }
    case SIGNUP_DUP: {
      return { SignUpDup: payload };
    }
    default:
      return state;
  }
}
