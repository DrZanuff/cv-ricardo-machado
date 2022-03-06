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
          <link rel="icon" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          {/* <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `

              @font-face{
                font-family:Rubik;
                src:url(/fonts/Rubik/Rubik-Bold.ttf);
                font-weight:bold;
                font-display:swap;
                font-style:normal
              }

              @font-face{
                font-family:Rubik;
                src:url(/fonts/Rubik/Rubik-Regular.ttf);
                font-weight:400;
                font-display:swap;
                font-style:normal
              }

              @font-face{
                font-family:Rubik;
                src:url(/fonts/Rubik/Rubik-Italic.ttf);
                font-weight:400;
                font-display:swap;
                font-style:italic
              }

            `,
            }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
