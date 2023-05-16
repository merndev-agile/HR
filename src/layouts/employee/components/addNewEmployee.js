import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, MenuItem, Select } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

// Material Dashboard 2 React example components
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import MDBox from "../../../components/MDBox";

function AddNewEmployee() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <DashboardLayout>
      <DashboardNavbar>Attendance</DashboardNavbar>
      <MDBox mt={8} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <h1 style={{ fontSize: "29px", paddingLeft: "4rem" }}>Add New Employee</h1>

          <TextField
            {...register("firstName", { required: true })}
            label="First Name"
            variant="outlined"
            style={{ width: "56%" }}
            error={!!errors.firstName}
            helperText={errors.firstName ? "FirstName is required" : ""}
          />
          <TextField
            {...register("lastName", { required: true })}
            label="Last Name"
            variant="outlined"
            style={{ width: "56%" }}
            error={!!errors.lastName}
            helperText={errors.lastName ? "LastName is required" : ""}
          />
          <TextField
            {...register("email", { required: true })}
            label="Email"
            variant="outlined"
            style={{ width: "56%" }}
            error={!!errors.email}
            helperText={errors.email ? "Email is required" : ""}
          />
          <Select
            label="Role"
            variant="outlined"
            style={{ width: "56%" }}
            {...register("Role", { required: true })}
            error={!!errors.Role}
            helperText={errors.Role ? "Role is required" : ""}
          >
            <MenuItem value="">
              <em>Role</em>
            </MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Employee">Employee</MenuItem>
          </Select>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              name="DOB"
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  format="dd/MM/yyyy"
                  placeholderText="Select date"
                  error={!!errors.DOB}
                  helperText={errors.DOB ? "DOB is required" : ""}
                  inputVariant="outlined"
                  label="Date of Birth"
                  style={{ width: "56%" }}
                />
              )}
            />
          </MuiPickersUtilsProvider>

          <Button type="submit" variant="contained" color="primary" style={{ width: "56%" }}>
            Submit
          </Button>
        </Stack>
      </form>
    </DashboardLayout>
  );
}
export default AddNewEmployee;
