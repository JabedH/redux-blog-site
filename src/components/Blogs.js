import React, { useState } from "react";
import BlogArticle from "./BlogArticle";
import articles from "../data/info.json";
import { useDispatch, useSelector } from "react-redux";
import { categorySearch, nameSearch } from "../redux/filters/action";

const Blogs = () => {
  const dispatch = useDispatch();
  const handleSelection = (status) => {
    dispatch(categorySearch(status));
  };
  const handleNameSelect = (name) => {
    dispatch(nameSearch(name));
  };
  const filters = useSelector((state) => state);
  const { status, name } = filters;
  console.log(filters);
  return (
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
        {filters.status !== "All" && (
          <div
            onClick={() => handleSelection("All")}
            className=" flex cursor-pointer"
          >
            <h3 className=" text-start bg-gray-200 px-3 rounded-3xl">
              {status}X
            </h3>
          </div>
        )}
        {filters.name !== "All" && (
          <div
            onClick={() => handleNameSelect("All")}
            className=" flex cursor-pointer"
          >
            <h3 className=" text-start bg-gray-200 px-3 rounded-3xl">
              {name}X
            </h3>
          </div>
        )}
        {/* <!-- card grid  --> */}
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {articles
            .filter((article) => {
              switch (status) {
                case "Article":
                  return article.Article;
                case "JavaScript":
                  return article.JavaScript;
                case "HTML":
                  return article.HTML;
                default:
                  return true;
              }
            })
            .filter((article) => {
              switch (name) {
                case "Jabed":
                  return article.Jabed;
                case "Tusar":
                  return article.Tusar;
                case "Hossain":
                  return article.Hossain;
                case "Rabbi":
                  return article.Rabbi;

                default:
                  return true;
              }
            })
            .map((article) => (
              <BlogArticle article={article} key={article.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

// .filter((article) => {
//   console.log(article.category);
//   const { status } = filters;
//   if (article.category === "Article") {
//     return article;
//   }
//   return true;
// })

// .filter((article) => {
//   const { status } = filters;
//   switch (status) {
//     case "JavaScript":
//       return article.category;
//     default:
//       return true;
//   }
// })
