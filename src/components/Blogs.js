import React, { useState } from "react";
import BlogArticle from "./BlogArticle";
import articles from "../data/info.json";
import { useSelector } from "react-redux";

const Blogs = () => {
  // const [newArticle, setArticle] = useState(0);
  // const info = articles.map((article) => console.log(article));
  // const { category } = info;
  // const blogInfos = useSelector((state) => console.log(state.initialState));
  // console.log(blogInfos);
  const filters = useSelector((state) => state);
  console.log(filters);
  // console.log(newArticle);
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {articles
        .filter((article) => {
          const { status } = filters;
          switch (status) {
            case "Article":
              return article.Article;
            case "JavaScript":
              return article.JavaScript;
            default:
              return true;
          }
        })
        .map((article) => (
          <BlogArticle article={article} key={article.id} />
        ))}
    </div>
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
