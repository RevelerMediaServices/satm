import Layout from "../components/Layout";

import styled from "styled-components";

import img from "../static/images/loveStartsHere.jpg";

import NextSeo from "next-seo";

const HomeDiv = styled.div`
  height: 85vh;

  background-image: url(${img});
  background-size: 100%;
  background-repeat: no-repeat;

  h1 {
    color: red;
  }
`;

const Home = () => (
  <Layout>
    <HomeDiv>
      <NextSeo
        config={{
          title: "Santa & the Mrs of West Texas",
          description: "Santa and Mrs Claus services for West Texas"
        }}
      />
      <h1>Home</h1>
      <p>Reveler Media Services Base SEO Template</p>
    </HomeDiv>
  </Layout>
);

export default Home;
