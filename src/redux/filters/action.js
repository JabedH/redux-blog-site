import { CATEGORYSEARCH, ITEMSREACH, NAMESEARCH } from "./actionTypes";

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
export const itemSearch = (itemSearch) => {
  return {
    type: ITEMSREACH,
    payload: itemSearch,
  };
};
