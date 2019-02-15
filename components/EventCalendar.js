import BigCalendar from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

import styled from "styled-components";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const EventCalendarDiv = styled.div`
  height: 100vh;
`;

const myEventsList = [
  {
    id: 6,
    title: "Christmas at the Mall",
    start: new Date(2019, 11, 12, 17, 30, 0, 0),
    end: new Date(2019, 11, 12, 18, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting"
  },
  {
    id: 7,
    title: "Interview",
    start: new Date(2019, 3, 12, 1, 30, 0, 0),
    end: new Date(2019, 3, 12, 2, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting"
  },
  {
    id: 8,
    title: "Work Out",
    start: new Date(2019, 3, 12, 2, 30, 0, 0),
    end: new Date(2019, 3, 12, 4, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting"
  }
];

const EventCalendar = props => (
  <EventCalendarDiv>
    <BigCalendar
      style={{ height: "100vh" }}
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      views={{
        month: true
      }}
    />
  </EventCalendarDiv>
);

export default EventCalendar;
