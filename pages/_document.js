import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta name='application-name' content='PWA App' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content='PWA App' />
            <meta name='description' content='Best PWA App in the world' />
            <meta name='format-detection' content='telephone=no' />
            <meta name='mobile-web-app-capable' content='yes' />
            <meta name='msapplication-TileColor' content='#2B5797' />
            <meta name='msapplication-tap-highlight' content='no' />
            <meta name='theme-color' content='#000000' />
            <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
            <link rel='manifest' href='manifest.json' />
            <link rel='shortcut icon' href='/icons/favicon.ico' />
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:url' content='https://sewaweb.vercel.app' />
            <meta name='twitter:title' content='PWA App' />
            <meta name='twitter:description' content='Best PWA App in the world' />
            <meta name='twitter:image' content='https://sewaweb.vercel.app/icons/android-chrome-192x192.png' />
            <meta name='twitter:creator' content='@janfalih' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='PWA App' />
            <meta property='og:description' content='Best PWA App in the world' />
            <meta property='og:site_name' content='PWA App' />
            <meta property='og:url' content='https://sewaweb.vercel.app' />
            <meta property='og:image' content='https://sewaweb.vercel.app/icons/apple-touch-icon.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument