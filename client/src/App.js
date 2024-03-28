import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import io from "socket.io-client";
import MessageBox from "./components/MessageBox";
//import ChatRooms from "./components/ChatRooms";
import { useState } from "react";
const socket = io.connect("http://localhost:3001");

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [error, setError] = useState("");

  const handleAction = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setLoggedIn(true);
    } else {
      setError("Please introduce a user/room name!");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
        <Box
          sx={{
            display: "flex",
            bgcolor: "tomato",
            height: "50vh",
            borderRadius: "5px",
          }}
        >
          {/* <ChatRooms username={username} /> */}
          <MessageBox />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            placeholder="Enter your name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyDown={(e) => {
              e.key === "Enter" && handleAction();
            }}
          />
          <TextField
            placeholder="Enter room number"
            onChange={(e) => setRoom(e.target.value)}
            value={room}
            onKeyDown={(e) => {
              e.key === "Enter" && handleAction();
            }}
          />
          <Button variant="outlined" onClick={handleAction}>
            Log in
          </Button>
          {error && <Alert severity="error">{error}</Alert>}
        </Box>
      )}
    </Container>
  );
}

export default App;
