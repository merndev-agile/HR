import React from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Omid from "./omid.jpg";

const useStyles = makeStyles({
  subcontainer: {
    // maxwidth: 5000,
    width: 900,
    height: "50vh",
  },
  content_container: {
    maxwidth: 500,
    height: "80vh",
    marginLeft: 30,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

function EmployeeDetails() {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <DashboardNavbar>Attendance</DashboardNavbar>
      <MDBox mt={8} />
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
            maxwidth: 128,
            minWidth: 10,
            height: "70vh",
          },
        }}
      >
        {/* <Paper variant="outlined" /> */}
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Paper sx={{ maxWidth: 200, minWidth: 100 }}>
            <img
              src={Omid}
              alt=""
              style={{ width: "100%", height: "auto", aspectRatio: "1/1", borderRadius: "20" }}
            />
            <List sx={{ maxWidth: 200, minWidth: 100, bgcolor: "background.paper" }}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </Paper>

          <Box className={classes.content_container}>
            <Box sx={{ borderColor: "black" }}>NavBar</Box>
            <Box className={classes.container}>
              <Paper className={classes.subcontainer}>container1</Paper>
              <Paper className={classes.subcontainer}>container1</Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  );
}

export default EmployeeDetails;
