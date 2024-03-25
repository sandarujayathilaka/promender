import * as React from "react";
import {
  Grid,
  Box,
  InputLabel,
  Typography,
  Container,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";

export default class Login extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("username"),
      password: data.get("password"),
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  handleTogglePassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleNavigation = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const { showPassword } = this.state;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 2,
            borderRadius: 5,
            padding: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#c51383", fontWeight: "bold" }}
          >
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={this.handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputLabel sx={{ textAlign: "left" }}>Username</InputLabel>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="username"
                  name="username"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <InputLabel sx={{ textAlign: "left" }}>Password</InputLabel>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type={showPassword ? "text" : "password"}
                  required
                  fullWidth
                  id="password"
                  name="password"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Remember me"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link
                  href="#"
                  variant="body2"
                  sx={{ color: "#653592", fontWeight: "bold" }}
                >
                  Forgot Password
                </Link>
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
              LOGIN
            </Button>
            <Grid container>
              <Grid item>
                Not Registered?
                <Link
                  component={Link}
                  to="/register"
                  onClick={() => this.handleNavigation("register")}
                  variant="body2"
                  sx={{ color: "#653592", fontWeight: "bold" }}
                >
                  Register
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
}