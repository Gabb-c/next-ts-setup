import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';
export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Bootstraped with create next app" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=optional"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
