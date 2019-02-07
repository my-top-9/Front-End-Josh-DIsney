import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  DELETE_CATEGORIES_START,
  DELETE_CATEGORIES_SUCCESS,
  DELETE_CATEGORIES_FAILURE,
} from '../actions';

const initialState = {
  isFetchingCategories: false,
  isDeleting: false,
  categories: [],
  error: null
}

export const categoryReducer = (state = initialState, action) => {
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
        categories: action.payload,
        error: null
      }
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetchingCategories: false,
        error: action.payload
      }
      case DELETE_CATEGORIES_START:
      return {
        ...state,
        isDeleting: true,
        error: null
      }
    case DELETE_CATEGORIES_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        categories: action.payload,
        error: null
      }
    case DELETE_CATEGORIES_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      }
    default:
      return state
  }
}