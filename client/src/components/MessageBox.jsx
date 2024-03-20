import { Box, TextField, Stack } from "@mui/material";
import React, { useState } from "react";

const MessageBox = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleAction = () => {
    setMessages([message, ...messages]);
    setMessage("");
  };

  return (
    <Stack
      sx={{
        border: "1px solid",
        width: 1,
        p: 1,
        m: 1,
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
        {messages}
      </Box>
      <TextField
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        variant="outlined"
        placeholder="Enter your message here"
        sx={{ m: 1 }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAction();
        }}
      />
    </Stack>
  );
};

export default MessageBox;
