import api from "shared/api/core";

// 액션 타입
const USER_LOGIN = "user/USER_LOGIN";
const USER_IDCHECK = "user/USER_IDCHECK";
const USER_LOGOUT = "user/USER_LOGOUT";
const USER_UPDATE = "user/USER_UPDATE";
const USER_GET = "user/USER_GET";
const GET_REQUEST_LOADING = "user/GET_REQUEST_LOADING";

// 액션 함수
const userLogin = (payload) => ({ type: USER_LOGIN, payload });
const userIdCheck = (payload) => ({ type: USER_IDCHECK, payload });
const logout = (payload) => ({ type: USER_LOGOUT, payload });
const updateUser = (payload) => ({ type: USER_UPDATE, payload });
const getUser = (payload) => ({ type: USER_GET, payload });
const getRequestLoading = (payload) => ({ type: GET_REQUEST_LOADING, payload });

// 회원가입 - 서버에 저장
export const __userSignUp =
  ({ nickName, email, number, location, pw, gender, birth, fileImage }) =>
  async (dispatch) => {
    console.log(
      nickName,
      email,
      number,
      location,
      pw,
      gender,
      birth,
      fileImage
    );
    dispatch(getRequestLoading(true));
    try {
      const data = await api.post(`/user/signup`, {
        name: nickName,
        email: email,
        p_number: number,
        location: location,
        password: pw,
        gender: gender,
        birth: birth,
        profile_img: fileImage,
      });
      console.log(data);
    } catch (error) {
      alert("Sign Up Error:" + error);
    } finally {
      dispatch(getRequestLoading(false));
    }
  };

// 중복체크
export const __userIdCheck =
  ({ id }) =>
  async (dispatch) => {
    dispatch(getRequestLoading(true));
    try {
      const data = await api.get(`/user/check/nickname/${id}`);
      data.data.result
        ? alert("사용가능한 아이디입니다")
        : alert("이미 있는 아이디 입니다");
      dispatch(userIdCheck(data.data.result));
    } catch (error) {
      alert("이미 있는 아이디 입니다");
    } finally {
      dispatch(getRequestLoading(false));
    }
  };

export const __userEmailCheck =
  ({ email }) =>
  async (dispatch) => {
    console.log(email);
    dispatch(getRequestLoading(true));
    try {
      const data = await api.post(`/user/signup/checkEmail`, {
        email: email,
      });
      console.log(data);
      // data.data.result
      //   ? alert("사용가능한 이메일입니다")
      //   : alert("이미 있는 이메일 입니다");
      // dispatch(userEmailCheck(data.data.result));
    } catch (error) {
      // alert("이미 있는 이메일 입니다");
    } finally {
      dispatch(getRequestLoading(false));
    }
  };

// 로그인
export const __userSignIn =
  ({ email, password }) =>
  async (dispatch) => {
    console.log(email, password);
    dispatch(getRequestLoading(true));
    try {
      const data = await api.post(`/user/login`, {
        email: email,
        password: password,
      });
      console.log(data);
      // localStorage.setItem("Authorization", data.data.token);
      // localStorage.setItem("username", data.data.nickname);
      // dispatch(userLogin(data.data.result));
    } catch (error) {
      alert("아이디 혹은 비밀번호를 체크해주세요");
    } finally {
      dispatch(getRequestLoading(false));
    }
  };

// 카카오 로그인
export const __kakaoSignIn = (code) => async (dispatch) => {
  dispatch(getRequestLoading(true));
  try {
    const data = await api.get(`/oauth/kakao/callback?code=${code}`);
    if (data.headers.authorization !== undefined) {
      localStorage.setItem("Authorization", data.headers.authorization);
    }
    dispatch(userLogin(data.data));
  } catch (error) {
    // alert('아이디 혹은 비밀번호를 체크해주세요')
  } finally {
    dispatch(getRequestLoading(false));
  }
};

export const __googleSignIn = (code) => async (dispatch) => {
  dispatch(getRequestLoading(true));
  try {
    const data = await api.get(
      // `/oauth/google/callback?code=${code}`
      `/oauth/google/callback?code=${code}&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=none`
    );
    if (data.headers.authorization !== undefined) {
      localStorage.setItem("Authorization", data.headers.authorization);
    }
    dispatch(userLogin(data.data));
  } catch (error) {
    // alert('아이디 혹은 비밀번호를 체크해주세요')
  } finally {
    dispatch(getRequestLoading(false));
  }
};

// 네이버 로그인
export const __naverSignIn = (code) => async (dispatch) => {
  dispatch(getRequestLoading(true));
  try {
    const data = await api.get(`/user/naver/callback?code=${code}`);
    localStorage.setItem("Authorization", data.data.token);
    localStorage.setItem("username", data.data.nickname);
    dispatch(userLogin(data.data.result));
  } catch (error) {
    // alert('아이디 혹은 비밀번호를 체크해주세요')
  } finally {
    dispatch(getRequestLoading(false));
  }
};

// 로그아웃
export const __logOut = () => (dispatch) => {
  localStorage.clear();
  const temp = false;
  dispatch(logout(temp));
};

// 유저정보 수정
export const __userUpdate =
  ({ address, phone, postAddress }) =>
  async (dispatch) => {
    const myToken = localStorage.getItem("Authorization");
    dispatch(getRequestLoading(true));
    try {
      const data = await api.patch(
        `/user/update`,
        {
          address: address,
          phone: phone,
          postAddress: postAddress,
        },
        {
          headers: {
            Authorization: `Bearer ${myToken}`,
          },
        }
      );
      dispatch(updateUser(data.data));
      // alert('수정에 성공하였습니다.')
    } catch (error) {
      // alert("다른 사람의 질문은 완료 할 수 없습니다")
    } finally {
      dispatch(getRequestLoading(false));
    }
  };

// 유저정보 가져오기
export const __getUser = () => async (dispatch) => {
  const myToken = localStorage.getItem("Authorization");
  dispatch(getRequestLoading(true));
  try {
    const data = await api.get(`/user/my-page`, {
      headers: {
        Authorization: `Bearer ${myToken}`,
      },
    });
    dispatch(getUser(data.data.user));
    // alert('수정에 성공하였습니다.')
  } catch (error) {
    // alert("다른 사람의 질문은 완료 할 수 없습니다")
  } finally {
    dispatch(getRequestLoading(false));
  }
};

// 초기값
const initialState = {
  loading: false,
  error: null,
  idCheck: false,
  emailCheck: false,
  isLogin: false,
  address: "",
  phone: 0,
};

export default function userReducer(state = initialState, { payload, type }) {
  switch (type) {
    case USER_IDCHECK:
      return {
        ...state,
        idCheck: payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        isLogin: payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLogin: payload,
      };
    case USER_GET:
      return {
        ...state,
        address: payload.address,
        phone: payload.phone,
      };
    case GET_REQUEST_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
}
