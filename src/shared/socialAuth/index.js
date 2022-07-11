// GOOGLE
const GOOGLE_REACT_APP_CLIENTID = process.env.REACT_APP_CLIENTID;
const GOOGLE_REACT_APP_REDIRECT_URI =
  "http://localhost:3000/oauth/google/callback";
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&access_type=offline&redirect_uri=${GOOGLE_REACT_APP_REDIRECT_URI}&response_type=code&client_id=${GOOGLE_REACT_APP_CLIENTID}`;

// KAKAO
const KAKAO_REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
const KAKAO_REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
