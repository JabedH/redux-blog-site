import { CATEGORYSEARCH } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (state) {
    case CATEGORYSEARCH:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
