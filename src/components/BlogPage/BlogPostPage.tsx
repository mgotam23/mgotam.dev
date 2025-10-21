'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Post, Language } from "@/lib/posts";

// This is now a CLIENT component because it uses hooks (useState)

// --- Helper Components ---
interface PlaceholderImageProps {
    text: string;
    pattern: 'basketball-court' | 'circuit-board';
    bgColor: string;
    textColor: string;
    className?: string;
    mainTextFontSize?: number;
}
const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ text, pattern, bgColor, textColor, className, mainTextFontSize }) => {
    // ... same implementation as before
    return <div className={`flex items-center justify-center overflow-hidden ${className}`} style={{backgroundColor: bgColor}}><h2 style={{color: textColor, fontSize: mainTextFontSize}}>{text}</h2></div>;
};


interface BlogPostPageProps {
    post: Post;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
    const [preferredLanguage, setPreferredLanguage] = useState<Language>();

    useEffect(() => {
        // Set initial preferred language based on available translations
        if (post.content.en) {
            setPreferredLanguage('en');
        } else if (post.content.he) {
            setPreferredLanguage('he');
        }
    }, [post]);

    if (!preferredLanguage) {
        return <div>Loading...</div>;
    }
    
    const content = preferredLanguage === 'he' 
        ? post.content.he || post.content.en 
        : post.content.en || post.content.he;
        
    if (!content) {
        return <div>Post content not available.</div>;
    }

    const direction = preferredLanguage === 'he' ? 'rtl' : 'ltr';
    const hasEnglish = !!post.content.en;
    const hasHebrew = !!post.content.he;

    const LanguageToggle: React.FC = () => (
        <div className="flex items-center gap-2">
            <button
                onClick={() => setPreferredLanguage('en')}
                disabled={!hasEnglish}
                className={`px-3 py-1.5 text-sm rounded-md font-semibold transition-colors ${preferredLanguage === 'en' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'} disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed`}
            >
                English
            </button>
            <button
                onClick={() => setPreferredLanguage('he')}
                disabled={!hasHebrew}
                className={`px-3 py-1.5 text-sm rounded-md font-semibold transition-colors ${preferredLanguage === 'he' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'} disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed`}
            >
                עברית
            </button>
        </div>
    );

    return (
        <div className="bg-[#111827] text-white min-h-screen">
            <div className="max-w-4xl mx-auto py-12 px-6">
                <Link href="/" className="text-orange-500 hover:underline mb-8">&larr; Back to all posts</Link>
                {preferredLanguage && <article dir={direction}>
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">{content.title}</h1>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <span>By {post.author}</span>
                            <span>&bull;</span>
                            <time>{post.date}</time>
                            <span>&bull;</span>
                            <span>{post.readTime}</span>
                        </div>
                    </header>
                    <div className="my-8 h-96 rounded-lg overflow-hidden shadow-lg">
                         <PlaceholderImage text={content.title} pattern="basketball-court" bgColor="#1F2937" textColor="#F97316" className="w-full h-full object-cover" mainTextFontSize={32} />
                    </div>
                    <div className="flex justify-center my-8"><LanguageToggle /></div>
                    <div 
                        className="prose prose-invert lg:prose-xl mx-auto text-gray-300 leading-loose"
                        dangerouslySetInnerHTML={{ __html: content.fullContent }}
                    />
                </article>}
            </div>
        </div>
    );
};

export default BlogPostPage;
