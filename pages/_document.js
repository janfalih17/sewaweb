import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => {
      originalRenderPage();
    };
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
<meta name="description" content="Description"/>
<meta name="keywords" content="Keywords"/>
<title>Page Title</title>

{/* Android */}
<meta name="theme-color" content="#48bb78"/>
<meta name="mobile-web-app-capable" content="yes"/>

{/* iOS */}
<meta name="apple-mobile-web-app-title" content="Application Title"/>
<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-status-bar-style" content="default"/>
{/* <!-- Windows  --> */}
<meta name="msapplication-navbutton-color" content="#48bb78"/>
<meta name="msapplication-TileColor" content="#48bb78"/>
<meta name="msapplication-TileImage" content="ms-icon-144x144.png"/>
<meta name="msapplication-config" content="browserconfig.xml"/>

{/* <!-- Pinned Sites  --> */}
<meta name="application-name" content="Application Name"/>
<meta name="msapplication-tooltip" content="Tooltip Text"/>
<meta name="msapplication-starturl" content="/"/>

{/* <!-- Tap highlighting  --> */}
<meta name="msapplication-tap-highlight" content="no"/>

{/* <!-- UC Mobile Browser  --> */}
<meta name="full-screen" content="yes"/>
<meta name="browsermode" content="application"/>

{/* <!-- Disable night mode for this page  --> */}
<meta name="nightmode" content="enable/disable"/>

{/* <!-- Fitscreen  --> */}
<meta name="viewport" content="uc-fitscreen=yes"/>

{/* <!-- Layout mode --> */}
<meta name="layoutmode" content="fitscreen/standard"/>

{/* <!-- imagemode - show image even in text only mode  --> */}
<meta name="imagemode" content="force"/>

{/* <!-- Orientation  --> */}
<meta name="screen-orientation" content="portrait"/>
<link href="/manifest.json" rel="manifest"/>
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