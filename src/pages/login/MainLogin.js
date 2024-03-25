import React from "react";
import { Grid, Button, Box, Container} from '@mui/material';
import AppHeader from "../../components/header/PageHeader";
import NavigationBar from "../../components/appBar/AppBar";
import TechnicianLogin from "../login/TechnicianLogin";
import CustomerLogin from "./CustomerLogin";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "customer", 
    };
  }

  render() {
    return (
      <>
        <AppHeader />
        <NavigationBar />
        <Container component="main" maxWidth="sm">
        <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
          >
        <Grid container sx={{ marginTop: 4, alignItems:'center',paddingLeft:'2.2vh'}} >
          <Grid item xs={12} sm={6}>
            <Button
              sx={{
                textAlign: "center",
                color: 'white',
                fontWeight:'bold',
                background: this.state.active === "customer" ? "#c51383" : "#C989A7",
              }}
              onClick={() => this.setState({ active: "customer" })}
            >
              Customer Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              sx={{
                textAlign: "center",
                color: 'white',
                fontWeight:'bold',
                background: this.state.active === "technician" ?  "#c51383" : "#C989A7",
              }}
              onClick={() => this.setState({ active: "technician" })}
            >
              Technician Login
            </Button>
          </Grid>
        </Grid>

        {this.state.active === "customer" && (
          <div><CustomerLogin/></div>
        )}

        {this.state.active === "technician" && (
            <div><TechnicianLogin/></div>
        )}
        </Box>
        </Container>
      </>
    );
  }
}
