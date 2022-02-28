import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <title>DrZanuff</title>
          <meta name="CV" content="Ricardo Machado CV" />
          <link rel="icon" href="/favicon.ico" />
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,700;1,300&display=swap');

            `,
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
