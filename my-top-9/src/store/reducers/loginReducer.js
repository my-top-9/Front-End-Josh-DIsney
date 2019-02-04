import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from '../actions';

const initalState = {
  isRegistering: false,
  isLoggedIn: false,
  isLoggingIn: false,
  users: [],
  error: null
}

export const loginReducer = (state = initalState, action) => {
  switch(action.type) {
    case REGISTER_USER_START:
      return {
        ...state,
        isRegistering: true,
        error: null
      }
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isRegistering: true,
        users: action.payload,
        error: null
      }
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.payload
      }
    case USER_LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: null
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        users: action.payload,
        error: null
      }
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        error: action.payload
      }
    default:
      return state;
  }
}