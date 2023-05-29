// import React, { useState } from "react";
// import Modal from "@mui/material/Modal";

// // props validation
// import PropTypes from "prop-types";

// // // import { Box, Typography } from "@mui/material";
// // import { MDInput, MDBox } from "../../../../../components";

// // Material Dashboard 2 React components
// import MenuItem from "@mui/material/MenuItem";
// import MDBox from "components/MDBox";
// // import MDTypography from "components/MDTypography";
// import MDInput from "components/MDInput";
// // import MDButton from "components/MDButton";

// function AddNewRolePopUp({ open, handleClose }) {
//   const [roleName, setRoleName] = useState("");
//   const [cloneRole, cloneRole] = useState("");
// const cloneRoleArray = [
//   "Team Member",
//   "Team Leader",
//   "Director",
//   "Manager",
//   "Admin",
//   "System Administrator",
//   "Data Admin",
//   "HR",
// ];

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <MDBox
//         component="form"
//         role="form"
//         variant="gradient"
//         // bgColor="#dae6dd"
//         borderRadius="lg"
//         coloredShadow="info"
//         mx={2}
//         mt={-3}
//         px={5}
//         py={10}
//         mb={1}
//         textAlign="center"
//         width="30vw"
//         sx={{
//           position: "fixed",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         <MDBox mb={2}>
//           <MDInput
//             // variant="filled"
//             id="outlined"
//             type="text"
//             label="Role Name"
//             fullWidth
//             value={roleName}
//             onChange={(e) => setRoleName(e.target.value)}
//           />
//         </MDBox>
//         <MDBox mb={2}>
//           <MDInput
//             type="text"
//             select
//             id="outlined"
//             label="Clone Role"
//             fullWidth
//             value={cloneRole}
//             onChange={(e) => cloneRole(e.target.value)}
//           >
//             {cloneRoleArray.map((option) => (
//               <MenuItem key={option} value={option}>
//                 {option}
//               </MenuItem>
//             ))}
//           </MDInput>
//         </MDBox>
//       </MDBox>
//     </Modal>
//   );
// }

import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

import { db } from "../../../../../Firebase/config";

function AddNewRolePopUp({ open, handleClose }) {
  const [roleName, setRoleName] = useState("");
  const [cloneRole, setCloneRole] = useState("");

  const cloneRoleArray = [
    "Team Member",
    "Team Leader",
    "Director",
    "Manager",
    "Admin",
    "System Administrator",
    "Data Admin",
    "HR",
  ];

  const handleRoleNameChange = (event) => {
    setRoleName(event.target.value);
  };

  const handleOptionChange = (event) => {
    setCloneRole(event.target.value);
  };

  const handleCreateRole = () => {
    // Perform role creation logic
    // Create a new role document in the "Role Authentication" collection
    db.collection("Role Authentication")
      .add({
        role: roleName,
        cloneRole,
      })
      .then(() => {
        handleClose();
      })
      .catch((error) => {
        console.error("Error creating role:", error);
      });
    setRoleName("");
    setCloneRole("");
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Role</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Role Name"
          type="text"
          variant="outlined"
          value={roleName}
          onChange={handleRoleNameChange}
          fullWidth
        />
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Clone Role</InputLabel>
          <Select value={cloneRole} onChange={handleOptionChange} label="Select Option">
            {cloneRoleArray.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        <Button onClick={handleCreateRole} color="primary">
          Create Role
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AddNewRolePopUp.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddNewRolePopUp;
