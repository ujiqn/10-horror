import '../styles/common.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
{/*
        <script
          dangerouslySetInnerHTML={{__html: `
            if (location.hostname !== '10.ujiqn.com') {
              location.replace('https://10.ujiqn.com');
            }
          `}}
        />
*/}
        <title>10文字ホラージェネレーター #10文字ホラー</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no" />
        <meta name="description" content="10文字ホラージェネレーター #10文字ホラー" />
        <meta name="keywords" content="#10文字ホラー,10文字ホラー,氏田雄介" />
        <meta name="author" content="氏田雄介" />
        <meta name="generator" content="Next.js" />
        <meta property="og:title" content="10文字ホラージェネレーター #10文字ホラー" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://10.ujiqn.com" />
        <meta property="og:image" content="https://10.ujiqn.com/ogp.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="10文字ホラージェネレーター #10文字ホラー" />
        <meta property="og:description" content="10文字で怖がらせてください。" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="10文字ホラージェネレーター #10文字ホラー" />
        <meta name="twitter:description" content="10文字で怖がらせてください。" />
        <meta name="twitter:image:src" content="https://10.ujiqn.com/ogp.png" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://10.ujiqn.com" />
        <link rel="shortcut icon" href="https://10.ujiqn.com/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6ESZ66T7E6"></script>
        <script
          dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6ESZ66T7E6');
          `}}
        />
      </Head>
      <div id="wrapper">
        <Component { ...pageProps } />
      </div>
    </>
  );
}