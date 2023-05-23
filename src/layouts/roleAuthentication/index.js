import React from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material ui components
import { Stack } from "@mui/material";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// RoleAuthentication components
import RoleHeader from "./components/roleHeader";
import RoleContent from "./components/roleContent";
import TypographyPart from "./components/typographyPart";

function RoleAuthenticationPage() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Stack spacing={2}>
          <RoleHeader />
          <TypographyPart />
          <RoleContent />
        </Stack>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default RoleAuthenticationPage;
