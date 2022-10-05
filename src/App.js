import logo from "./logo.svg";
import "./App.css";
import mylogo from "./assets/lws.svg";
import search from "./assets/search.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import Blogs from "./components/Blogs";
import { useState } from "react";
import mypic from "./assets/mypic.jpg";
let timeoutId;

function App() {
  const [result, setResult] = useState("");
  // const [clear, setClear] = useState("");
  // console.log(clear);
  const handleSearch = (e) => {
    e.preventDefault();
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      const search = e.target.name.value;
      setResult(search);
      e.target.name.value = "";
      console.log(search);
    }, 300);
  };
  // const handlerClear = (e) => {
  //   if (e.target.value === "") {
  //     setClear(true);
  //   }
  // };
  return (
    <Provider store={store}>
      <div className="App ">
        {/* <!-- navigation --> */}
        <nav class="bg-slate-100 shadow-md">
          <div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
            <a href="index.html">
              <div className="flex items-center gap-5 mx-10">
                <img class="h-10 rounded-2xl" src={mypic} alt="jabed" />
                <h3 className="font-bold">Jabed H Tusar</h3>
              </div>
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
              // onChange={handlerClear}
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
        <section class="pt-6 ">
          <div class="text-sm text-gray-800 ">
            <div>
              <h3 className="text-center p-2">Copyright 2022 Jabed H Tusar.</h3>
            </div>
          </div>
        </section>
      </div>
    </Provider>
  );
}

export default App;
