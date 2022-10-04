import { CATEGORYSEARCH, TITLESEARCH } from "./actionTypes";

export const categorySearch = (status) => {
  return {
    type: CATEGORYSEARCH,
    payload: status,
  };
};
// export const titleSearch = (status) => {
//   return {
//     type: TITLESEARCH,
//     payload: status,
//   };
// };
