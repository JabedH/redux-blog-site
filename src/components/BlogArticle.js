import React from "react";
import { useDispatch } from "react-redux";
import { categorySearch, nameSearch } from "../redux/filters/action";

const BlogArticle = ({ post }) => {
  const dispatch = useDispatch();
  const handleSelection = (status) => {
    dispatch(categorySearch(status));
  };

  const handleNameSelect = (name) => {
    dispatch(nameSearch(name));
  };
  
  const { author, category, img, profile, readTime, time, title } = post;
  return (
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div class="flex-shrink-0">
        <img class="h-48 w-full object-cover" src={img} alt="" />
      </div>
      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-sm font-medium text-indigo-600 text-left">
            <span
              onClick={() => handleSelection(`${category}`)}
              class="cursor-pointer inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
            >
              {category}
            </span>
          </p>

          <a href="#" class="block mt-1 text-left">
            <p class="text-xl font-semibold text-gray-900">{title}</p>
          </a>
        </div>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src={profile} alt="" />
          </div>
          <div class="ml-3 text-left">
            <span
              onClick={() => handleNameSelect(`${author}`)}
              class=" font-medium text-gray-900 hover:underline cursor-pointer"
            >
              {author}
            </span>

            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="2020-03-16">{time}</time>
              <span aria-hidden="true">&middot;</span>
              <span> {readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
