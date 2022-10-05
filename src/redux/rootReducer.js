import { combineReducers } from "redux";
import reducer from "./filters/reducer";
const rootReducer = combineReducers({
  filters: reducer,
});
export default rootReducer;
