
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, BookOpen } from 'lucide-react';
import { blogArticles } from '@/data/blogArticles.js';

export default function BlogIndexPage() {
  const pageUrl = "https://easytoolsforlife.com/blog";

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-primary/20">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Blog - Articles & Insights | Easy Tools</title>
        <meta name="description" content="Read our latest articles on space, nature, history, and creative learning. Dive into fascinating facts and deep explorations." />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <header className="mb-16 md:mb-24 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Learning Hub</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
            Latest Articles & Insights
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Explore our collection of fascinating deep-dives into space exploration, ancient history, marine biology, and creative learning.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {blogArticles.map((article) => (
            <article 
              key={article.id} 
              className="group flex flex-col h-full bg-card rounded-2xl border transition-all duration-300 hover:shadow-lg hover:border-primary/20 overflow-hidden"
            >
              <div className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-block px-3 py-1 rounded-md bg-secondary/10 text-secondary-foreground text-xs font-semibold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                  <Link to={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-border/50">
                  <Link 
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Read Full Article
                    <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
