import Head from "next/head";
import Navbar from "./Navbar1";

import metaImage from "../static/images/logo.png";

import styled from "styled-components";

const LayoutDiv = styled.div``;

const Layout = props => (
  <LayoutDiv>
    <Head>
      <meta property="og:title" content="Santa & the Mrs of West Texas" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="Generate a Canonical Pague URL" />
      <meta property="og:image" content={metaImage} />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </LayoutDiv>
);

export default Layout;
