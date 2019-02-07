import Layout from "../components/Layout";

import styled from "styled-components";

import img from "../static/images/loveStartsHere.jpg";

import NextSEO from "next-seo";

const IndexDiv = styled.div`
  height: 85vh;

  background-image: url(${img});
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Index = props => (
  <Layout>
    <NextSEO
      config={{
        title: "Santa & the Mrs of West Texas",
        description: "Santa and Mrs Claus services for West Texas"
      }}
    >
      <IndexDiv>
        <h1>
          RMS Static Website Template
          <br /> w/Server Side Rendering
        </h1>
        <p>Reveler Media Services Base SEO Template</p>
      </IndexDiv>
    </NextSEO>
  </Layout>
);

export default Index;
