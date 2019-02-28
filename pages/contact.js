import styled from "styled-components";
import NextSeo from "next-seo";

import Layout from "../components/Layout";
import LetterToSanta from "../components/LetterToSanta";

const ContactDiv = styled.div`
  height: 85vh;
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
      <LetterToSanta />
    </ContactDiv>
  </Layout>
);

export default Contact;
