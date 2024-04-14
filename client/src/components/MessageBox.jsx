import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";

import { Box, Stack, TextField, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const MessageBox = ({
  username,
  room,
  socket,
  setLoggedIn,
  setUsername,
  setRoom,
  setRememberMe,
}) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const logoutUser = () => {
    socket.emit("leave_room", room);
    setLoggedIn(false);
    setUsername("");
    setRoom("");
    setRememberMe(false);
  };

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
        width: 1,
        p: 1,
        m: 1,
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h3" color="secondary.main">
          Live chat
        </Typography>
        <Typography
          onClick={logoutUser}
          sx={{ color: "secondary.main", cursor: "pointer" }}
        >
          <LogoutIcon /> Disconnect
        </Typography>
      </Box>
      <Stack
        spacing={2}
        direction="column"
        justifyContent="end"
        sx={{
          height: 1,
          p: 1,
          m: 1,
          overflowY: "auto",
          border: "1px solid",
          borderRadius: "5px",
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
