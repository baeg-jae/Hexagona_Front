// GOOGLE
const GOOGLE_REACT_APP_CLIENTID = process.env.REACT_APP_CLIENTID;
const GOOGLE_REACT_APP_REDIRECT_URI =
  "https://godlife.vercel.app/oauth/google/callback";
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&access_type=offline&redirect_uri=${GOOGLE_REACT_APP_REDIRECT_URI}&response_type=code&client_id=${GOOGLE_REACT_APP_CLIENTID}`;

// KAKAO
const KAKAO_REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
const KAKAO_REDIRECT_URI = "https://godlife.vercel.app/oauth/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

//Naver
const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENTID;
const NAVER_REDIRECT_URI = "https://godlife.vercel.app/oauth/naver/callback";

const STATE_STRING = process.env.REACT_APP_STATE_STRING;

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&response_type=code&state=${STATE_STRING}`;
