const REACT_APP_CLIENTID = process.env.REACT_APP_CLIENTID;
const REACT_APP_REDIRECT_URI = 'http://localhost:3000/oauth/google/callback';

export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&access_type=offline&redirect_uri=${REACT_APP_REDIRECT_URI}&response_type=code&client_id=${REACT_APP_CLIENTID}`;
