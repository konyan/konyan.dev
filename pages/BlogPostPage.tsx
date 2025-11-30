import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ChevronLeft, Calendar, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">Post not found</h1>
          <button onClick={() => navigate('/blog')} className="text-accent hover:underline">Return to Blog</button>
        </div>
      </div>
    );
  }

  const PostComponent = post.component;

  // Convert date format for structured data
  const convertDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toISOString();
  };

  return (
    <>
      <SEO
        title={`${post.title} | Konyan Blog`}
        description={post.excerpt}
        keywords="React, Next.js, React Native, Web Development, Software Engineering, Performance Optimization, Frontend Development"
        canonicalUrl={`https://konyan.github.io/konyan.dev/#/blog/${post.id}`}
        ogType="article"
        publishedTime={convertDate(post.date)}
      />
      <StructuredData
        type="article"
        data={{
          title: post.title,
          description: post.excerpt,
          datePublished: convertDate(post.date),
          dateModified: convertDate(post.date),
          url: `https://konyan.github.io/konyan.dev/#/blog/${post.id}`
        }}
      />
      <article className="min-h-screen pt-32 pb-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to All Posts
            </button>

            <header className="mb-12">
              <div className="flex flex-wrap gap-4 text-sm font-mono text-accent mb-6 uppercase tracking-wider">
                <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed border-l-4 border-accent pl-6 italic">
                {post.excerpt}
              </p>
            </header>

            <div className="prose dark:prose-invert prose-neutral max-w-none prose-lg markdown-content">
              <PostComponent />
            </div>

            <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">Thanks for reading!</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('/')}
                  className="px-6 py-3 bg-neutral-100 dark:bg-neutral-900 rounded-full text-neutral-900 dark:text-white font-medium hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                >
                  Go Home
                </button>
                <button
                  onClick={() => navigate('/blog')}
                  className="px-6 py-3 border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-600 dark:text-neutral-400 font-medium hover:border-accent hover:text-accent transition-colors"
                >
                  More Posts
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;
