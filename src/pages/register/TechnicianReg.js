import React from "react";
import { request, setAuthHeader } from "../../config/axiosConfig";

import {
  Grid,
  Box,
  InputLabel,
  //   Typography,
  Container,
  Button,
  CssBaseline,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

export default class TechnicianReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      email: "",
      licenseNo: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log(this.state);
    request("POST", "/saveTechnician", {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      password: this.state.password,
      email: this.state.email,
      licenseNo: this.state.licenseNo,
    })
      .then((response) => {
        setAuthHeader(response.data.token);
        console.log("Sucess");
      })
      .catch((error) => {
        setAuthHeader(null);
        console.log(error);
      });
  };

  render() {
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
            <Grid item xs={12}>
              {/* <Typography
                padding={2}
                component="h3"
                variant="h6"
                sx={{
                  backgroundColor: '#c51383',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Technician Registration
              </Typography> */}
            </Grid>
          </Grid>

          <Box
            component="form"
            noValidate
            onSubmit={this.handleSubmit}
            sx={{ mt: 3 }}
          >
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
                  autoComplete="family-name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
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
                  value={this.state.lastName}
                  onChange={this.handleChange}
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
                  id="userName"
                  name="userName"
                  autoComplete="family-name"
                  value={this.state.userName}
                  onChange={this.handleChange}
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
                  autoComplete="family-name"
                  value={this.state.password}
                  onChange={this.handleChange}
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
                  id="email"
                  name="email"
                  autoComplete="family-name"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel sx={{fontSize:"2vh", textAlign: "left" }}>
                  Type of Expertise
                </InputLabel>
              </Grid>
              <Grid item xs={12}>
                <Select
                  labelId="type"
                  id="type"
                  value={this.state.type}
                  onChange={this.handleChange}
                  name="type"
                  size="small"
                  sx={{ width: "500px" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="option1">Type 1</MenuItem>
                  <MenuItem value="option2">Type 2</MenuItem>
                  <MenuItem value="option3">Type 3</MenuItem>
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
                  id="licenseNo"
                  name="licenseNo"
                  autoComplete="family-name"
                  value={this.state.licenseNo}
                  onChange={this.handleChange}
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
  }
}
