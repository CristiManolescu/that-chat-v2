import { useState } from "react";

import {
  Avatar,
  Alert,
  Box,
  Button,
  Container,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import LogoDevIcon from "@mui/icons-material/LogoDev";

import MessageBox from "./components/MessageBox";

import io from "socket.io-client";
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
            height: "50vh",
          }}
        >
          <MessageBox
            username={username}
            room={room}
            socket={socket}
            setLoggedIn={setLoggedIn}
          />
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={2}
          p={2}
          minHeight="50vh"
          border="1px solid"
          borderRadius="25px"
          color="gray"
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar
              sx={{
                m: 1,
                bgcolor: "secondary.main",
              }}
            >
              <LogoDevIcon />
            </Avatar>
            <Typography variant="h3" color="primary.main">
              Join the conversation!
            </Typography>
          </Box>
          <TextField
            placeholder="Username *"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyDown={(e) => {
              e.key === "Enter" && handleAction();
            }}
          />
          <TextField
            placeholder="Room number *"
            onChange={(e) => setRoom(e.target.value)}
            value={room}
            onKeyDown={(e) => {
              e.key === "Enter" && handleAction();
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button variant="outlined" onClick={handleAction}>
            Enter the room
          </Button>
          {error && <Alert severity="error">{error}</Alert>}
        </Box>
      )}
    </Container>
  );
}

export default App;
