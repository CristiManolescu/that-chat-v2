import { Box, Paper } from "@mui/material";
import React from "react";

const PersonBox = () => {
  return (
    <Paper elevation="3" sx={{ p: 1, m: 1 }}>
      <Box sx={{ typography: "body1", fontWeight: "bold" }}>UserName</Box>
      <Box sx={{ typography: "body2" }}>Last Message</Box>
    </Paper>
  );
};

export default PersonBox;
