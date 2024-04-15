import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import LogoDevIcon from "@mui/icons-material/LogoDev";

import React, { useEffect, useState } from "react";

const JoinRoom = ({
  username,
  room,
  socket,
  rememberMe,
  setUsername,
  setRoom,
  setRememberMe,
  setLoggedIn,
}) => {
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.getItem("rememberMe") === "true" && setRememberMe(true);

    localStorage.getItem("username") &&
      setUsername(localStorage.getItem("username"));

    localStorage.getItem("room") && setRoom(localStorage.getItem("room"));
  }, []);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setLoggedIn(true);
    } else {
      setError("Please introduce a user/room name!");
    }
  };

  const rememberMeCheck = () => {
    setRememberMe(!rememberMe);
    localStorage.setItem("rememberMe", !rememberMe);
    if (!rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("room", room);
    } else {
      localStorage.setItem("username", "");
      localStorage.setItem("room", "");
    }
  };

  return (
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
          e.key === "Enter" && joinRoom();
        }}
      />
      <TextField
        placeholder="Room number *"
        onChange={(e) => setRoom(e.target.value)}
        value={room}
        onKeyDown={(e) => {
          e.key === "Enter" && joinRoom();
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            value="remember"
            color="primary"
            checked={rememberMe}
            onChange={rememberMeCheck}
          />
        }
        label="Remember me"
      />
      <Button variant="outlined" onClick={joinRoom}>
        Enter the room
      </Button>
      {error && <Alert severity="error">{error}</Alert>}
    </Box>
  );
};

export default JoinRoom;
