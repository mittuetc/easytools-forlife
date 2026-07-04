
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { blogArticles } from '@/data/blogArticles.js';
import { Button } from '@/components/ui/button.jsx';

export default function ArticlePage() {
  const { slug } = useParams();
  
  const article = blogArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-background p-4 text-center">
        <Helmet>
          <title>Article Not Found | Easy Tools</title>
        </Helmet>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Article Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">The article you are looking for does not exist or has been moved.</p>
        <Button asChild size="lg">
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  const pageUrl = `https://easytoolsforlife.com/blog/${article.slug}`;

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{`${article.title} | Blog`}</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="mb-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground font-medium transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>

          <header className="mb-12 border-b border-border pb-10">
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground mb-6">
              <div className="flex items-center bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-md">
                <Tag className="w-4 h-4 mr-2" />
                {article.category}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight text-balance" style={{ letterSpacing: '-0.02em' }}>
              {article.title}
            </h1>
          </header>

          <article 
            className="blog-content w-full"
            dangerouslySetInnerHTML={{ __html: article.fullContent }}
          />
        </div>
      </main>
    </div>
  );
}
