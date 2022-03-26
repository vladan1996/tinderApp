import React from "react";
import "../components/Chat.css";
import { Link } from "react-router-dom";

function Chat({ name, profileImage, timestamps, message }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <img className="chat__avatar" src={profileImage} alt="avatar" />

        <div className="chat__info">
          <h3>{name}</h3>
          <p>{message}</p>
        </div>
        <div className="chat__time">
          <p>{timestamps}</p>
        </div>
      </div>
    </Link>
  );
}

export default Chat;
