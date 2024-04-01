import React from "react";

const ChatMessage = ({ messageContent }) => {
  const { author, message, time } = messageContent;
  return (
    <div id={author ? "you" : "other"}>
      <div>
        <div>
          <p>{message}</p>
        </div>
        <div className="message-meta">
          <p id="time">{time}</p>
          <p id="author">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
