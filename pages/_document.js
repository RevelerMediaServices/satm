import Document, { Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Charm|Charmonman|Cormorant+SC|Diplomata|Diplomata+SC|Emilys+Candy|Euphoria+Script|IM+Fell+DW+Pica+SC|Meddon|MedievalSharp|Milonga|Montez|Mr+Bedfort|Mr+Dafoe|Mrs+Saint+Delafield|Rochester|Romanesco|Rouge+Script|Sancreek|UnifrakturCook:700|Zilla+Slab+Highlight"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Cookie|Patrick+Hand|Permanent+Marker|Special+Elite"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body style={{ padding: "0", margin: "0" }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

/*

Loaded Fonts
font-family: 'Charm', cursive;
font-family: 'Mr Dafoe', cursive;

font-family: 'Rochester', cursive;
font-family: 'Charmonman', cursive;
font-family: 'Montez', cursive;
font-family: 'Emilys Candy', cursive;
font-family: 'Euphoria Script', cursive;
font-family: 'Rouge Script', cursive;
font-family: 'Meddon', cursive;
font-family: 'Cormorant SC', serif;
font-family: 'Mrs Saint Delafield', cursive;
font-family: 'Milonga', cursive;
font-family: 'Sancreek', cursive;

font-family: 'IM Fell DW Pica SC', serif;
font-family: 'UnifrakturCook', cursive;
font-family: 'MedievalSharp', cursive;
font-family: 'Diplomata SC', cursive;
font-family: 'Diplomata', cursive;
font-family: 'Zilla Slab Highlight', cursive;

font-family: 'Romanesco', cursive;
font-family: 'Mr Bedfort', cursive;

*/
