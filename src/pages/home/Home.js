import React from 'react'
import PageHeader from '../../components/header/PageHeader';
import { Typography } from '@mui/material';
import NavBar from '../../components/appBar/AppBar';

const Home = () => {
  return (
    <>
      <PageHeader />
      <NavBar/>
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
}

export default Home;