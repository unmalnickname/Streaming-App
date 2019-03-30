import { combineReducers } from "redux";
import { reducer as form_Reducer } from "redux-form";
import authReducer from "./authReducer";
export default combineReducers({
  auth: authReducer,
  form: form_Reducer
});
