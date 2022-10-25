<<<<<<< HEAD
const REDIRECT_KEY = 'http://localhost:8080/auth/Oauth/kakao';
const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_KEY}&response_type=code&prompt=login`;
=======
const REDIRECT_KEY = 'http://192.168.227.163:8080/auth/oauth/kakao';
const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_KEY}&response_type=code`;
>>>>>>> 1b6a8a48c4f2c149e5299f81ebac52811b3dac3a
