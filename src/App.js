import logo from "./logo.svg";
import "./App.css";
import mylogo from "./assets/lws.svg";
import search from "./assets/search.svg";
import { Provider } from "react-redux";
import store from "./redux/store";
import Blogs from "./components/Blogs";
import articles from "./data/info.json";

function App() {
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
        <div class="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
          <input
            class="outline-none border-none bg-gray-50 h-full w-full mr-2"
            type="search"
            name="search"
            placeholder="Search"
          />
          <img class="inline h-6 cursor-pointer" src={search} alt="Search" />
        </div>

        <section class="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
          <div class="absolute inset-0">
            <div class="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
              <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                ALL BLOGS ARE HERE
              </h2>
              <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                libero labore natus atque, ducimus sed.
              </p>
            </div>

            {/* <!-- card grid  --> */}
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {articles.map((article) => (
                <Blogs />
              ))}
            </div>
          </div>
        </section>

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
