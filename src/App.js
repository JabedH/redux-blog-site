import logo from "./logo.svg";
import "./App.css";
import mylogo from "./assets/lws.svg";

import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import Blogs from "./components/Blogs";
import { useState } from "react";
import mypic from "./assets/mypic.jpg";
import Search from "./components/Search";

function App() {
  
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
        <Search />

        <Blogs />
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
