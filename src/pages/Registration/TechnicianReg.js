import React, { useState } from "react";
import { request, setAuthHeader } from "../../config/axiosConfig";
import {
  Grid,
  Box,
  InputLabel,
  Container,
  Button,
  CssBaseline,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

const TechnicianReg = () => {
  const [formData, setFormData] = useState({
    typeOfExpertise: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    emailAddress: "", // Changed from email to emailAddress
    licenseNumber: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log(formData);
    request("POST", "/saveTechnician", formData)
      .then((response) => {
        setAuthHeader(response.data.token);
        console.log("Success");
      })
      .catch((error) => {
        setAuthHeader(null);
        console.log(error);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
        </Grid>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputLabel sx={{ fontSize: "2vh", textAlign: "left" }}>
                First Name
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                required
                fullWidth
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel sx={{ fontSize: "2vh", textAlign: "left" }}>
                Last Name
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                required
                fullWidth
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel sx={{ fontSize: "2vh", textAlign: "left" }}>
                User Name
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                required
                fullWidth
                id="username"
                name="username"
                autoComplete="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel sx={{ fontSize: "2vh", textAlign: "left" }}>
                Password
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                required
                fullWidth
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel sx={{ fontSize: "2vh", textAlign: "left" }}>
                Email Address
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                required
                fullWidth
                id="emailAddress" // Changed from email to emailAddress
                name="emailAddress" // Changed from email to emailAddress
                autoComplete="email"
                value={formData.emailAddress} // Changed from email to emailAddress
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel sx={{ fontSize: "2vh", textAlign: "left" }}>
                Type of Expertise
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <Select
                labelId="typeOfExpertise"
                id="typeOfExpertise"
                value={formData.typeOfExpertise}
                onChange={handleChange}
                name="typeOfExpertise"
                size="small"
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Type 1">Type 1</MenuItem>
                <MenuItem value="Type 2">Type 2</MenuItem>
                <MenuItem value="Type 3">Type 3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel sx={{ fontSize: "2vh", textAlign: "left" }}>
                License Number
              </InputLabel>
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                required
                fullWidth
                id="licenseNumber"
                name="licenseNumber"
                autoComplete="off"
                value={formData.licenseNumber}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              borderRadius: 2,
              background: "linear-gradient(to right, #c51383, #653592)",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TechnicianReg;


