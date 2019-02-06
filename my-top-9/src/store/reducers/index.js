import { combineReducers } from "redux";

import { loginReducer } from './loginReducer';
import { cagegoryReducer } from './categoryReducer';

export default combineReducers({
  loginReducer, cagegoryReducer
});