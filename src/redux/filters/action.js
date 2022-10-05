import { CATEGORYSEARCH, NAMESEARCH } from "./actionTypes";

export const categorySearch = (status) => {
  return {
    type: CATEGORYSEARCH,
    payload: status,
  };
};
export const nameSearch = (name) => {
  return {
    type: NAMESEARCH,
    payload: name,
  };
};
