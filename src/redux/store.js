import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./rootReducer";
import reducer from "./filters/reducer";
const store = createStore(reducer, composeWithDevTools());
export default store;
