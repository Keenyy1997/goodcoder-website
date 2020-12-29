import React from 'react';
import Head from 'next/head'

function LayoutComponent ({ globalSettings, children, seo }) {

  console.log('[GLOBAL SETTINGS]', globalSettings);
  const { defaultSeo, siteName } = globalSettings;

  return (
    <div className="app--container">
      <Head>
        <title>
          { seo?.metaTitle || defaultSeo?.metaTitle || 'Default Site Title' }
          { seo?.titleSuffix !== false ? `| ${siteName}` : null }
        </title>
        <link rel="icon" href="/favicon.ico" />

        {/* Meta Tags */}
        <meta property="description" content={seo?.metaDescription || defaultSeo?.metaDescription} key="description" />
        <meta property="og:title" content={seo?.metaTitle || 'Default Site Title'} key="title" />
        <meta property="og:description" content={seo?.metaDescription || defaultSeo?.metaDescription} key="description" />
        <meta name="author" content="Kenny Vallejo" />
        <meta name="keywords" content="HTML, CSS, Javascript, React, React.js, Next.js" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>{children}</main>
    </div>
  );
}

export default LayoutComponent;
