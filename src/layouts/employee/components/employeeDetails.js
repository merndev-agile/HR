import React from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function EmployeeDetails() {
  return (
    <DashboardLayout>
      <DashboardNavbar>Attendance</DashboardNavbar>
      <MDBox mt={8} />
    </DashboardLayout>
  );
}

export default EmployeeDetails;
