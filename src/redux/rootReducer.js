import { combineReducers } from "redux";
import initialState from "./blogInfos.js/initialStates";
import reducer from "./filters/reducer";
console.log(reducer);
const rootReducer = combineReducers({
  filters: reducer,
  blogInfos: initialState,
});
export default rootReducer;
