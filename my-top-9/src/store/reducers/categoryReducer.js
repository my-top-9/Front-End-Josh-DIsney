import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
} from '../actions';

const initialState = {
  isFetchingCategories: false,
  categories: [],
  error: null
}

export const cagegoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CATEGORIES_START:
      return {
        ...state,
        isFetchingCategories: true,
        error: null
      }
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetchingCategories: false,
        caegories: action.payload,
        error: null
      }
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetchingCategories: false,
        error: action.payload
      }
    default:
      return state
  }
}