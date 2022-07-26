import api from "shared/api/core";
import apis from "shared/api/main";

const USER_LOGIN = "user/USER_LOGIN";
const USER_PROFILETEMP = "user/USER_PROFILETEMP";
const USER_PROFILE = "user/USER_PROFILE";
const GET_USER = "user/GET_USER";

const userLogin = (payload) => ({ type: USER_LOGIN, payload });
export const addUserProfileTemp = (payload) => ({
  type: USER_PROFILETEMP,
  payload,
});
export const addUserProfile = (payload) => ({
  type: USER_PROFILE,
  payload,
});

const getUser = (payload) => ({
  type: GET_USER,
  payload,
});

// Get 로그인 한 유저정보
export const __getUser = () => async (dispatch) => {
  const data = await apis.getUser();
  dispatch(getUser(data.data));
};

// 카카오 로그인
export const __kakaoSignIn = (code) => async (dispatch) => {
  const data = await api.get(`/oauth/kakao/callback?code=${code}`);
  if (data.headers.authorization !== undefined) {
    localStorage.setItem("Authorization", data.headers.authorization);
  }
  dispatch(userLogin(data.data));
};

// 구글 로그인
export const __googleSignIn = (code) => async (dispatch) => {
  const data = await api.get(
    `/oauth/google/callback?code=${code}&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=none`
  );
  if (data.headers.authorization !== undefined) {
    localStorage.setItem("Authorization", data.headers.authorization);
  }
  dispatch(userLogin(data.data));
};

// 네이버 로그인
export const __naverSignIn = (code, state) => async (dispatch) => {
  const data = await api.get(
    `/oauth/naver/callback?code=${code}&state=${state}`
  );
  if (data.headers.authorization !== undefined) {
    localStorage.setItem("Authorization", data.headers.authorization);
  }
  dispatch(userLogin(data.data));
};

// 초기값
const initialState = {
  userId: 0,
  nickname: "",
  isLogin: false,
  newUser: true,
  profileTempImg: "",
  profileImg: "",
};

export default function userReducer(state = initialState, { payload, type }) {
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogin: payload,
        newUser: payload.newUser,
      };
    case USER_PROFILETEMP:
      return {
        ...state,
        profileTempImg: payload.profile,
      };

    case USER_PROFILE:
      return {
        ...state,
        profileImg: payload.profileImg,
      };
    case GET_USER:
      return {
        ...state,
        nickname: payload.nickname,
        userId: payload.userId,
      };
    default:
      return state;
  }
}
