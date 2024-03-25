import React from "react";
import { Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

export default function PageHeader() {
  return (
    <div className="container">
      <CallIcon />
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", fontFamily: "Georgia, serif" }}
      >
        Call us: 010 012 0120
      </Typography>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: linear-gradient(to right, #c51383, #653592);
          padding: 10px;
        }

        @media (max-width: 600px) {
          .container {
            padding: 5px;
          }

          .container > :last-child {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
