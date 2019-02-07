import Layout from "../components/Layout";

import styled from "styled-components";

import img from "../static/images/loveStartsHere.jpg";

const IndexDiv = styled.div`
  height: 85vh;

  background-image: url(${img});
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Index = props => (
  <Layout>
    <IndexDiv>
      <h1>
        RMS Static Website Template
        <br /> w/Server Side Rendering
      </h1>
      <p>Reveler Media Services Base SEO Template</p>
    </IndexDiv>
  </Layout>
);

export default Index;
