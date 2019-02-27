import BigCalendar from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

import styled from "styled-components";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const SantasEventCalendarDiv = styled.div`
  height: 68vh;
  margin-bottom: 2vh;
`;

const myEventsList = [
  {
    id: 6,
    title: "Christmas at the Mall",
    start: new Date(2019, 1, 15, 17, 30, 0, 0),
    end: new Date(2019, 1, 15, 18, 30, 0, 0),
    desc:
      "Santa & the Mrs will be taking Christmas wishes and spreading joy to the older children at the Music City Mall from 5:30 to 6:30 pm.  Remembering the true meaning of Christmas, all fees and tips will be donated to Toys for Tots, so bring your list and your generosity and Join Santa and the Mrs. in celebrating the Christmas spirt."
  },
  {
    id: 7,
    title: "Santa Sing Along",
    start: new Date(2019, 1, 22, 1, 30, 0, 0),
    end: new Date(2019, 1, 22, 2, 30, 0, 0),
    desc: "Join Santa & the Mrs in caroling and the Christmas spirit."
  },
  {
    id: 8,
    title: "Lighting the Lights",
    start: new Date(2019, 1, 28, 2, 30, 0, 0),
    end: new Date(2019, 1, 28, 4, 30, 0, 0),
    desc: "Join Santa & the Mrs to Light the Lights for the Christmas Season"
  }
];

const SantasEventCalendar = props => (
  <SantasEventCalendarDiv>
    <BigCalendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      views={{
        month: true
      }}
    />
  </SantasEventCalendarDiv>
);

export default SantasEventCalendar;
