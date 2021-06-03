import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Layout extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>54字の物語ジェネレーター #54字の文学賞</title>
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no" />
          <meta name="description" content="10文字ホラージェネレーター #10文字ホラー" />
          <meta name="keywords" content="#10文字ホラー,10文字ホラー,氏田雄介" />
          <meta name="author" content="氏田雄介" />
          <meta name="generator" content="Next.js" />
          <meta property="og:title" content="10文字ホラージェネレーター #10文字ホラー" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ujiqn.github.io/10-horror/" />
          <meta property="og:image" content="https://ujiqn.github.io/10-horror/ogp.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="10文字ホラージェネレーター #10文字ホラー" />
          <meta property="og:description" content="10文字でホラーをつくりましょう。" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="10文字ホラージェネレーター #10文字ホラー" />
          <meta name="twitter:description" content="10文字でホラーをつくりましょう。" />
          <meta name="twitter:image:src" content="https://ujiqn.github.io/10-horror/ogp.png" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="shortcut icon" href="https://ujiqn.github.io/10-horror/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho&display=swap" rel="stylesheet" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121940062-1"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}