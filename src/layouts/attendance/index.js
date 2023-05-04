import React, { useEffect } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// import { Calendar, momentLocalizer } from "react-big-calendar";

// import moment from "moment";

// prop types
import PropTypes from "prop-types";

// import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import data from "./data";

import MarkAttendance from "./markAttendance";

// firebase
import { db } from "../../Firebase/config";

function Attendance({ uid }) {
  // eslint-disable-next-line no-unused-vars
  const [weekendsVisible, setWeekendsVisible] = React.useState(true);
  // eslint-disable-next-line no-unused-vars
  const [currentEvents, setCurrentEvents] = React.useState([]);
  const [attendanceData, setAttendanceData] = React.useState([]);
  function createEventId() {
    return String(Date.now());
  }
  const handleDateSelect = (selectInfo) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  // -------------------------------->working on this part (to get the data from the firebase) --------------------------------
  useEffect(() => {
    const unsubscribe = db
      .collection("attendanceCollection")
      .where("uid", "==", uid)
      .onSnapshot((snapshot) => {
        console.log("snapshot", snapshot);
        const array = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setAttendanceData(array);
      });

    return unsubscribe;
  }, []);
  console.log("attendanceData", attendanceData);

  // --------------------------------------end---------------

  // function renderEventContent(eventInfo) {
  //   return (
  //     <>
  //       <b>{eventInfo.timeText}</b>
  //       <i>{eventInfo.event.title}</i>
  //     </>
  //   );
  // }

  // const handleEvents = (events) => {
  //   // this.setState({
  //   //   currentEvents: events,
  //   // });
  //   setCurrentEvents((current) => [...current, events]);
  // };

  const handleEventClick = (clickInfo) => {
    if (`Are you sure you want to delete the event '${clickInfo.event.title}'`) {
      clickInfo.event.remove();
    }
  };
  const events = data.login_info.map((info) => ({
    title: "My Event",
    start: `${info.date.slice(6)}-${info.date.slice(3, 5)}-${info.date.slice(0, 2)}`,
    display: "background",
    color: "green",
    // classNames: ["my-event-class"],
  }));

  return (
    <DashboardLayout>
      <DashboardNavbar>Attendance</DashboardNavbar>
      <MDBox mt={8} />
      {uid && <MarkAttendance uid={uid} />}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        editable
        selectable
        selectMirror
        dayMaxEvents
        weekends={weekendsVisible}
        select={handleDateSelect}
        // eslint-disable-next-line react/jsx-no-bind
        // eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
      />
    </DashboardLayout>
  );
}
Attendance.defaultProps = {
  uid: " ",
};
Attendance.propTypes = {
  uid: PropTypes.string,
};
export default Attendance;
