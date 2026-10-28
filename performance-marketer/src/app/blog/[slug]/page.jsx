import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { blogPosts } from "@/data/blogData";
import {
  FaRegCalendarAlt,
  FaRegCommentDots,
  FaRegFolderOpen,
  FaQuoteLeft,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaReply,
} from "react-icons/fa";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Not Found" };
  return {
    title: `${post.title} | Manish Verma Consulting`,
    description: post.summary,
  };
}

export default function BlogDetailsPage({ params }) {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center">
          <div className="w-8 h-8 border-2 border-brand-base border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-brand-text-gray text-sm">Loading article...</p>
        </div>
      }
    >
      <BlogDetailContent params={params} />
    </Suspense>
  );
}

async function BlogDetailContent({ params }) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = blogPosts[postIndex];
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost =
    postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  return (
    <>
      <PageHeader
        title={post.title}
        subtitle="Blog Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <Section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Blog Post Content (col-span-8) */}
            <main className="lg:col-span-8">
              <article className="border border-[#eaedf2] bg-white p-6 sm:p-10 shadow-sm">
                {/* 1. Featured Image with Orange Date Badge */}
                <div className="relative w-full h-[320px] sm:h-[420px] overflow-hidden bg-gray-100 mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Top-Right Orange Date Badge */}
                  <div className="absolute top-5 right-5 bg-brand-base px-4 py-3 flex flex-col items-center justify-center text-center shadow-lg select-none min-w-[60px]">
                    <span className="text-[22px] sm:text-[24px] font-extrabold text-brand-text-dark leading-none font-heading">
                      {post.day}
                    </span>
                    <span className="text-[12px] font-bold text-brand-text-dark uppercase tracking-wider leading-none mt-1">
                      {post.month}
                    </span>
                  </div>
                </div>

                {/* 2. Meta Row */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[13px] sm:text-[14px] text-brand-text-gray font-medium pb-5 mb-6 border-b border-gray-100">
                  {/* Author */}
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover shrink-0"
                    />
                    <span className="text-brand-text-dark font-semibold">
                      By {post.author.name}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-brand-text-dark">
                    <FaRegCalendarAlt size={13} className="text-brand-base" />
                    <span>{post.dateString}</span>
                  </div>

                  {/* Category */}
                  <div className="flex items-center gap-1.5 text-brand-text-dark">
                    <FaRegFolderOpen size={13} className="text-brand-base" />
                    <span>{post.category}</span>
                  </div>

                  {/* Comments Count */}
                  <div className="flex items-center gap-1.5 text-brand-base font-semibold">
                    <FaRegCommentDots size={14} className="text-brand-base" />
                    <span>{post.commentsCount} Comments</span>
                  </div>
                </div>

                {/* 3. Post Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-text-dark font-heading leading-tight mb-6">
                  {post.title}
                </h1>

                {/* 4. Paragraphs */}
                <div className="text-[16px] text-brand-text leading-[1.8] space-y-5 mb-8 font-sans">
                  {post.content.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* 5. Styled Blockquote */}
                {post.quote && (
                  <div className="relative bg-[#f8f9fb] border-l-4 border-brand-base p-6 sm:p-8 my-8 shadow-sm">
                    <FaQuoteLeft
                      size={28}
                      className="text-brand-base opacity-40 mb-3"
                    />
                    <p className="text-[18px] sm:text-[20px] italic font-semibold text-brand-text-dark font-heading leading-relaxed mb-3">
                      "{post.quote}"
                    </p>
                    <span className="text-[13px] font-bold text-brand-base uppercase tracking-wider font-heading">
                      — {post.author.name}, {post.author.role}
                    </span>
                  </div>
                )}

                {/* 6. Subheading & Additional Content */}
                {post.subheading && (
                  <div className="my-8">
                    <h2 className="text-[26px] sm:text-[28px] font-bold text-brand-text-dark font-heading mb-4 leading-snug">
                      {post.subheading}
                    </h2>
                    <ul className="space-y-3 m-0 p-0 list-none">
                      {post.subContent.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[15px] text-brand-text leading-relaxed"
                        >
                          <span className="w-2 h-2 rounded-full bg-brand-base mt-2 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 7. Tags and Social Sharing Bar */}
                <div className="pt-6 mt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[13px] font-bold uppercase tracking-wider text-brand-text-dark mr-1">
                      Tags:
                    </span>
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="px-3 py-1 bg-[#f4f5f8] text-[12px] font-semibold text-brand-text-dark hover:bg-brand-base hover:text-brand-text-dark transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>

                  {/* Share Icons */}
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-bold uppercase tracking-wider text-brand-text-dark mr-1">
                      Share:
                    </span>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-brand-gray text-brand-text-dark! hover:bg-brand-base! flex items-center justify-center transition-colors text-[13px]"
                      aria-label="Share on Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-brand-gray text-brand-text-dark! hover:bg-brand-base! flex items-center justify-center transition-colors text-[13px]"
                      aria-label="Share on Twitter"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-brand-gray text-brand-text-dark! hover:bg-brand-base! flex items-center justify-center transition-colors text-[13px]"
                      aria-label="Share on LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-brand-gray text-brand-text-dark! hover:bg-brand-base! flex items-center justify-center transition-colors text-[13px]"
                      aria-label="Share on Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>

                {/* 8. Prev / Next Navigation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-8 border-t border-gray-100">
                  {prevPost ? (
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className="group p-4 bg-[#f8f9fb] border border-gray-100 hover:border-brand-base transition-all flex items-center gap-3 text-left"
                    >
                      <FaLongArrowAltLeft
                        size={18}
                        className="text-brand-base shrink-0 group-hover:-translate-x-1 transition-transform"
                      />
                      <div className="min-w-0">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-brand-text-gray block mb-1">
                          Previous Post
                        </span>
                        <h4 className="text-[14px] font-bold text-brand-text-dark group-hover:text-brand-base line-clamp-1 m-0">
                          {prevPost.title}
                        </h4>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextPost ? (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="group p-4 bg-[#f8f9fb] border border-gray-100 hover:border-brand-base transition-all flex items-center justify-end gap-3 text-right"
                    >
                      <div className="min-w-0">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-brand-text-gray block mb-1">
                          Next Post
                        </span>
                        <h4 className="text-[14px] font-bold text-brand-text-dark group-hover:text-brand-base line-clamp-1 m-0">
                          {nextPost.title}
                        </h4>
                      </div>
                      <FaLongArrowAltRight
                        size={18}
                        className="text-brand-base shrink-0 group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>

                {/* 9. Comments Section */}
                <div className="pt-10 mt-10 border-t border-gray-100">
                  <h3 className="text-[22px] font-bold text-brand-text-dark font-heading uppercase tracking-wide mb-6">
                    {post.commentsCount} Comments
                  </h3>

                  <div className="space-y-6">
                    {/* Comment 1 */}
                    <div className="flex gap-4 p-5 bg-[#f8f9fb] border border-gray-100">
                      <img
                        src="/assets/blog/blog-author-1-2.jpg"
                        alt="Commenter"
                        className="w-12 h-12 rounded-full object-cover shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-[15px] font-bold text-brand-text-dark m-0">
                            David Miller
                          </h4>
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 text-[12px] font-bold uppercase text-brand-base hover:text-brand-text-dark transition-colors cursor-pointer"
                          >
                            <FaReply size={10} /> Reply
                          </button>
                        </div>
                        <span className="text-[12px] text-brand-text-gray block mb-2">
                          12 Oct, 2024 at 10:30 am
                        </span>
                        <p className="text-[14px] text-brand-text leading-relaxed m-0">
                          Incredible breakdown! The distinction between intent
                          capture on Google and demand gen on Meta completely
                          changed our media buying strategy this quarter.
                        </p>
                      </div>
                    </div>

                    {/* Comment 2 */}
                    <div className="flex gap-4 p-5 bg-[#f8f9fb] border border-gray-100 sm:ml-8">
                      <img
                        src="/assets/blog/blog-author-1-3.jpg"
                        alt="Commenter"
                        className="w-12 h-12 rounded-full object-cover shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-[15px] font-bold text-brand-text-dark m-0">
                            Sophia Lee
                          </h4>
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 text-[12px] font-bold uppercase text-brand-base hover:text-brand-text-dark transition-colors cursor-pointer"
                          >
                            <FaReply size={10} /> Reply
                          </button>
                        </div>
                        <span className="text-[12px] text-brand-text-gray block mb-2">
                          12 Oct, 2024 at 02:45 pm
                        </span>
                        <p className="text-[14px] text-brand-text leading-relaxed m-0">
                          Totally agree with the points on automated email
                          flows. We reduced our lead drop-off rate by over 40%
                          after implementing behavioral triggers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 10. Leave a Reply Form */}
                <div className="pt-10 mt-10 border-t border-gray-100">
                  <h3 className="text-[22px] font-bold text-brand-text-dark font-heading uppercase tracking-wide mb-2">
                    Leave a Reply
                  </h3>
                  <p className="text-[14px] text-brand-text-gray mb-6">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        required
                        className="w-full bg-[#fbfbfb] border border-[#e5e5e5] px-5 py-3.5 text-[14px] text-brand-text-dark placeholder:text-[#888] focus:outline-none focus:border-brand-base focus:bg-white transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Email Address *"
                        required
                        className="w-full bg-[#fbfbfb] border border-[#e5e5e5] px-5 py-3.5 text-[14px] text-brand-text-dark placeholder:text-[#888] focus:outline-none focus:border-brand-base focus:bg-white transition-colors"
                      />
                    </div>
                    <input
                      type="url"
                      placeholder="Website (Optional)"
                      className="w-full bg-[#fbfbfb] border border-[#e5e5e5] px-5 py-3.5 text-[14px] text-brand-text-dark placeholder:text-[#888] focus:outline-none focus:border-brand-base focus:bg-white transition-colors"
                    />
                    <textarea
                      placeholder="Write Your Comment Here... *"
                      rows={5}
                      required
                      className="w-full bg-[#fbfbfb] border border-[#e5e5e5] px-5 py-3.5 text-[14px] text-brand-text-dark placeholder:text-[#888] focus:outline-none focus:border-brand-base focus:bg-white transition-colors resize-none"
                    />
                    <Button
                      variant="base"
                      type="submit"
                      className=" transition-all  cursor-pointer"
                    >
                      Post Comment
                    </Button>
                  </form>
                </div>
              </article>
            </main>

            {/* Right Column: Sidebar (col-span-4) */}
            <div className="lg:col-span-4">
              <BlogSidebar />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
