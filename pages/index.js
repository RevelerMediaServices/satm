import Link from "next/link";

import styled from "styled-components";

import { Button } from "reactstrap";

import img from "../static/images/enterprise.jpg";

const IndexDiv = styled.div`
  a {
    color: green;
  }
`;

export default () => (
  <IndexDiv>
    Hello World.{" "}
    <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
      <a>About</a>
    </Link>
    <Button>Test</Button>
    <br />
    <img src={img} alt="" />
  </IndexDiv>
);
