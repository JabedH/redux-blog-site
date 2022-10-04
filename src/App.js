import logo from "./logo.svg";
import "./App.css";
import mylogo from "./assets/lws.svg";
import search from "./assets/search.svg";

function App() {
  return (
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
          <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {/* <!-- single card  --> */}
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>

              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      Article
                    </span>
                  </p>
                  <a href="#" class="block mt-1">
                    <p class="text-xl font-semibold text-gray-900">
                      Boost your conversion rate
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/73503432?v=4"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900 hover:underline">
                      Learn with sumit
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-16">11 Jul, 2022</time>
                      <span aria-hidden="true">&middot;</span>
                      <span> 6 min read </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single card  --> */}
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      Article
                    </span>
                  </p>
                  <a href="#" class="block mt-1">
                    <p class="text-xl font-semibold text-gray-900">
                      How to use search engine optimization to drive sales
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/73503432?v=4"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900 hover:underline">
                      Learn with sumit
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-16">08 Feb, 2022</time>
                      <span aria-hidden="true">&middot;</span>
                      <span> 11 min read </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- single card  --> */}
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      Article
                    </span>
                  </p>
                  <a href="#" class="block mt-1">
                    <p class="text-xl font-semibold text-gray-900">
                      Improve your customer experience
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/73503432?v=4"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900 hover:underline">
                      Learn with sumit
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-16">20 Mar, 2022</time>
                      <span aria-hidden="true">&middot;</span>
                      <span> 9 min read </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- single card  --> */}
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>

              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      Article
                    </span>
                  </p>
                  <a href="#" class="block mt-1">
                    <p class="text-xl font-semibold text-gray-900">
                      Boost your conversion rate
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/73503432?v=4"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900 hover:underline">
                      Learn with sumit
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-16">11 Jul, 2022</time>
                      <span aria-hidden="true">&middot;</span>
                      <span> 6 min read </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- single card  --> */}
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      Article
                    </span>
                  </p>
                  <a href="#" class="block mt-1">
                    <p class="text-xl font-semibold text-gray-900">
                      How to use search engine optimization to drive sales
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/73503432?v=4"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900 hover:underline">
                      Learn with sumit
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-16">08 Feb, 2022</time>
                      <span aria-hidden="true">&middot;</span>
                      <span> 11 min read </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- single card  --> */}
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0">
                <img
                  class="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      Article
                    </span>
                  </p>
                  <a href="#" class="block mt-1">
                    <p class="text-xl font-semibold text-gray-900">
                      Improve your customer experience
                    </p>
                  </a>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/73503432?v=4"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900 hover:underline">
                      Learn with sumit
                    </p>
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-16">20 Mar, 2022</time>
                      <span aria-hidden="true">&middot;</span>
                      <span> 9 min read </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  );
}

export default App;
