import { LOGIN, LOGOUT } from '../types/userTypes';

const logIn = (userToken) => {
  return {
    type: LOGIN,
    userToken
  };
};

const logOut = () => {
  return {
    type: LOGOUT
  };
};

export { logIn, logOut };
