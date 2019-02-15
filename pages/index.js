import Layout from "../components/Layout";

import styled from "styled-components";

import NextSeo from "next-seo";

import SocialMedia from "../components/SocialMedia";

import img from "../static/images/Landing2.jpg";
import Typing from "react-typing-animation";

import IndexAnimation from "../components/IndexAnimation";

import Polaroid from "../components/Polaroid";
import ESWButton from "../components/ESWButton";

const IndexDiv = styled.div`
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;

  #polaroid {
  }
`;

const Index = () => (
  <IndexDiv>
    <NextSeo
      config={{
        title: "Santa & the Mrs of West Texas",
        description: "Santa and Mrs Claus services for West Texas"
      }}
    />
    <IndexAnimation />
    <Polaroid />
    <SocialMedia />
    <ESWButton />
  </IndexDiv>
);

export default Index;
