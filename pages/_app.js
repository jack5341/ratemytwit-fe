import Head from "next/head"
import "../node_modules/nes.css/css/nes.css"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Title of the Page" />
        <meta name="twitter:description" content="Description of the page" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
