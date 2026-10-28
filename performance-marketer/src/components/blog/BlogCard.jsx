"use client";

import React from "react";
import Link from "next/link";
import { FaLongArrowAltRight, FaRegCommentDots } from "react-icons/fa";

export default function BlogCard({ post }) {
  return (
    <article className="group bg-white shadow-[0px_6px_30px_0px_rgba(0,0,0,0.06)] border border-[#eaedf2] overflow-hidden flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
      {/* 1. Thumbnail with BlogList Image Animation & Orange Date Badge */}
      <div className="relative w-full h-[240px] sm:h-[260px] overflow-hidden bg-gray-100">
        {/* Image 1: Normal state visible -> on card hover flies right, scales X by 2, fades & blurs */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out opacity-100 translate-x-0 scale-x-100 blur-none group-hover:translate-x-1/2 group-hover:scale-x-[2] group-hover:opacity-0 group-hover:blur-[10px]"
        />

        {/* Image 2: Normal state starts on left, scaled X by 2, blurred & hidden -> on card hover flies in and sharpens */}
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-in-out -translate-x-1/2 scale-x-[2] opacity-0 blur-[10px] group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100 group-hover:blur-none"
        />

        {/* Link Overlay with ::before and ::after Plus Icon */}
        <Link
          href={`/blog/${post.slug}`}
          aria-label={post.title}
          className="absolute inset-0 w-full h-full bg-[#171717]/50 flex items-center justify-center opacity-0 -translate-y-[20%] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10 before:content-[''] before:w-[25px] before:h-[2px] before:bg-white before:block before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 after:content-[''] after:w-[25px] after:h-[2px] after:bg-white after:block after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-90"
        >
          <span className="sr-only">{post.title}</span>
        </Link>

        {/* Top-Right Orange Date Badge */}
        <div className="absolute top-4 right-4 bg-brand-base px-3.5 py-2.5 flex flex-col items-center justify-center text-center shadow-md select-none pointer-events-none min-w-[54px] z-20">
          <span className="text-[20px] sm:text-[22px] font-extrabold text-brand-text-dark leading-none font-heading">
            {post.day}
          </span>
          <span className="text-[11px] sm:text-[12px] font-bold text-brand-text-dark uppercase tracking-wider leading-none mt-1">
            {post.month}
          </span>
        </div>
      </div>

      {/* 2. Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Meta Information (Author + Comments) */}
          <div className="flex items-center justify-between gap-4 text-[13px] text-brand-text-gray font-medium pb-3 mb-3 border-b border-gray-100">
            {/* Author */}
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-6 h-6 rounded-full object-cover shrink-0"
              />
              <span className="text-brand-text-dark font-semibold">
                {post.author.name}
              </span>
            </div>

            {/* Comments Count */}
            <div className="flex items-center gap-1.5 text-brand-base font-semibold">
              <FaRegCommentDots size={13} className="text-brand-base" />
              <span>{post.commentsCount} Comments</span>
            </div>
          </div>

          {/* Blog Title */}
          <h3 className="text-[21px] sm:text-[23px] font-bold text-brand-text-dark! leading-snug font-heading mb-3 group-hover:text-brand-base! transition-colors duration-300">
            <Link
              href={`/blog/${post.slug}`}
              className="text-brand-text-dark! hover:text-brand-base! bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] bg-[length:0px_1px] bg-[position:0px_95%] bg-no-repeat transition-all duration-500 ease-in-out hover:bg-[length:100%_1px]"
            >
              {post.title}
            </Link>
          </h3>

          {/* Short Excerpt */}
          <p className="text-[14px] sm:text-[15px] text-brand-text leading-relaxed line-clamp-2 mb-6 font-sans">
            {post.summary}
          </p>
        </div>

        {/* 3. Read More Link with Arrow */}
        <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-brand-text-dark group-hover:text-brand-base transition-colors duration-300"
          >
            <span>Read More</span>
            <FaLongArrowAltRight
              size={15}
              className="text-brand-base transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <span className="text-[12px] font-semibold text-brand-text-gray bg-[#f4f5f8] px-2.5 py-1 rounded">
            {post.category}
          </span>
        </div>
      </div>
    </article>
  );
}
