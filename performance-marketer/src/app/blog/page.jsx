"use client";

import React, { useState, useMemo } from "react";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { blogPosts } from "@/data/blogData";
import { FaLongArrowAltRight, FaTimes } from "react-icons/fa";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        !selectedCategory || post.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Latest Insights"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <Section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          {/* Active Filter Notice */}
          {(selectedCategory || searchQuery) && (
            <div className="mb-8 p-4 bg-[#f4f5f8] border border-gray-200 flex items-center justify-between">
              <span className="text-[14px] text-brand-text-dark font-medium">
                Filtering by:{" "}
                <strong className="text-brand-base">
                  {selectedCategory ? `Category: ${selectedCategory}` : ""}
                  {selectedCategory && searchQuery ? " & " : ""}
                  {searchQuery ? `Search: "${searchQuery}"` : ""}
                </strong>{" "}
                ({filteredPosts.length} results found)
              </span>
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-text-dark hover:text-brand-base cursor-pointer"
              >
                <FaTimes size={12} /> Clear Filter
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Blog Posts Grid (col-span-8) */}
            <main className="lg:col-span-8">
              {displayedPosts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                    {displayedPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  <div className="mt-12 sm:mt-16 flex items-center justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => {
                      const pageNum = i + 1;
                      const isActive = currentPage === pageNum;
                      return (
                        <button
                          key={pageNum}
                          type="button"
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-11 h-11 flex items-center justify-center text-[15px] font-bold font-heading transition-all cursor-pointer ${
                            isActive
                              ? "bg-brand-base text-brand-text-dark shadow-md"
                              : "bg-[#f4f5f8] text-brand-text-dark hover:bg-brand-base hover:text-brand-text-dark border border-gray-200"
                          }`}
                        >
                          {pageNum < 10 ? `0${pageNum}` : pageNum}
                        </button>
                      );
                    })}

                    {currentPage < totalPages && (
                      <button
                        type="button"
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        className="w-11 h-11 flex items-center justify-center bg-[#f4f5f8] text-brand-text-dark hover:bg-brand-base hover:text-brand-text-dark border border-gray-200 transition-all cursor-pointer"
                        aria-label="Next page"
                      >
                        <FaLongArrowAltRight size={16} />
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center py-16 bg-[#f8f9fb] border border-gray-200 p-8">
                  <h3 className="text-2xl font-bold text-brand-text-dark mb-2 font-heading">
                    No articles found
                  </h3>
                  <p className="text-brand-text text-[15px] mb-6">
                    Try searching for different keywords or view all categories.
                  </p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="bg-brand-base text-brand-text-dark font-bold uppercase text-[13px] px-6 py-3 hover:bg-brand-secondary hover:text-white transition-colors"
                  >
                    View All Articles
                  </button>
                </div>
              )}
            </main>

            {/* Right Column: Sidebar (col-span-4) */}
            <div className="lg:col-span-4">
              <BlogSidebar
                onSearch={handleSearch}
                activeCategory={selectedCategory}
                onSelectCategory={handleCategorySelect}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
