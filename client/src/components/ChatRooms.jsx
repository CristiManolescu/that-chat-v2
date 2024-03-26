import React from "react";
import { useState } from "react";

import { Stack, Typography } from "@mui/material";
import io from "socket.io-client";

import PersonBox from "./PersonBox";

import { rooms } from "../utils/data";

const socket = io.connect("http://localhost:3001");

const ChatRooms = () => {
  const userName = "altu";
  
  const [users, setUsers] = useState([]);
  const [room, setRoom] = useState();
  const [joinUsers, setJoinUsers] = useState([]);

  const joinRoom = (chatRoom) => {
// TODO: UI intrat pe chat + conectare la socket

    //socket.emit("join_room", chatRoom); // change the Chat Room
    //console.log(chatRoom);

  };

  return (
    <Stack sx={{ width: "30%", p: 1, m: 1 }} spacing={2}>
      {rooms.map((room) => (
        <Stack key={room}>
          <Typography variant="h2" onClick={() => joinRoom(room)}>
            {room}
          </Typography>
        </Stack>
      ))}
      <PersonBox />
      <PersonBox />
    </Stack>
  );
};

export default ChatRooms;
