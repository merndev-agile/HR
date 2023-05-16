import React from "react";
import { TextField, Button } from "@material-ui/core";
import "react-calendar/dist/Calendar.css";
import { Calendar } from "react-calendar";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/config";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 550,
    borderRadius: "10px",
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
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
function Input() {
  const classes = useStyles();
  const [value, setValue] = React.useState(new Date());
  const [occassion, setOccassion] = React.useState("");
  const handleDateChange = (data) => {
    const hy = moment(data).format("DD/MM/YYYY");
    setValue(hy);
  };

  const handleAdd = async (e) => {
    const obj = {};
    obj.value = value;
    obj.occassion = occassion;
    e.preventDefault();

    // firestore.collection('holidays').add({
    //     todo: obj,
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // })

    try {
      const docRef = await addDoc(collection(db, "holidays"), {
        occassion,
        value,
        votes: 0,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (eror) {
      console.error("Error adding document: ", eror);
    }
    setValue(new Date());
    setOccassion("");
  };

  return (
    <div className="edit">
      <Calendar
        className={classes.calendar}
        data-testid="mocked-calendar"
        onChange={handleDateChange}
      />
      <TextField
        id="outlined-basic"
        label="Occassion"
        variant="outlined"
        className={classes.TextField}
        value={occassion}
        onChange={(e) => setOccassion(e.target.value)}
      />
      <div className="buttons">
        <Button className={classes.button} data-testid="add-btn" onClick={handleAdd}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default Input;
