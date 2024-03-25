import React from "react";
import { Grid, Button, Box, Container} from '@mui/material';
import TechnicianReg from "./TechnicianReg";
import CustomerReg from "./CustomerReg";

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "customer", 
    };
  }

  render() {
    return (
      <>
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
              Customer Registration
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
              Technician Registration
            </Button>
          </Grid>
        </Grid>

        {this.state.active === "customer" && (
          <div><CustomerReg/></div>
        )}

        {this.state.active === "technician" && (
            <div><TechnicianReg/></div>
        )}
        </Box>
        </Container>
      </>
    );
  }
}
