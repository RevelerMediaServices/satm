import styled from "styled-components";

import imgCoal from "../static/images/lumpOfCoal.jpg";

import { Row, Col } from "reactstrap";

const HowBehavedSection = styled.section`
  text-align: left;
  font-size: 1vw;
  font-family: "IM Fell DW Pica SC", serif;

  #imgCoal {
    width: 5vw;
    margin: 0.2vw;
    border: 0.2vw solid black;
  }

  #rowNaughty {
    h4 {
      font-weight: 900;
      font-size: 1.3vw;
      margin-bottom: 2vw;
      text-align: center;
      padding-top: 0.2vw;
    }

    p {
      font-size: 1vw;
      letter-spacing: 0;
      text-align: justify;
    }
  }

  #wouldWait {
    color: red;
    font-size: 1.3vw;
    margin-top: 1vw;
    padding-left: 2vw;
  }
`;

function NaughtyChecked() {
  return (
    <HowBehavedSection>
      <Row id="rowNaughty">
        <Col id="wouldWait" xs={3}>
          I would wait to send this!
        </Col>
        <Col xs={6}>
          <h4>You have been Bad?</h4>
          <p>
            Please spend the next week spreading charity and the Christmas
            Spirit to become Good.
          </p>
        </Col>
        <Col xs={3}>
          <img id="imgCoal" src={imgCoal} alt="" />
        </Col>
      </Row>
    </HowBehavedSection>
  );
}

export default NaughtyChecked;
