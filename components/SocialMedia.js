import Link from "next/link";

import styled from "styled-components";

import { ButtonGroup, Button } from "reactstrap";

import NavButtonGroup from "./NavButtonGroup";

const SocialMediaDiv = styled.div`
  position: absolute;
  top: 50vh;
  left: 60vw;
`;

const SocialMedia = () => (
  <SocialMediaDiv>
    <NavButtonGroup />
  </SocialMediaDiv>
);

export default SocialMedia;
