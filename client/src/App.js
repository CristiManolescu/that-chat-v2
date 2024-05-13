import { useState } from "react";

import { Container, Typography } from "@mui/material";

import ChatBox from "./components/ChatBox";

import io from "socket.io-client";
import JoinRoom from "./components/JoinRoom";
const socket = io.connect("http://localhost:3001");

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "primary.main",
        }}
      >
        That Chat 🚀
      </Typography>
      {loggedIn ? (
        <ChatBox
          username={username}
          room={room}
          socket={socket}
          setLoggedIn={setLoggedIn}
          setUsername={setUsername}
          setRoom={setRoom}
          setRememberMe={setRememberMe}
        />
      ) : (
        <JoinRoom
          username={username}
          room={room}
          socket={socket}
          rememberMe={rememberMe}
          setUsername={setUsername}
          setRoom={setRoom}
          setRememberMe={setRememberMe}
          setLoggedIn={setLoggedIn}
        />
      )}
    </Container>
  );
}

export default App;
