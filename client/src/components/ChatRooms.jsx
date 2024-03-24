import React from "react";
import { useState } from "react";

import { Stack, Typography } from "@mui/material";
import io from "socket.io-client";

import PersonBox from "./PersonBox";

import { rooms } from "../utils/data";

const socket = io.connect("http://localhost:3001");

const ChatRooms = () => {
  const userName = "testUser";
  const [joinUsers, setJoinUsers] = useState([]);

  const joinRoom = (chatRoom) => {
// TODO: UI intrat pe chat + conectare la socket

    //socket.emit("join_room", chatRoom); // change the Chat Room
    //console.log(chatRoom);
    
    console.log(joinUsers)

/*  UI => Daca e acelasi room iar userul e diferit => POATE intra pe room
    userName => e un Array de useri conectati
    joinUsers => un array de obiecte => Fiecare obiect are un nume de camera + un array de useri conectati
*/
    if(joinUsers.findIndex(x => x.roomName === chatRoom && x.userName === userName) === -1)
      setJoinUsers([{roomName: chatRoom, userName: userName}, ...joinUsers]);
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
