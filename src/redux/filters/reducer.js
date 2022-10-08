import { CATEGORYSEARCH, ITEMSREACH, NAMESEARCH } from "./actionTypes";
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
    case ITEMSREACH:
      return {
        ...state,
        itemSearch: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
