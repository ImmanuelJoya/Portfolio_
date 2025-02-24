import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  const defaultTitle = "Immanuel Joy | Full Stack Developer";
  const defaultDescription = 
    "Full Stack Developer specializing in creating beautiful, responsive, and user-friendly web applications using modern technologies and best practices.";
  const defaultKeywords = 
    "full stack developer, web developer, react developer, javascript developer, toronto developer";


  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content="/og-image.jpg" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content="/og-image.jpg" />

      {/* Other important meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Immanuel Joy" />
      
      {/* Theme Color for browsers */}
      <meta name="theme-color" content="#1a1a1a" />
    </Helmet>
  );
};

export default SEO;
