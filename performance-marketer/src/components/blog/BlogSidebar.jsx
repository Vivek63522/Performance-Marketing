"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { FaRegCalendarAlt, FaCommentDots } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import {
  blogPosts,
  blogCategories,
  blogTags,
  recentComments,
} from "@/data/blogData";

export default function BlogSidebar({
  onSearch,
  activeCategory,
  onSelectCategory,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const latestPosts = blogPosts.slice(0, 3);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <aside className="w-full space-y-8">
      {/* 1. Search Widget */}
      <div className="bg-brand-gray p-5 sm:p-7.5 ">
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex items-center"
        >
          <input
            type="text"
            placeholder="Type Here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-[#e2e6ed] px-5 py-3.5 pr-12 text-[14px] text-brand-text-dark placeholder:text-[#999] focus:outline-none focus:border-brand-base transition-colors"
          />
          <button
            type="submit"
            aria-label="Search posts"
            className="absolute right-0 top-0 bottom-0 px-4 text-brand-text-dark hover:text-brand-base transition-colors flex items-center justify-center cursor-pointer"
          >
            <GoSearch size={18} />
          </button>
        </form>
      </div>

      {/* 2. Latest Post Widget */}
      <div className="bg-white shadow-[0px_0px_60px_0px_rgba(2,2,2,0.07)] p-5 sm:p-7.5  ">
        <div className="mb-6">
          <h3 className="text-[22px] font-bold text-brand-text-dark font-heading uppercase tracking-wider m-0">
            Latest Post
          </h3>
          <div className="w-full h-[1px] bg-brand-base mt-2" />
        </div>

        <div className="space-y-4">
          {latestPosts.map((post) => (
            <div key={post.id} className="flex items-center gap-4 group">
              <Link
                href={`/blog/${post.slug}`}
                className="shrink-0 w-[70px] h-[70px] overflow-hidden bg-gray-200 block"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <div className="flex flex-col min-w-0">
                <span className="flex items-center gap-1.5 text-[12px] text-brand-text-gray font-medium mb-1">
                  <FaRegCalendarAlt size={11} className="text-brand-base" />
                  {post.dateString}
                </span>
                <h4 className="m-0 p-0 text-[17px]! font-bold font-heading leading-snug line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline text-[17px]! text-brand-text-dark! group-hover:text-brand-base! hover:text-brand-base! bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] bg-[length:0px_1px] bg-[position:0px_95%] bg-no-repeat [box-decoration-break:clone] [-webkit-box-decoration-break:clone] transition-all duration-500 ease-in-out group-hover:bg-[length:100%_1px] hover:bg-[length:100%_1px]"
                  >
                    {post.title}
                  </Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Categories Widget */}
      <div className="bg-white p-6 sm:p-7 shadow-[0px_0px_60px_0px_rgba(2,2,2,0.07)]">
        <div className="mb-6">
          <h3 className="text-[22px] font-bold text-brand-text-dark font-heading uppercase tracking-wider m-0">
            Categories
          </h3>
          <div className="w-full h-[1px] bg-brand-base mt-2" />
        </div>

        <ul className="m-0 p-0 list-none space-y-2.5">
          {blogCategories.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <li key={cat.name}>
                <button
                  type="button"
                  onClick={() =>
                    onSelectCategory &&
                    onSelectCategory(isActive ? null : cat.name)
                  }
                  className={`w-full flex items-center justify-between py-2 text-[16px] font-semibold transition-all group text-left cursor-pointer border-b border-gray-200/60 pb-2.5 ${
                    isActive
                      ? "text-brand-base font-bold"
                      : "text-brand-text-dark hover:text-brand-base"
                  }`}
                >
                  <span className="flex items-center gap-2 ">
                    <GoArrowRight
                      size={16}
                      className={`transition-transform duration-300 group-hover:translate-x-5 ${
                        isActive ? "text-brand-base" : "text-brand-base"
                      }`}
                    />

                    <span className="group-hover:translate-x-5 transition-transform duration-300">
                      {cat.name}
                    </span>
                  </span>
                  <span className="text-[12px] text-brand-text-gray group-hover:text-brand-base font-medium">
                    ({cat.count})
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 4. Tags Widget */}
      <div className="bg-white p-6 sm:p-7 shadow-[0px_0px_60px_0px_rgba(2,2,2,0.07)]">
        <div className="mb-6">
          <h3 className="text-[22px] font-bold text-brand-text-dark font-heading uppercase tracking-wider m-0">
            Tags
          </h3>
          <div className="w-full h-[1px] bg-brand-base mt-2" />
        </div>

        <div className="flex flex-wrap gap-2">
          {blogTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="px-3.5 py-2 bg-brand-gray! text-[13px] font-semibold! text-brand-text! hover:bg-brand-base! hover:text-brand-text-dark! hover:border-brand-base! transition-all duration-400"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* 5. Comments Widget */}
      <div className="bg-white p-6 sm:p-7 shadow-[0px_0px_60px_0px_rgba(2,2,2,0.07)]">
        <div className="mb-6">
          <h3 className="text-[22px] font-bold text-brand-text-dark font-heading uppercase tracking-wider m-0">
            Comments
          </h3>
          <div className="w-full h-[1px] bg-brand-base mt-2" />
        </div>

        <div className="space-y-4">
          {recentComments.map((comment) => (
            <div key={comment.id} className="flex items-start gap-3 group">
              <div className="w-9 h-9 rounded-full bg-white border border-gray-200 text-brand-base flex items-center justify-center shrink-0 mt-0.5  group-hover:bg-brand-base group-hover:text-brand-text-dark transition-colors">
                <FaCommentDots size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] text-brand-text-gray line-clamp-2 leading-snug m-0 group-hover:text-brand-text-dark transition-colors">
                  "{comment.text}"
                </p>
                <span className="text-[12px] font-bold text-brand-text-dark mt-1 block">
                  — {comment.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
