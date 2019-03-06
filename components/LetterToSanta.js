import { useState } from "react";

import styled from "styled-components";

import imgPostcardStamp from "../static/images/stamp.png";
import imgVectorSantaBaking from "../static/images/BakingSanta-01.png";

import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { Row, Col } from "reactstrap";

import NaughtyChecked from "./HowBehavedChecked";

const LetterToSantaSection = styled.section`
  #innerBorder {
    width: 100%;
    height: 100%;
    border: 0.2vw solid black;
    min-height: 25vw;
  }

  #satmPostCard {
    margin: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 40vw;
    height: auto;
    border: 1vw dashed rgba(192, 8, 8, 1);
    outline: 0.2vw solid black;
    box-shadow: -0.3vw 0.3vw 1vw rgba(0, 0, 0, 0.8);
  }
  h1 {
    font-family: "Cookie", cursive;
    font-size: 4.5vw;
    text-align: center;
  }

  h2 {
    font-family: "Permanent Marker", cursive;
    font-size: 2.15vw;
    text-align: left;
    padding-left: 0.2vw;
    padding-top: 0.2vw;
    padding-bottom: 1vw;
    width: 32vw;
    text-align: center;
  }

  h4 {
    margin: 0;
    padding: 0;
  }

  .nameYearsOldWords {
    font-family: "Special Elite", cursive;
    font-size: 1.5vw;
    text-align: left;
    margin-left: 0.5vw;
    font-variant: small-caps;
    width: 100%;
    font-weight: 800;
    letter-spacing: 0.3vw;
  }

  #imgPostcardStamp {
    width: 5vw;
    position: absolute;
    top: 1vw;
    right: 1vw;
  }

  .inputsSantaPostcard {
    margin: -0.7vw 0.2vw 0 0.2vw;
  }

  #inputNameIs {
    width: 8vw;
    text-align: center;
  }

  #divYearsOld {
    padding-right: 1vw;
    text-align: right;
  }

  #inputAgeIs {
    width: 2vw;
  }

  #rowEmail {
    font-family: "Special Elite", cursive;
    font-size: 1.5vw;
    text-align: left;
    margin-left: 0.5vw;
    font-variant: small-caps;
    width: 100%;
    font-weight: 800;
    letter-spacing: 0.3vw;
  }

  #rowHaveBeen {
    font-family: "Special Elite", cursive;
    font-size: 1.5vw;
    text-align: left;
    margin-left: 0.5vw;
    font-variant: small-caps;
    width: 100%;
    font-weight: 800;
    letter-spacing: 0.3vw;
    margin-bottom: 0.5vw;
  }

  #rowRadioGroupHowBehaved {
    text-align: right;
    padding-right: 0.5vw;
    margin-top: 0;
    margin-bottom: 0.5vw;
  }

  #buttonPostcardSubmit {
    width: 8vw;
    font-size: 0.8vw;
    padding: 0;
  }

  .radioButtonsBadorGood {
    margin-right: 2vw;
    margin-left: 0.5vw;
    padding: 0;
  }

  #colRadioButtons {
    font-size: 1vw;
    font-weight: 800;
  }

  #inputHowBehaved {
    width: 4vw;
    font-size: 1vw;
  }

  .inputPleaseBringMe {
    width: 100%;
  }

  .rowNice {
    h4 {
      font-weight: 900;
      font-size: 1.3vw;
      text-align: center;
      padding-top: 0.2vw;
    }
  }

  #santsGonnaBePleased {
    color: red;
    font-size: 1.3vw;
    margin-top: 1vw;
    padding-left: 2vw;
  }

  #santasGonnaLikeThis {
    color: red;
    font-size: 1.3vw;
    margin-top: 1vw;
    padding-left: 2vw;
  }

  #imgVectorSantaBaking {
    width: 5vw;
    margin: 0.2vw;
    border: 0.2vw solid black;
    padding: 0.2vw;
  }
`;

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

