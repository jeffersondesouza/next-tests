import { ServerStyleSheet } from "styled-components";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const { renderPage } = context;

    const sheet = new ServerStyleSheet();
    const originalRenderPage = renderPage;

    try {
      renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      });

      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      });
    } catch (error) {
      sheet.seal();
    }

    // Returns an object like: { html, head, errorHtml, chunks, styles }
    return renderPage();
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
