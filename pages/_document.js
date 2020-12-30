import Document, { Html, Head, Main, NextScript } from 'next/document';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WTPZSNQ';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${GTM_ID}');`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}