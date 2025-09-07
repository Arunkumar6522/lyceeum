"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
}

export default function BlogPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        // Fetch RSS feed from your Blogger
        const response = await fetch('/api/blog-posts');
        if (!response.ok) throw new Error('Failed to fetch blog posts');
        const posts = await response.json();
        setBlogPosts(posts);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts');
        // Fallback to sample data
        setBlogPosts([
          {
            id: "1",
            title: "Mastering Calculus: A Student's Journey",
            excerpt: "Discover how Sarah improved her calculus grades from C to A+ with our personalized tutoring approach.",
            date: "2024-01-15",
            readTime: "5 min read",
            category: "Success Stories",
            link: "https://orangepiemedia.blogspot.com/"
          },
          {
            id: "2", 
            title: "The Importance of One-on-One Tutoring",
            excerpt: "Why personalized attention makes all the difference in mathematics education and how it can transform your learning experience.",
            date: "2024-01-10",
            readTime: "7 min read",
            category: "Education",
            link: "https://orangepiemedia.blogspot.com/"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <main className="min-h-[70vh] max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-gray-600 text-lg">Insights, tips, and success stories from our tutoring community.</p>
      </motion.div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">{error}</p>
          <p className="text-gray-600">Showing sample posts below.</p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <time className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</time>
                <a 
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-primary/80 font-medium text-sm"
                >
                  Read More →
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="text-center mt-12"
      >
        <p className="text-gray-600 mb-4">Want to stay updated with our latest posts?</p>
        <a 
          href="https://orangepiemedia.blogspot.com/" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Visit Our Full Blog
        </a>
      </motion.div>
    </main>
  );
}


