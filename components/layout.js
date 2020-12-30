import React from 'react';
import Head from 'next/head'

function LayoutComponent ({ globalSettings, children, seo }) {
  const { defaultSeo, siteName } = globalSettings;

  const metaTitle = (seo?.metaTitle || defaultSeo?.metaTitle || 'Default Site Title') + (seo?.titleSuffix !== false ? ` | ${siteName}` : '');
  const metaDescription = (seo?.metaDescription || defaultSeo?.metaDescription);
  const shareImage = (seo?.shareImage || defaultSeo?.shareImage?.url);

  return (
    <div className="app--container">
      <Head>
        {/* FAVICON */}
        <link rel="icon" href="/favicon.ico" />

        {/* General */}
        <meta charSet="utf-8" />
        <meta name="author" content="Kenny Vallejo" />
        <meta name="keywords" content="HTML, CSS, Javascript, React, React.js, Next.js" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* TYPE */}
        {
          seo?.titleSuffix !== false && (
            <meta property="og:type" content="article" key="og_type" />
          )
        }

        {/* TITLE */}
        <title key="title">{ metaTitle }</title>
        <meta property="og:title" content={metaTitle} key="og_title" />

        {/* DESCRIPTION */}
        <meta property="description" content={metaDescription} key="description" />
        <meta property="og:description" content={metaDescription} key="og_description" />

        {/* IMAGE */}
        <meta property="image" content={shareImage} key="image" />
        <meta property="og:image" content={shareImage} key="og_image" />

        {/* TWITTER */}
        <meta property="twitter:title" content={metaTitle} key="tw_title" />
        <meta property="twitter:card" content="summary_large_image" key="tw_card"/>
        <meta property="twitter:description" content={metaDescription} key="tw_description" />
        <meta property="twitter:image" content={shareImage} key="tw_image" />

      </Head>
      <main>{children}</main>
    </div>
  );
}

export default LayoutComponent;
