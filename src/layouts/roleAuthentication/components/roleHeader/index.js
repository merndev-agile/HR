import React from "react";

// materialui components
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    fontSize: "14px",
    height: "50px",
    paddingLeft: "3%",
    border: "1px solid #b0b2b5",
    fontFamily: "Roboto",
    color: "#495057",
    borderRadius: "5px",
  },
  role: {
    marginRight: "25px",
  },
});

function RoleHeader() {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Box className={classes.role}>Roles</Box>
      <Box>Specific Role Assignment</Box>
    </Box>
  );
}

export default RoleHeader;
