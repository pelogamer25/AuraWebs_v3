import React from 'react';
import GradientText from '../components/GradientText';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Glassmorphism in 2024',
    excerpt: 'Why depth, blur, and transparency are becoming the new standard for premium digital experiences.',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    category: 'Design'
  },
  {
    id: '2',
    title: 'Optimizing React for Core Web Vitals',
    excerpt: 'Technical strategies to ensure your heavy-visuals website still scores 90+ on Lighthouse.',
    date: 'Sep 28, 2023',
    readTime: '8 min read',
    category: 'Development'
  },
  {
    id: '3',
    title: 'SEO Beyond Keywords: Semantic Search',
    excerpt: 'How Google understands context and how to structure your content for the AI era.',
    date: 'Sep 15, 2023',
    readTime: '6 min read',
    category: 'SEO'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12 text-center">
          Insights & <GradientText>Thoughts</GradientText>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <article key={post.id} className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-aura-purple bg-aura-purple/10 px-3 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-aura-magenta transition-colors">{post.title}</h2>
              <p className="text-gray-400 mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center border-t border-white/5 pt-4 text-sm text-gray-500">
                <span>{post.date}</span>
                <span className="group-hover:translate-x-1 transition-transform text-white">Read Article &rarr;</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;