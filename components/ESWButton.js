import Link from "next/link";
import { useSpring, animated } from "react-spring";

import { Button } from "reactstrap";

import styled from "styled-components";

const ESWButtonDiv = styled.div`
  font-family: "Emilys Candy", cursive;
  font-weight: 0;

  position: absolute;
  top: 65vh;
  left: 55vw;

  font-size: 2vw;

  .btn-red {
    background: rgba(192, 19, 19, 0.8);
    border: 1vw double rgba(7, 80, 8, 0.5);
    border-radius: 100%;
    box-shadow: 0 0.2vw 0 0.3vw #c91919 inset, 0 0 0 0.3vw rgba(65, 8, 8, 0.25),
      0 1.5vw rgba(255, 255, 255, 0.5) inset, 0 0 0 0.5vw rgba(0, 0, 0, 0.25),
      inset 0 0 0.5vw #000000;
    cursor: pointer;
    display: inline-block;
    height: 15vw;
    width: 15vw;
    color: rgba(7, 135, 8, 1);

    font-weight: 800;
    text-shadow: -0.04vw -0.04vw 0.3vw rgba(0, 0, 0, 0.5),
      0.04vw -0.04vw 0.3vw rgba(0, 0, 0, 0.5),
      -0.04vw 0.04vw 0.3vw rgba(0, 0, 0, 0.5),
      0.04vw 0.04vw 0.3vw rgba(0, 0, 0, 0.9);
  }
  .btn-red:hover {
    background: rgba(7, 80, 8, 0.8);
    box-shadow: 0 -0.2vw 0 0.3vw rgba(192, 19, 19, 0.8) inset,
      0 0.3vw 0.3vw rgba(0, 0, 0, 0.17), 0 1.5vw rgba(0, 0, 0, 0.32) inset,
      0 0 0 0.5vw rgba(255, 255, 255, 0.25), inset 0 0 0.5vw #000000;
    border: 1vw double rgba(192, 19, 19, 0.8);
    color: rgba(192, 19, 19, 0.8);
  }

  .animatedESWButtonDiv {
  }
`;

const config = { mass: 5, tension: 0, friction: 0 };

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
      <animated.div className="animatedESWButtonDiv" style={ESWButtonProps}>
        <Link href={process.env.BACKEND_URL + "/home"}>
          <a>
            <button className="btn-red btn-red:hover">
              Enter
              <br /> Santa's <br /> Workshop
            </button>
          </a>
        </Link>
      </animated.div>
    </ESWButtonDiv>
  );
}

export default ESWButton;
