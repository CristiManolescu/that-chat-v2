import { Container, Typography } from "@mui/material";
import io from "socket.io-client";
// import { useEffect, useState } from "react";
//27:25
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

  return (
    <Container sx={{ bgcolor: "tomato", height: "100vh" }}>
      <Typography sx={{ p: 1 }}>Test</Typography>
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
