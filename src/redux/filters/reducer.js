import { CATEGORYSEARCH, NAMESEARCH } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORYSEARCH:
      return {
        ...state,
        status: action.payload,
      };
    case NAMESEARCH:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
