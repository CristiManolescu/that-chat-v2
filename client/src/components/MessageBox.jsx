import { TextField, Stack, Divider } from "@mui/material";
import React, { useState } from "react";
import ChatMessage from "./ChatMessage";

const MessageBox = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleAction = () => {
    setMessages([...messages, message]);
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
      <Stack
        spacing={2}
        direction="column"
        justifyContent="end"
        sx={{
          border: "1px solid",
          borderRadius: "5px",
          height: 1,
          p: 1,
          m: 1,
        }}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        {messages.length > 0
          ? messages.map((message) => (
              <ChatMessage key={message} message={message} />
            ))
          : "nimic"}
      </Stack>
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
