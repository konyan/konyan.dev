import React from 'react';

interface StructuredDataProps {
  type?: 'person' | 'article' | 'website';
  data?: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'person', data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Nyan Lin Tun (Konyan)",
          "alternateName": "Konyan",
          "url": "https://konyan.github.io/konyan.dev/",
          "image": "https://konyan.github.io/konyan.dev/og-image.jpg",
          "jobTitle": "Senior Full Stack Engineer",
          "worksFor": {
            "@type": "Organization",
            "name": "AutoMate"
          },
          "sameAs": [
            "https://github.com/konyan",
            "https://linkedin.com/in/nyanlintun"
          ],
          "knowsAbout": [
            "React",
            "React Native",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Spring Boot",
            "GraphQL",
            "Frontend Development",
            "Mobile App Development",
            "E-commerce Development"
          ],
          "email": "devkonyan@gmail.com",
          "telephone": "+66946010252"
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Konyan Portfolio",
          "url": "https://konyan.github.io/konyan.dev/",
          "description": "Senior Full Stack Engineer portfolio showcasing projects, experience, and technical blog posts.",
          "author": {
            "@type": "Person",
            "name": "Nyan Lin Tun (Konyan)"
          },
          "inLanguage": "en-US"
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": data?.title || "",
          "datePublished": data?.datePublished || "",
          "dateModified": data?.dateModified || data?.datePublished || "",
          "author": {
            "@type": "Person",
            "name": "Nyan Lin Tun (Konyan)",
            "url": "https://konyan.github.io/konyan.dev/"
          },
          "publisher": {
            "@type": "Person",
            "name": "Nyan Lin Tun (Konyan)"
          },
          "description": data?.description || "",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url || "https://konyan.github.io/konyan.dev/"
          }
        };

      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  );
};

export default StructuredData;
