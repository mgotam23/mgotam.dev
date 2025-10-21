import PlaceholderImage from "@/components/PlaceholderImage";
import { flexibleBlogPosts, getPostContent, Language, Post, postSectionHeader } from "@/lib/posts";
import { ExternalLink } from "lucide-react";
import React, { useState } from "react";

// --- Reusable Blog Post Card Component ---
interface BlogPostCardProps {
  post: Post;
  isFeatured?: boolean;
}
const BlogPostCard: React.FC<BlogPostCardProps> = ({
  post,
  isFeatured = false,
}) => {
  // Each card manages its own language state, defaulting to English.
  const [preferredLanguage, setPreferredLanguage] = useState<Language>(
    post.content.en ? "en" : post.content.he ? "he" : "en"
  );

  const { content, language, isPreferred } = getPostContent(
    post,
    preferredLanguage
  );
  const direction = preferredLanguage === "he" ? "rtl" : "ltr";

  // Check if translations exist to enable/disable buttons
  const hasEnglish = !!post.content.en;
  const hasHebrew = !!post.content.he;

  const LanguageToggle: React.FC = () => (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setPreferredLanguage("en")}
        disabled={!hasEnglish}
        className={`cursor-pointer px-2 py-1 text-xs rounded font-semibold transition-colors ${
          preferredLanguage === "en"
            ? "bg-orange-500 text-white"
            : "bg-gray-600 text-gray-300 hover:bg-gray-500"
        } disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed`}
      >
        EN
      </button>
      <button
        onClick={() => setPreferredLanguage("he")}
        disabled={!hasHebrew}
        className={`cursor-pointer px-2 py-1 text-xs rounded font-semibold transition-colors ${
          preferredLanguage === "he"
            ? "bg-orange-500 text-white"
            : "bg-gray-600 text-gray-300 hover:bg-gray-500"
        } disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed`}
      >
        HE
      </button>
    </div>
  );

  if (isFeatured) {
    return (
      <article
        dir={direction}
        className="group grid md:grid-cols-2 gap-8 items-center bg-[#1F2937] rounded-lg shadow-lg overflow-hidden mb-16 border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
      >
        <a href={`/blog/${post.slug}`} className="block overflow-hidden h-full">
          <PlaceholderImage
            text={content.title}
            pattern="basketball-court"
            bgColor="#111827"
            textColor="#F97316"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            mainTextFontSize={20}
          />
        </a>
        <div className="p-8">
          <div className="flex justify-between items-center gap-4 text-sm text-gray-500 mb-3 flex-wrap">
            <div className="flex items-center gap-4">
              <span className="bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold">
                COVER STORY
              </span>
              {!isPreferred && (
                <span className="bg-gray-500/20 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                  {language.toUpperCase()}
                </span>
              )}
            </div>
            <LanguageToggle />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <time>{post.date}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <a href={`/blog?slug=${post.slug}`}>
            <h3 className="text-3xl font-bold mb-4 font-heading text-[#F9FAFB] group-hover:text-orange-500 transition-colors">
              {content.title}
            </h3>
          </a>
          <p className="text-gray-400 leading-relaxed mb-6">
            {content.excerpt}
          </p>
          <a
            href={`/blog?slug=${post.slug}`}
            className="inline-flex items-center gap-2 text-orange-500 hover:underline font-semibold"
          >
            Read The Play <ExternalLink size={16} />
          </a>
        </div>
      </article>
    );
  }

  return (
    <article
      dir={direction}
      className="group bg-[#1F2937] rounded-lg shadow-lg overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      <a
        href={`/blog?slug=${post.slug}`}
        className="block overflow-hidden h-48"
      >
        <PlaceholderImage
          text={content.title}
          pattern="circuit-board"
          bgColor="#111827"
          textColor="#F97316"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          mainTextFontSize={24}
        />
      </a>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
          {!isPreferred && (
            <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded-full text-xs font-semibold">
              {language.toUpperCase()}
            </span>
          )}
          <div className="ml-auto">
            <LanguageToggle />
          </div>
        </div>
        <a href={`/blog?slug=${post.slug}`}>
          <h3 className="text-xl font-bold mb-3 font-heading text-[#F9FAFB] group-hover:text-orange-500 transition-colors">
            {content.title}
          </h3>
        </a>
        <div className="flex items-center justify-between text-sm text-gray-500 border-t border-b border-gray-800 py-2 my-3">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <p className="text-gray-400 leading-relaxed mb-4 text-sm h-20 flex-grow">
          {content.excerpt}
        </p>
        <a
          href={`/blog?slug=${post.slug}`}
          className="inline-flex items-center gap-2 text-orange-500 hover:underline text-sm font-semibold mt-auto"
        >
          Read The Play <ExternalLink size={16} />
        </a>
      </div>
    </article>
  );
};

const BlogHeader: React.FC = () => {
    const { title, subtitle } = postSectionHeader;
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center font-heading tracking-wide text-white">
        {title || "My Playbook"}
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto">
        {subtitle || "Breaking down the X's and O's of software development, team strategy, and high-performance engineering."}
      </p>
    </div>
  );
};

const PostSection: React.FC<{ posts: Post[] }> = ({ posts }) => {
  if (posts.length === 0) return null;
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <section id="blog" className="py-20 px-6 bg-[#111827]">
      <div className="max-w-5xl mx-auto">
        {featuredPost && <BlogPostCard post={featuredPost} isFeatured={true} />}
        <div className="grid md:grid-cols-2 gap-8">
          {otherPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogSection: React.FC = () => {
  return (
    <>
      <section id="blog" className="py-20 px-6 bg-[#1F2937]">
        <div className="max-w-5xl mx-auto">
          <BlogHeader />
          <PostSection posts={flexibleBlogPosts} />
        </div>
      </section>
    </>
  );
};

export { BlogSection };
