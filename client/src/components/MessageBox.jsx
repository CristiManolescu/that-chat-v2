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
      <Box
        sx={{
          border: "1px solid",
          borderRadius: "5px",
          height: 1,
          p: 1,
          m: 1,
        }}
      >
        Mesaje
      </Box>
      <TextField
        variant="outlined"
        placeholder="Enter your message here"
        sx={{ m: 1 }}
      />
    </Container>
  );
};

export default MessageBox;
