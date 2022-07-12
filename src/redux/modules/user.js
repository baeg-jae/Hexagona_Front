import api from "shared/api/core";
const USER_LOGIN = "user/USER_LOGIN";
const userLogin = (payload) => ({ type: USER_LOGIN, payload });

// 카카오 로그인
export const __kakaoSignIn = (code) => async (dispatch) => {
  const data = await api.get(`/oauth/kakao/callback?code=${code}`);
  console.log(data);
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
  console.log(data);
  if (data.headers.authorization !== undefined) {
    localStorage.setItem("Authorization", data.headers.authorization);
  }
  dispatch(userLogin(data.data));
};

// 네이버 로그인
export const __naverSignIn = (code) => async (dispatch) => {
  const data = await api.get(`/user/naver/callback?code=${code}`);
  localStorage.setItem("Authorization", data.headers.authorization);
  dispatch(userLogin(data.data));
};

// 초기값
const initialState = {
  isLogin: false,
  newUser: true,
};

export default function userReducer(state = initialState, { payload, type }) {
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogin: payload,
        newUser: payload.newUser,
      };
    default:
      return state;
  }
}
