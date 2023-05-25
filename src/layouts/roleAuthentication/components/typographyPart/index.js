import React from "react";

// Material ui component
import { Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@mui/icons-material/Add";

// it's components";
import AddNewRolePopUp from "./addNewRole";

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

  const [isVisibleModal, setIsVisibleModal] = React.useState(false);

  const handleAddNewRole = () => {
    setIsVisibleModal(true);
    console.log("clicked");
  };
  const handleClose = () => {
    setIsVisibleModal(false);
  };

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
        onClick={handleAddNewRole}
      >
        Add New Role
      </Button>
      <AddNewRolePopUp open={isVisibleModal} handleClose={handleClose} />
    </Box>
  );
}

export default TypographyPart;
