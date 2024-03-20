import { Box, TextField, FormControl, Stack } from "@mui/material";
import React, { useState } from "react";

const MessageBox = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleAction = (e) => {
    e.preventDefault();
    setMessages([message, ...messages]);
    setMessage("");
  };

  return (
    <form onSubmit={handleAction}>
      <Stack
        sx={{
          border: "1px solid",
          height: 1,
        }}
      >
        <Box
          sx={{
            border: "1px solid",
            borderRadius: "5px",
            p: 1,
            m: 1,
          }}
        >
          {messages}
        </Box>
        <TextField
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          variant="outlined"
          placeholder="Enter your message here"
          sx={{ m: 1 }}
        />
      </Stack>
    </form>
  );
};

export default MessageBox;
