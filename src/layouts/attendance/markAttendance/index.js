/* eslint-disable no-unused-vars */
import React from "react";

// React RouterDom
import { Link } from "react-router-dom";

// prop types
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

// firebase
// import { addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/config";

// import dataArr from "../data";

function MarkAttendance({ uid }) {
  const [timeIn, setTimeIn] = React.useState("");
  const [timeOut, setTimeOut] = React.useState("");
  const [loginDate, setLoginDate] = React.useState("");
  const [location, setLocation] = React.useState("");

  const getLocation = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const result = await response.json();
      setLocation(result.city);
    } catch (error) {
      console.log("eror", error);
    }
  };
  React.useEffect(() => {
    getLocation();
  }, []);

  const gettingDate = (time) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // add 1 because getMonth() returns a zero-based index
    const day = date.getDate();
    const attendanceDate = `${year}-${month}-${day} `;
    setLoginDate(attendanceDate);
  };
  React.useEffect(() => {
    gettingDate(timeIn);
  }, [timeIn]);

  const handleMarkAttendance = () => {
    // Add data to the attendanceCollection
    const userDocumentsRef = db
      .collection("attendanceCollection")
      .doc(uid)
      .collection("attendanceCollection");
    try {
      userDocumentsRef
        .add({
          timeIn,
          timeOut,
          location,
          date: loginDate,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <MDBox style={{ width: "30%" }}>
      <MDBox mb={2}>
        <MDTypography variant="h4" fontWeight="medium" color="green" mt={1}>
          Time in
        </MDTypography>
        <MDInput type="datetime-local" fullWidth onChange={(e) => setTimeIn(e.target.value)} />
      </MDBox>
      <MDBox mb={2}>
        <MDTypography variant="h4" fontWeight="medium" color="green" mt={1}>
          Time Out
        </MDTypography>
        <MDInput type="datetime-local" fullWidth onChange={(e) => setTimeOut(e.target.value)} />
      </MDBox>
      <MDBox mt={4} mb={1}>
        <MDButton variant="gradient" color="info" fullWidth onClick={handleMarkAttendance}>
          Mark Attendance
        </MDButton>
      </MDBox>
      <MDBox mt={1} mb={1} textAlign="center">
        <MDTypography
          component={Link}
          to=""
          variant="button"
          color="info"
          fontWeight="medium"
          textGradient
        >
          Notify for work from home
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}
MarkAttendance.defaultProps = {
  uid: " ",
};
MarkAttendance.propTypes = {
  uid: PropTypes.string,
};
export default MarkAttendance;
