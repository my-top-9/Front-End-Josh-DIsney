import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_START,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from '../actions';

const initialState = {
  isRegistering: false,
  isLoggingIn: false,
  isLoggingOut:false,
  isGetting: false,
  isLoggedIn: false,
  user: {},
  error: null
}

export const loginReducer = (state = initialState, action) => {
  switch(action.type) { 
    case GET_USER_START:
      return {
        ...state,
        isGetting: true,
        error: null
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        isGetting: false,
        user: action.payload,
        error: null
      }
    case GET_USER_FAILURE:
      return {
        ...state,
        isGetting: false,
        error: action.payload
      }
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