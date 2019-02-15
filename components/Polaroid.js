import styled from "styled-components";

import polaroidImg from "../static/images/Landing.jpg";
import polaroidImg1 from "../static/images/Landing1.jpg";

const PolaroidDiv = styled.div`
  position: absolute;
  left: 52vw;
  top: 10vh;

  img {
    width: 17vw;
    height: 13vw;
  }
  font-size: 1vw;

  .polaroid {
    width: 18.6vw;
    padding: 0.8vw 0.8vw 1.6vw 0.8vw;
    border: 1px solid #bfbfbf;
    background-color: white;
    box-shadow: 0.3vw 0.3vw 0.15vw #aaaaaa;
    height: 19vw;
    font-size: 1vw;
  }

  .rotate_right {
    float: left;
    -ms-transform: rotate(7deg); /* IE 9 */
    -webkit-transform: rotate(7deg); /* Safari */
    transform: rotate(7deg);
  }

  .rotate_left {
    float: left;
    -ms-transform: rotate(-8deg); /* IE 9 */
    -webkit-transform: rotate(-8deg); /* Safari */
    transform: rotate(-8deg);
  }

  .caption {
    font-family: "IM Fell DW Pica SC", serif;
  }
`;

const Polaroid = () => {
  return (
    <PolaroidDiv>
      <div className="polaroid rotate_right">
        <img src={polaroidImg} alt="Pulpit rock" width="284" height="213" />
        <p className="caption">
          Mrs. Santa says, "Love you, Have a Merry Christmas"
        </p>
      </div>

      <div className="polaroid rotate_left">
        <img
          src={polaroidImg1}
          alt="Monterosso al Mare"
          width="284"
          height="213"
        />
        <p className="caption">
          Santa says, "Bake Cookies, Enjoy Family and Be Good"
        </p>
      </div>
    </PolaroidDiv>
  );
};

export default Polaroid;
