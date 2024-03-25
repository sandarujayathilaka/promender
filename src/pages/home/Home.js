import React from "react";
import AppHeader from "../../components/header/PageHeader";
import NavigationBar from "../../components/appBar/AppBar";
import { Typography } from "@mui/material";

export default function Home(){
  return (
    <>
      <AppHeader />
      <NavigationBar />
      <Typography
        padding={2}
        component="h3"
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "#c51383",
        }}
      >
        Home
      </Typography>
</>
  );
};
