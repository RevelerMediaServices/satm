import Link from "next/link";
import { useSpring, animated } from "react-spring";

import { Button } from "reactstrap";

import styled from "styled-components";

const ESWButtonDiv = styled.div`
  #borderDiv {
  }

  .animatedESWButtonDiv {
  }
`;

const config = { mass: 5, tension: 2000, friction: 5000 };

function ESWButton() {
  const ESWButtonProps = useSpring({
    config,
    opacity: 1,
    from: {
      opacity: 0
    }
  });

  return (
    <ESWButtonDiv>
      <div id="ESWButtonDiv">
        <animated.div className="animatedESWButtonDiv" style={ESWButtonProps}>
          <Link href="/">
            <Button>
              <a>Enter Santa's Workshop</a>
            </Button>
          </Link>
        </animated.div>
      </div>
    </ESWButtonDiv>
  );
}

export default ESWButton;
