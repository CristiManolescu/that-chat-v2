import { Box, TextField, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";

const MessageBox = ({ username, room, socket }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.off("receive_message").on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <Stack
      sx={{
        border: "1px solid",
        borderRadius: "5px",
        width: 1,
        p: 1,
        m: 1,
      }}
    >
      <Typography variant="h3" color="secondary.main">
        Live chat
      </Typography>
      <Stack
        spacing={2}
        direction="column"
        justifyContent="end"
        sx={{
          height: 1,
          p: 1,
          m: 1,
          overflowY: "auto",
        }}
      >
        {messageList.map((messageContent, index) => (
          <ChatMessage
            key={index}
            messageContent={messageContent}
            username={username}
          />
        ))}
      </Stack>
      <TextField
        onChange={(e) => setCurrentMessage(e.target.value)}
        value={currentMessage}
        variant="outlined"
        placeholder="Enter your message here"
        sx={{ m: 1 }}
        onKeyDown={(e) => {
          e.key === "Enter" && sendMessage();
        }}
      />
    </Stack>
  );
};

export default MessageBox;
