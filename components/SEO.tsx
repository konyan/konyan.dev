import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Konyan | Senior Full Stack Engineer',
  description = 'Senior Full Stack Engineer specializing in React, React Native, Next.js, and modern web technologies. 7+ years of experience building scalable e-commerce platforms and mobile applications.',
  keywords = 'Full Stack Engineer, React Developer, React Native, Next.js, TypeScript, Frontend Developer, Mobile App Development, E-commerce Development, Konyan, Software Engineer',
  author = 'Konyan (Nyan Lin Tun)',
  ogImage = 'https://konyan.github.io/konyan.dev/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl = 'https://konyan.github.io/konyan.dev/',
  publishedTime,
  modifiedTime,
}) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', author);
    setMetaTag('robots', 'index, follow');
    setMetaTag('googlebot', 'index, follow');

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', 'Konyan Portfolio', true);
    setMetaTag('og:locale', 'en_US', true);

    // Twitter Card tags
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);
    setMetaTag('twitter:creator', '@konyan');
    setMetaTag('twitter:site', '@konyan');

    // Article specific tags
    if (publishedTime) {
      setMetaTag('article:published_time', publishedTime, true);
    }
    if (modifiedTime) {
      setMetaTag('article:modified_time', modifiedTime, true);
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
  }, [title, description, keywords, author, ogImage, ogType, twitterCard, canonicalUrl, publishedTime, modifiedTime]);

  return null;
};

export default SEO;
