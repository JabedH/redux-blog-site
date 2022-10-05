import logo from "./logo.svg";
import "./App.css";
import mylogo from "./assets/lws.svg";
import search from "./assets/search.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import Blogs from "./components/Blogs";
import { useState } from "react";

let timeoutId;

function App() {
  const [result, setResult] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      const search = e.target.name.value;
      setResult(search);
    }, 300);
  };
  return (
    <Provider store={store}>
      <div className="App">
        {/* <!-- navigation --> */}
        <nav class="bg-slate-100 shadow-md">
          <div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
            <a href="index.html">
              <img class="h-10" src={mylogo} alt="Learn with Sumit" />
            </a>
          </div>
        </nav>

        {/* <!-- search --> */}

        <div>
          <form
            onSubmit={handleSearch}
            class="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
            action="
         "
          >
            <input
              class="outline-none border-none bg-gray-50 h-full w-full mr-2"
              type="search"
              name="name"
              placeholder="Search"
            />

            <button type="submit">
              <img
                class="inline h-6 cursor-pointer"
                src={search}
                alt="Search"
              />
            </button>
          </form>
        </div>

        <Blogs result={result} />
        {/* <!-- footer --> */}
        <section class="pt-6">
          <div class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400">
            <div>Copyright 2022 Learn with Sumit.</div>
            <div>
              <a
                href="https://youtube.com/learnwithsumit"
                target="_blank"
                rel="noreferrer"
              >
                YouTube Channel
              </a>
            </div>
          </div>
        </section>
      </div>
    </Provider>
  );
}

export default App;
