import styled from "styled-components";
import NextSeo from "next-seo";

import Layout from "../components/Layout";
import LetterToSanta from "../components/LetterToSanta";

const ContactDiv = styled.div`
  height: 85vh;
  h1 {
    color: black;
    text-align: center;
  }
`;

const Contact = () => (
  <Layout>
    <ContactDiv>
      <NextSeo
        config={{
          title: "Santa & the Mrs of West Texas",
          description: "Santa and Mrs Claus services for West Texas"
        }}
      />
      <h1>Contact Santa & the Mrs of West Texas</h1>
      <LetterToSanta />
    </ContactDiv>
  </Layout>
);

export default Contact;
