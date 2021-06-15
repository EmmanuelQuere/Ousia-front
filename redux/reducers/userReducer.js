import Cookies from 'js-cookie';
import { LOGIN, LOGOUT } from '../types/userTypes';

const initialState = {
  token: Cookies.get('token') || null,
  isLoggedIn: Cookies.get('isLoggedIn') || false
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.userToken,
        isLoggedIn: true
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isLoggedIn: false
      };
    default:
      return state;
  }
}

export default userReducer;
