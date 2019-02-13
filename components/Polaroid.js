import styled from "styled-components";

import polaroidImg from "../static/images/Landing.jpg";
import polaroidImg1 from "../static/images/Landing1.jpg";

const PolaroidDiv = styled.div`
  position: absolute;
  left: 60vw;
  top: 20vh;

  img {
    width: 17vw;
    height: 13vw;
  }
  font-size: 1vw;

  div.polaroid {
    width: 17vw;
    padding: 10px 10px 20px 10px;
    border: 1px solid #bfbfbf;
    background-color: white;
    box-shadow: 10px 10px 5px #aaaaaa;
    height: 17vw;
    font-size: 1vw;
  }

  div.rotate_right {
    float: left;
    -ms-transform: rotate(7deg); /* IE 9 */
    -webkit-transform: rotate(7deg); /* Safari */
    transform: rotate(7deg);
  }

  div.rotate_left {
    float: left;
    -ms-transform: rotate(-8deg); /* IE 9 */
    -webkit-transform: rotate(-8deg); /* Safari */
    transform: rotate(-8deg);
  }
`;

const Polaroid = () => {
  return (
    <PolaroidDiv>
      <div class="polaroid rotate_right">
        <img src={polaroidImg} alt="Pulpit rock" width="284" height="213" />
        <p className="caption">The pulpit rock in Lysefjorden, Norway.</p>
      </div>

      <div className="polaroid rotate_left">
        <img
          src={polaroidImg1}
          alt="Monterosso al Mare"
          width="284"
          height="213"
        />
        <p class="caption">
          Monterosso al Mare. One of the five villages in Cinque Terre, Italy.
        </p>
      </div>
    </PolaroidDiv>
  );
};

export default Polaroid;
