import { Box } from "@mui/material";
import PersonBox from "./PersonBox";
import React from "react";

const ChatRooms = () => {
  return (
    <Box sx={{ width: "30%", p: 1, m: 1 }}>
      <PersonBox />
    </Box>
  );
};

export default ChatRooms;
