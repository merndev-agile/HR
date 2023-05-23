import React from "react";

// Material ui component
import { Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  addButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    color: "white",
    fontSize: "13px",
  },
});

function TypographyPart() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography component="span" style={{ fontSize: "13px" }}>
        Create different roles and assign permissions to each role to access or organizational data.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        startIcon={<AddIcon />}
      >
        Add New Role
      </Button>
    </Box>
  );
}

export default TypographyPart;
