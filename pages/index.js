import Link from "next/link";

import styled from "styled-components";

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
  </IndexDiv>
);
