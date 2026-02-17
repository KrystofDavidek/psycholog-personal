import Head from 'next/head';
import { SITE_CONFIG, EXTERNAL_LINKS, SOCIAL_META } from '../constants/site';
import { SEOProps } from '../types/components';

export default function SEO({
  title,
  description = SITE_CONFIG.description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = SITE_CONFIG.ogImage,
  ogUrl,
}: SEOProps) {
  const fullTitle = title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`;
  const finalOgTitle = ogTitle || fullTitle;
  const finalOgDescription = ogDescription || description;
  const finalCanonical = canonical || SITE_CONFIG.url;
  const finalOgUrl = ogUrl || finalCanonical;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.ogSiteName} />

      {/* Google Verification */}
      <meta name="google-site-verification" content={SITE_CONFIG.googleVerification} />

      {/* Twitter */}
      <meta name="twitter:card" content={SOCIAL_META.twitterCard} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Font Preload */}
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href={EXTERNAL_LINKS.fontPreload}
        crossOrigin=""
      />
    </Head>
  );
}
