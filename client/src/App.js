import { Box, Button, Container, TextField, Typography } from "@mui/material";
import io from "socket.io-client";
import MessageBox from "./components/MessageBox";
import ChatRooms from "./components/ChatRooms";
import { useState } from "react";
const socket = io.connect("http://localhost:3001");

function App() {
  // const [room, setRoom] = useState("");

  // const [message, setMessage] = useState("");
  // const [messageReceived, setMessageReceived] = useState("");

  // const joinRoom = () => {
  //   if (room !== "") {
  //     socket.emit("join_room", room);
  //   }
  // };

  // const sendMessage = () => {
  //   socket.emit("send_message", { message, room });
  // };

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setMessageReceived(data.message);
  //   });
  // }, [socket]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleAction = () => {
    setLoggedIn(true);
    socket.emit("online_user", username);
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
          <ChatRooms username={username} />
          <MessageBox />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            placeholder="Enter your name here"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAction();
            }}
          />
          <Button variant="outlined" onClick={handleAction}>
            Log in
          </Button>
        </Box>
      )}
    </Container>
    // <div className="App">
    //   <input
    //     placeholder="Room Number"
    //     onChange={(event) => setRoom(event.target.value)}
    //   />
    //   <button onClick={joinRoom}>Join Room</button>
    //   <input
    //     placeholder="Message..."
    //     onChange={(event) => setMessage(event.target.value)}
    //   />
    //   <button onClick={sendMessage}>Send Message</button>
    //   {messageReceived && <p>{`Mesajul primit este: ${messageReceived}`}</p>}
    // </div>
  );
}

export default App;
