import React, { useState, useEffect } from "react";
import "./index.css";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { db } from "../../Firebase/config";

// import Input from "./input/index";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 550,
    borderRadius: "10px",
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
    background: "linear-gradient(to bottom, #366589, #6698d3);",
  },

  header: {
    backgroundColor: "#FE6B8B",
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  cell: {
    color: "#333",
    fontWeight: "bold",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  calendar: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
    padding: "20px",
  },
  TextField: {
    "& label.Mui-focused": {
      color: "#FE6B8B",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FE6B8B",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#C0C0C0",
      },
      "&:hover fieldset": {
        borderColor: "#FE6B8B",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FE6B8B",
      },
    },
  },
});

export default function ListedHolidays() {
  // const [role, setRole] = useState("");

  const classes = useStyles();

  const [todo, setTodo] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "holidays")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((document) => ({
        ...document.data(),
        id: document.id,
      }));
      setTodo(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, [todo]);

  return (
    <DashboardLayout>
      <DashboardNavbar>Holidays</DashboardNavbar>
      <MDBox mt={8} />
      <div className="body">
        <Paper>
          {/* {<Input todo={todo} setTodo={setTodo} />} */}

          <Paper className={classes.root}>
            <h2>List Of TOP Voted Holidays</h2>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Holiday</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Votes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todo
                  .sort((a, b) => b.votes - a.votes)
                  ?.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell component="th" scope="row" align="center">
                        {item.occassion}
                      </TableCell>
                      <TableCell align="center">{item.value}</TableCell>
                      <TableCell align="center">
                        <Button
                          className={classes.button}
                          onClick={() => {
                            const docRef = doc(db, "holidays", item.id);
                            updateDoc(docRef, {
                              votes: item.votes + 1,
                            }).then(() => console.log("Document updated"));
                          }}
                        >
                          VOTE {item.votes}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Paper>
        </Paper>
      </div>
    </DashboardLayout>
  );
}
