import { Box, Paper } from "@mui/material";
import React from "react";

const PersonBox = ({ username }) => {
  return (
    <Paper elevation={3} sx={{ p: 1, m: 1 }}>
      <Box sx={{ typography: "body1", fontWeight: "bold" }}>{username}</Box>
    </Paper>
  );
};

export default PersonBox;
