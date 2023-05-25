import React from "react";

// Material ui component
import { Box, Card, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  addBox: {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
    position: "static",
    width: "100%",
    gap: "10px",
    padding: "10px",
    // whiteSpace: "nowrap",
  },
  card: {
    height: "20vh",
    padding: "10px",
    margin: "10px",
    width: "370px",

    // width: "auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  configure: {
    backgroundColor: "#ebe7df",
    paddingInline: "20px",
    borderRadius: "25px",
    fontSize: "10px",
    paddingBlock: "5px",
    color: "#827d7d",
  },
  member: {
    backgroundColor: "#3432a8",
    paddingInline: "4px",
    paddingBlock: "2px",
    borderRadius: "50px",
    color: "white",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

function RoleContent() {
  const classes = useStyles();
  const arr = ["andjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "cnb", "djd", "90", "yy", "p"];
  return (
    <Box className={classes.addBox}>
      {arr.map(() => (
        <Card className={classes.card}>
          <Box className={classes.header}>
            <Typography
              component="h3"
              style={{ fontSize: "13px", color: "black", fontWeight: 500 }}
            >
              Contracted worker
            </Typography>
            <Typography component="span" style={{ fontSize: "10px", color: "#827d7d" }}>
              General Role
            </Typography>
          </Box>
          <Divider variant="inset" sx={{ width: "100%", height: "2px" }} dark />
          <Box className={classes.bottom}>
            <Typography component="span" className={classes.configure}>
              Configure permissions
            </Typography>
            <Typography className={classes.member}>10</Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default RoleContent;
