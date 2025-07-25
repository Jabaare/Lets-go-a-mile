import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Google Fonts loaded here instead of _app */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Sports:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-sports bg-cream text-primary">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
