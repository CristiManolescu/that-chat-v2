import { Box, Container, TextField } from "@mui/material";
import React from "react";

const MessageBox = () => {
  return (
    <Container
      sx={{
        width: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>Mesaje</Box>
      <TextField variant="outlined" placeholder="Enter your message here" />
    </Container>
  );
};

export default MessageBox;
