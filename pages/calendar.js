import { Component } from "react";
import styled from "styled-components";
import NextSeo from "next-seo";

import Layout from "../components/Layout";
import EventCalendar from "../components/EventCalendar";

import { Row, Col } from "reactstrap";

import satmLogo from "../static/images/logo.png";

const CalendarDiv = styled.div`
  height: 85vh;

  #eventCalendarHeader {
    height: 15vh;
  }

  .ecHeaderWords {
    text-align: center;
    font-size: 2.5vw;
  }

  .ecHeaderImage {
    text-align: center;
    img {
      width: 7vw;
    }
  }
`;

export default class calendar extends Component {
  render() {
    return (
      <Layout>
        <CalendarDiv>
          <NextSeo
            config={{
              title: "Santa & the Mrs of West Texas",
              description: "Santa and Mrs Claus services for West Texas"
            }}
          />
          <Row id="eventCalendarHeader">
            <Col lg={9} className="ecHeaderWords">
              Santa & the Mrs Appearance Schedule
            </Col>
            <Col lg={3} className="ecHeaderImage">
              <img src={satmLogo} alt="SatM Logo" />
            </Col>
          </Row>
          <EventCalendar />
        </CalendarDiv>
      </Layout>
    );
  }
}
