import { useSpring, animated } from "react-spring";

import styled from "styled-components";

import borderSVG from "../static/images/Joy_8065-01.svg";

const IndexAnimationDiv = styled.div`
  position: absolute;
  top: 15vh;
  left: 10vw;
  background: rgba(192, 19, 19, 0.9);
  border: 1vmax double rgba(7, 80, 8, 1);
  border-radius: 2vmax;
  font-weight: 800;
  -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);

  #borderdiv {
    margin: 1vmax;
    border-radius: 0.5vmax;
  }

  .animatedDiv {
    color: black;
    width: 40vw;
    font-size: 3.5vw;
    padding-left: 0.5vw;
    padding-bottom: 1vh;
    font-family: "Mr Dafoe", cursive;
    letter-spacing: 0.3vw;
    text-shadow: 0.05vmax 0.05vmax 10px #fff;
  }

  .bringingJoy {
  }

  .permianBasin {
  }
`;

const config = { mass: 5, tension: 2000, friction: 5000 };

function IndexAnimation() {
  const indexWordProps1 = useSpring({
    config,
    opacity: 1,
    from: {
      opacity: 0
    }
  });

  const indexWordProps2 = useSpring({
    config,
    opacity: 1,
    delay: 2000,
    from: {
      opacity: 0
    }
  });

  return (
    <IndexAnimationDiv>
      <div id="borderdiv">
        <animated.div
          className="animatedDiv bringingJoy"
          style={indexWordProps1}
        >
          Bringing Joy & Presents
        </animated.div>
        <animated.div
          className="animatedDiv permianBasin"
          style={indexWordProps2}
        >
          to the Permian Basin
        </animated.div>
      </div>
    </IndexAnimationDiv>
  );
}

export default IndexAnimation;
