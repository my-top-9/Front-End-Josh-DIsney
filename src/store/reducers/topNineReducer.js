import {
  ADD_TOPNINE_START,
  ADD_TOPNINE_SUCCESS,
  ADD_TOPNINE_FAILURE
} from '../actions';

const initialState = {
  isUpdatingUser: false,
  topNineCards: [],
  error: null
}

export const topNineReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TOPNINE_START:
      return {
        ...state,
        isUpdatingUser: true,
        error: null
      }
    case ADD_TOPNINE_SUCCESS:
      return {
        ...state,
        isUpdatingUser: false,
        topNineCards: action.payload,
        error: null
      }
    case ADD_TOPNINE_FAILURE:
      return {
        ...state,
        isUpdatingUser: false,
        error: action.payload
      }
    default:
      return state
  }
}