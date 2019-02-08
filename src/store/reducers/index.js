import { combineReducers } from "redux";

import { loginReducer } from './loginReducer';
import { categoryReducer } from './categoryReducer';
import { topNineReducer } from './topNineReducer';

export default combineReducers({
  loginReducer, categoryReducer, topNineReducer
});