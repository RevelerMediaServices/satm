import Head from "next/head";
import Navbar from "./Navbar1";

import metaImage from "../static/images/logo.png";

import styled from "styled-components";

const LayoutDiv = styled.div`
  height: 100vh;
`;

const Layout = props => (
  <LayoutDiv>
    <Head>
      <meta property="og:title" content="Santa & the Mrs of West Texas" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="Generate a Canonical Pague URL" />
      <meta property="og:image" content={metaImage} />
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </LayoutDiv>
);

export default Layout;
