import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_START,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE
} from '../actions';

const initalState = {
  isFetching: false,
  isRegistering: false,
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut:false,
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
        isRegistering: false,
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
        error: null
      }
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        error: action.payload
      }
    case USER_LOGOUT_START:
      return {
        ...state,
        isLoggingOut: true,
        error: null
      }
    case USER_LOGOUT_SUCCESS:
    return {
      ...state,
      isLoggingOut: false,
      isLoggedIn: false,
      error: null
    }
    case USER_LOGOUT_FAILURE:
    return {
      ...state,
      isLoggingOut: false,
      error: action.payload
    }
    default:
      return state;
  }
}