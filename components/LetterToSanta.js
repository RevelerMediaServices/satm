import { useState } from "react";

import styled from "styled-components";

import imgPostcardStamp from "../static/images/stamp.png";

import Input from "@material-ui/core/Input";
import Radio from "@material-ui/core/Radio";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

import {
  NaughtyChecked,
  NiceChecked,
  VeryNiceChecked
} from "./HowBehavedChecked";

const LetterToSantaSection = styled.section`
  #innerBorder {
    width: 100%;
    height: 100%;
    border: 0.2vw solid black;
  }

  #satmPostCard {
    margin: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 40vw;
    height: 25vw;
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

  p {
    font-family: "Special Elite", cursive;
    font-size: 1.75vw;
    text-align: left;
    margin-left: 0.5vw;
    font-variant: small-caps;
    width: 100%;
    font-weight: 800;
    letter-spacing: 0.3vw;
    margin-top: -1vw;
  }

  #imgPostcardStamp {
    width: 5vw;
    position: absolute;
    top: 1vw;
    right: 1vw;
  }

  .inputsSantaPostcard {
    margin: 0 0.2vw 0 0.2vw;
  }

  #inputNameIs {
    width: 8vw;
  }

  #pYearsOld {
    padding-right: 1vw;
    text-align: right;
  }

  #inputAgeIs {
    width: 2vw;
  }

  #inputHowBehaved {
    width: 4vw;
    font-size: 1vw;
  }

  #pRadioGroupHowBehaved {
    text-align: right;
    padding-right: 0.5vw;
  }

  #buttonPostcardSubmit {
    position: absolute;
    top: 50%;
    left: 0.5vw;
    width: 10vw;
    font-size: 1vw;
  }
`;

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

function LetterToSanta() {
  const [howBehaved, setHowBehaved] = useState("naughty");
  const isEnabled = howBehaved === "naughty";
  return (
    <LetterToSantaSection>
      <h1>Contact Santa & the Mrs of West Texas</h1>

      <section id="satmPostCard">
        <section id="innerBorder">
          <h2>Postcard to Santa & the Mrs</h2>

          <img id="imgPostcardStamp" src={imgPostcardStamp} alt="" />

          <p>
            My name is
            <Input id="inputNameIs" className="inputsSantaPostcard" />,
          </p>

          <p id="pYearsOld">
            and I am
            <Input id="inputAgeIs" className="inputsSantaPostcard" />
            years old.
          </p>

          <p>
            I have been
            <Input
              disabled
              defaultValue="Choose 1"
              id="inputHowBehaved"
              className="inputsSantaPostcard"
            />
            years old.
          </p>
          <p id="pRadioGroupHowBehaved">
            <InputLabel>Bad</InputLabel>
            <Radio
              value="naughty"
              onChange={event => setHowBehaved(event.target.value)}
              checked={howBehaved === "naughty"}
            />
            <InputLabel>Good</InputLabel>
            <Radio
              value="nice"
              onChange={event => setHowBehaved(event.target.value)}
              checked={howBehaved === "nice"}
            />
            <InputLabel>Very Good</InputLabel>
            <Radio
              value="veryNice"
              onChange={event => setHowBehaved(event.target.value)}
              checked={howBehaved === "veryNice"}
            />{" "}
            {howBehaved === "naughty" && <NaughtyChecked />}
            {howBehaved === "nice" && <NiceChecked />}
            {howBehaved === "veryNice" && <VeryNiceChecked />}
          </p>

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
        </section>
      </section>
    </LetterToSantaSection>
  );
}

export default LetterToSanta;
