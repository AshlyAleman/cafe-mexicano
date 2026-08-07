import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/coffeeData';
import { BlogPost } from '../types';
import { BookOpen, Clock, Calendar, User, ArrowRight, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-[#120B09] relative border-t border-[#251510]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#CE9678] block mb-2">
            Cultura y Consejos Cafeteros
          </span>
          <h2 className="font-serif-title text-3xl sm:text-5xl font-bold uppercase text-[#FFFDFC] tracking-tight mb-4">
            Blog Cafetero
          </h2>
          <div className="w-20 h-1 bg-[#CE9678] mx-auto mb-6" />
          <p className="text-[#C5C5C5] text-base leading-relaxed">
            Historias de recetas tradicionales en casa y secretos.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-[#1C110D] border border-[#2E1D17] hover:border-[#CE9678]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C110D] via-transparent to-transparent opacity-80" />

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#CE9678] text-[#120B09] text-[10px] font-extrabold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-[11px] text-[#A0A1A8] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#CE9678]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#CE9678]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedPost(post)}
                    className="font-serif-title text-xl font-bold text-[#F9FAFC] group-hover:text-[#CE9678] transition-colors cursor-pointer mb-3 leading-snug"
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#C5C5C5] leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  id={`read-blog-${post.id}`}
                  className="w-full py-2.5 px-4 bg-[#251510] hover:bg-[#CE9678] text-[#EACCB3] hover:text-[#120B09] border border-[#3D251D] hover:border-[#CE9678] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Leer Articulo Completo</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Post Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#180E0B] border border-[#3D251D] rounded-2xl overflow-hidden shadow-2xl text-[#F9FAFC] max-h-[90vh] flex flex-col my-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-72 w-full shrink-0">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180E0B] via-[#180E0B]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-2.5 py-1 rounded bg-[#CE9678] text-[#120B09] text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">
                  {selectedPost.category}
                </span>
                <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#FFFDFC]">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="flex items-center gap-6 pb-4 border-b border-[#2C1C17] text-xs text-[#A0A1A8]">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#CE9678]" />
                  {selectedPost.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#CE9678]" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#CE9678]" />
                  {selectedPost.readTime}
                </span>
              </div>

              <div className="text-sm text-[#D1D2D6] leading-relaxed whitespace-pre-line space-y-4">
                {selectedPost.content}
              </div>
            </div>

            <div className="p-4 bg-[#120B09] border-t border-[#2C1C17] flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-6 py-2.5 bg-[#CE9678] text-[#120B09] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#dfa78a]"
              >
                Cerrar Lectura
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
