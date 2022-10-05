import { CATEGORYSEARCH } from "./actionTypes";

export const categorySearch = (status) => {
  return {
    type: CATEGORYSEARCH,
    payload: status,
  };
};