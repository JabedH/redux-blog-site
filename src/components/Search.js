import React from "react";
import { useDispatch, useSelector } from "react-redux";
import search from "../assets/search.svg";
import { itemSearch } from "../redux/filters/action";

// let timeoutId;
const Search = () => {
  const dispatch = useDispatch();
  let debounce = (fn, delay) => {
    let timeoutId;
    console.log(timeoutId?.itemSearch);
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  const setSearchResult = (value) => {
    dispatch(itemSearch(value));
  };
  const setDebounce = debounce(setSearchResult, 500);

  const handleSearch = (e) => {
    const allSearch = e.target.value;
    {
      allSearch
        ? dispatch(setDebounce(allSearch))
        : dispatch(itemSearch(allSearch));
    }
  };
  return (
    <div>
      <form
        class="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        action="
         "
      >
        <input
          onChange={handleSearch}
          class="outline-none border-none bg-gray-50 h-full w-full mr-2"
          type="search"
          name="search"
          placeholder="Search"
        />

        <button type="submit">
          <img class="inline h-6 cursor-pointer" src={search} alt="Search" />
        </button>
      </form>
    </div>
  );
};

export default Search;
