import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, ChevronLeft } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const BlogsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Blog | Konyan - Full Stack Engineering Insights"
        description="Read about software engineering, React, Next.js, React Native, performance optimization, and modern web development best practices."
        keywords="React Blog, Next.js Tutorial, React Native CI/CD, Frontend Performance, Web Development Blog, Software Engineering, Headless CMS"
        canonicalUrl="https://konyan.github.io/konyan.dev/#/blog"
        ogType="website"
      />
      <section className="min-h-screen pt-32 pb-24 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-6 group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white">All Posts</h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">Deep dives into software engineering, performance, and design.</p>
          </div>

          <div className="grid gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer block p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-accent/50 dark:hover:border-accent/50 transition-all hover:shadow-xl dark:hover:shadow-none"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm font-mono text-neutral-500 dark:text-neutral-500 shrink-0">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                  </div>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                  Read Article <ArrowUpRight size={16} className="ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsPage;
