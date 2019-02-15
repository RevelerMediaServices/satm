import Layout from "../components/Layout";
import EventCalendar from "../components/EventCalendar";

import styled from "styled-components";

import img from "../static/images/loveStartsHere.jpg";

import NextSeo from "next-seo";

const CalendarDiv = styled.div``;

const Calendar = () => (
  <Layout>
    <CalendarDiv>
      <NextSeo
        config={{
          title: "Santa & the Mrs of West Texas",
          description: "Santa and Mrs Claus services for West Texas"
        }}
      />
      <EventCalendar />
    </CalendarDiv>
  </Layout>
);

export default Calendar;
