import { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";

import { Row, Col } from "reactstrap";

const LetterToSantaDiv = styled.div`
  margin-top: 10vh;
  margin-left: 10vh;
  padding-top: 2vh;
  height: 24vw;
  width: 36vw;
  border: 0.1vw solid black;
  box-shadow: -0.2vw 0.2vw 0.4vw 0.2vw rgba(0, 0, 0, 0.5);
  transform: rotate(-20deg);

  .ltsRow {
    margin-left: 5vh;
  }
`;

export default class LetterToSanta extends Component {
  state = {
    checkedNaughty: false,
    checkedNice: false,
    checkedVeryNice: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <LetterToSantaDiv>
        <Row className="ltsRow">Postcard to Santa</Row>
        <Row className="ltsRow">
          My Name is <TextField /> and I am <TextField /> years old.
        </Row>
        <Row className="ltsRow">
          Question #1: I have been <TextField /> this year.:
          <Row className="ltsRow">
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedNaughty}
                    onChange={this.handleChange("checkedNaughty")}
                    value="checkedNaughty"
                  />
                }
                label="Naughty"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedNice}
                    onChange={this.handleChange("checkedNice")}
                    value="checkedNice"
                  />
                }
                label="Nice"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedVeryNice}
                    onChange={this.handleChange("checkedVeryNice")}
                    value="checkedNice"
                  />
                }
                label="Very Nice"
              />
            </FormGroup>
          </Row>
        </Row>
        <Row className="ltsRow">
          <FormLabel>
            if answer to question 1 Naughty, please be Nice!
            <br />
            if Nice fill in Slot #1
            <br />
            if Very Nice... Amazing, fill in both Spot #1 and #2
          </FormLabel>
        </Row>
        <Row className="ltsRow">
          <FormControlLabel control={<TextField />} label="Spot #1" />
        </Row>

        <Row className="ltsRow">
          <FormControlLabel control={<TextField />} label="Spot #2" />
        </Row>
      </LetterToSantaDiv>
    );
  }
}
