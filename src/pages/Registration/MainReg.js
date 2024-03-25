import React, { useState } from "react";
import { Grid, Button, Box, Container } from "@mui/material";
import AppHeader from "../../components/header/PageHeader";
import NavigationBar from "../../components/appBar/AppBar";
import CustomerReg from "./CustomerReg";
import TechnicianReg from "./TechnicianReg";

const MainReg = () => {
  const [active, setActive] = useState("customer");

  return (
    <>
      <div>
        <AppHeader />
        <NavigationBar />
      </div>

      <Container component="main" maxWidth="sm">
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid
            container
            spacing={1} // Add spacing between grid items
            sx={{
              marginTop: 4,
              alignItems: "center",
              justifyContent: "center", // Center horizontally
            }}
          >
            <Grid item xs={12} sm={6}>
              <Button
                sx={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  background: active === "customer" ? "#c51383" : "#C989A7",
                  width: "100%", // Make button take full width
                }}
                onClick={() => setActive("customer")}
              >
                Customer Registration
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                sx={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  background: active === "technician" ? "#c51383" : "#C989A7",
                  width: "100%", // Make button take full width
                }}
                onClick={() => setActive("technician")}
              >
                Technician Registration
              </Button>
            </Grid>
          </Grid>

          {active === "customer" && <CustomerReg />}
          {active === "technician" && <TechnicianReg />}
        </Box>
      </Container>
    </>
  );
};

export default MainReg;
