import { Box, Typography } from "@mui/material";
import React from "react";

const ChatMessage = ({ messageContent, username }) => {
  const { author, message, time } = messageContent;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: author === username ? "flex-end" : "flex-start",
        bgcolor: author === username ? "green" : "gray",
        borderRadius: 2,
      }}
    >
      <Box sx={{ p: 1, m: 1 }}>
        <Box>
          <Typography variant="subtitle1">{message}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Typography variant="subtitle2">{time}</Typography>
          <Typography variant="author">{author}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatMessage;
