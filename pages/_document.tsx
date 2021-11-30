import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
          <link
            href='https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&family=Poppins:wght@200;400&family=Righteous&display=swap'
            rel='stylesheet'
          />
          <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = "manual"` }} />
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
