import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js on the Edge</title>
        <meta
          name="description"
          content="HTML, dynamically rendered in a city near you"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:creator" content="@nextjs" />
        <meta name="twitter:title" content="Next.js on the Edge" />
        <meta
          name="twitter:description"
          content="HTML, dynamically rendered in a city near you"
        />
        <meta name="twitter:image" content="/static/og/card.png" />
        <meta name="twitter:image:alt" content="The Vercel and Next.js logos" />
        <link
          href="/static/favicon/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicon/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicon/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/static/favicon/site.webmanifest" rel="manifest" />
        <link
          color="#000000"
          href="/static/favicon/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <link href="/static/favicon/favicon.ico" rel="shortcut icon" />
        <meta content="#000000" name="msapplication-TileColor" />
        <meta
          content="/static/favicon/browserconfig.xml"
          name="msapplication-config"
        />
        <meta content="#fff" name="theme-color" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
