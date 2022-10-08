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
  const { filtered_post: posts, status, name, itemSearch } = filters;
  const authorFilter = (post) => {
    return name ? post.author === name : post;
  };

  const categoryFilter = (post) => {
    return status ? post.category === status : post;
  };

  const searchFilter = (post) => {
    if (itemSearch == "") {
      return post;
    }
    else if (post.title.toLowerCase().includes(itemSearch.toLowerCase())) {
      return post;
    }
  
  };
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
        <div className="flex gap-3">
          {filters.status !== "" && (
            <div
              onClick={() => handleSelection("")}
              className=" flex cursor-pointer"
            >
              <h3 className=" text-start bg-gray-200 px-3 rounded-3xl">
                {status} X
              </h3>
            </div>
          )}
          {filters.name !== "" && (
            <div
              onClick={() => handleNameSelect("")}
              className=" flex cursor-pointer"
            >
              <h3 className=" text-start bg-gray-200 px-3 rounded-3xl">
                {name} X
              </h3>
            </div>
          )}
        </div>
        {/* <!-- card grid  --> */}
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {/* if post not found
          {posts.length < 1 && (
            <p className="text-xl font-bold text-red-400">No Post Found.</p>
          )} */}
          
          {posts
            .filter(searchFilter)
            .filter(authorFilter)
            .filter(categoryFilter)
            .map((post) => (
              <BlogArticle post={post} key={post.id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;