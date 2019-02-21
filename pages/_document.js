import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <style>
            {`
              body {
                backgroundColor: "rgba(237, 240, 245, 1.0)"
              }
            `}
          </style>
        </Head>
        <body
          style={{
            backgroundColor: "rgba(237, 240, 245, 1.0)",
            margin: 0
          }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
