import React from 'react';
import Head from 'next/head'


function LayoutComponent ({ children, seo }) {

  return (
    <div className="app--container">
      <Head>
        <title>
          { seo?.metaTitle || 'Default Site Title' }
          { seo?.titleSuffix !== false ? ' | GoodCoder' : null }
        </title>
        <link rel="icon" href="/favicon.ico" />

        {/* Meta Tags */}
        <meta property="og:title" content={seo?.metaTitle || 'Default Site Title'} key="title" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>{children}</main>
    </div>
  );
}

export default LayoutComponent;