function LetterToSanta() {
  // initiate variables and set initial state
  const [name, setName] = useState("");
  const [yearsOld, setYearsOld] = useState("");
  const [email, setEmail] = useState("");
  const [howBehaved, setHowBehaved] = useState("");
  const [itemNum1, setItemNum1] = useState("");
  const [itemNum2, setItemNum2] = useState("");

  const isEnabled = howBehaved === "naughty";
  return (
    <LetterToSantaSection>
      <h1>Contact Santa & the Mrs of West Texas </h1>

      <section id="satmPostCard">
        <section id="innerBorder">
          <h2>Postcard to Santa & the Mrs</h2>
          <img id="imgPostcardStamp" src={imgPostcardStamp} alt="" />
          <div className="nameYearsOldWords">
            My name is
            <TextField
              id="inputNameIs"
              className="inputsSantaPostcard"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </div>
          <div id="divYearsOld" className="nameYearsOldWords">
            , and I am
            <TextField
              id="inputAgeIs"
              className="inputsSantaPostcard"
              label="age"
              value={yearsOld}
              onChange={e => setYearsOld(e.target.value)}
            />{" "}
            years old.
          </div>
          <Row className="nameYearsOldWords">
            <Col xs={5}>
              <span>Email Address:</span>
            </Col>
            <Col xs={7}>
              <TextField
                required
                label="Email Required"
                style={{ width: "100%" }}
                id="inputEmail"
                className="inputsSantaPostcard"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="nameYearsOldWords">
            I have been
            <TextField
              disabled
              defaultValue="Choose 1"
              id="inputHowBehaved"
              className="inputsSantaPostcard"
            />
            this year.
          </Row>
          <Row id="rowRadioGroupHowBehaved">
            <Col xs={4}>
              <Button
                variant="contained"
                disabled={isEnabled}
                id="buttonPostcardSubmit"
                type="submit"
                value="Submit"
                color="secondary"
              >
                Send To Santa
              </Button>
            </Col>
            <Col id="colRadioButtons" xs={8}>
              Bad
              <Radio
                value="naughty"
                onChange={event => setHowBehaved(event.target.value)}
                checked={howBehaved === "naughty"}
                className="radioButtonsBadorGood"
              />
              Good
              <Radio
                value="nice"
                onChange={event => setHowBehaved(event.target.value)}
                checked={howBehaved === "nice"}
                className="radioButtonsBadorGood"
              />
              Very Good
              <Radio
                value="veryNice"
                onChange={event => setHowBehaved(event.target.value)}
                checked={howBehaved === "veryNice"}
                className="radioButtonsBadorGood"
              />
            </Col>
          </Row>
          {howBehaved === "naughty" && <NaughtyChecked />}
          {howBehaved === "nice" && (
            <Row className="rowNice">
              <Col xs={3} id="santasGonnaLikeThis">
                Santa's gonna like this!
              </Col>
              <Col xs={6}>
                <h4>You've Been Good!</h4>
                <TextField
                  style={{ padding: "0", margin: "0" }}
                  className="inputPleaseBringMe inputsSantaPostcard"
                  label="What would you like?"
                  value={itemNum1}
                  onChange={e => setItemNum1(e.target.value)}
                />
              </Col>
              <Col xs={3}>
                <img
                  id="imgVectorSantaBaking"
                  src={imgVectorSantaBaking}
                  alt=""
                />
              </Col>
            </Row>
          )}
          {howBehaved === "veryNice" && (
            <Row className="rowNice">
              <Col xs={3} id="santsGonnaBePleased">
                Santa's Gonna Be Pleased!
              </Col>
              <Col xs={6}>
                <h4>You've Been Good!</h4>
                <TextField
                  style={{ padding: "0", margin: "0" }}
                  className="inputPleaseBringMe inputsSantaPostcard"
                  label="What would you like?"
                  value={itemNum1}
                  onChange={e => setItemNum1(e.target.value)}
                />
                <TextField
                  style={{ padding: "0", margin: "0" }}
                  className="inputPleaseBringMe inputsSantaPostcard"
                  label="Enter a Second Gift"
                  value={itemNum2}
                  onChange={e => setItemNum2(e.target.value)}
                />
              </Col>
              <Col xs={3}>
                <img
                  id="imgVectorSantaBaking"
                  src={imgVectorSantaBaking}
                  alt=""
                />
              </Col>
            </Row>
          )}
        </section>
      </section>
    </LetterToSantaSection>
  );
}

export default LetterToSanta;
