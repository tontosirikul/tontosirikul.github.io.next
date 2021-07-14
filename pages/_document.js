import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/personal-information.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="TonTosirikul's site" />
          <link
            rel="apple-touch-icon"
            href="%PUBLIC_URL%/personal-information.png"
          />

          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700&display=swap"
            rel="stylesheet"
          />

          <title>TonTosirikul</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
