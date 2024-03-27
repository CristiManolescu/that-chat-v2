import React, { useEffect, useState } from "react";

import { Stack, Typography } from "@mui/material";
import io from "socket.io-client";

import PersonBox from "./PersonBox";

const socket = io.connect("http://localhost:3001");

const ChatRooms = ({ username }) => {
  // const joinRoom = (chatRoom) => {
  //   socket.emit("join_room", chatRoom); // change the Chat Room
  //   console.log(chatRoom);
  // };
  const [onlineUser, setOnlineUser] = useState([]);

  useEffect(() => {
    socket.off("username").on("username", (data) => {
      setOnlineUser((previous) => [...previous, data]);
    });
  }, [socket]);

  return (
    <Stack sx={{ width: "30%", p: 1, m: 1 }} spacing={2}>
      <Typography variant="h3">{`Hello ${username}!`}</Typography>
      {onlineUser.map((user) => (
        <PersonBox key={user} username={user} />
      ))}
    </Stack>
  );
};

export default ChatRooms;
