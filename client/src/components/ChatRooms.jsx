import React from "react";

import { Stack, Typography } from "@mui/material";
import io from "socket.io-client";

import PersonBox from "./PersonBox";

const socket = io.connect("http://localhost:3001");

const ChatRooms = ({ username }) => {
  const joinRoom = (chatRoom) => {
    //socket.emit("join_room", chatRoom); // change the Chat Room
    console.log(chatRoom);
  };

  return (
    <Stack sx={{ width: "30%", p: 1, m: 1 }} spacing={2}>
      {/* {rooms.map((room) => (
        <Stack key={room}>
          <Typography variant="h2" onClick={() => joinRoom(room)}>
            {room}
          </Typography>
        </Stack>
      ))} */}
      <Typography variant="h3">Hello {username}!</Typography>
      <PersonBox />
      <PersonBox />
    </Stack>
  );
};

export default ChatRooms;
