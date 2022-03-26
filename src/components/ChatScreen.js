import React, { useState } from "react";
import "../components/ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Mila",
      image:
        "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1",
      message: "Hey! Kako si ti? Sta mi radiš"
    },
    {
      name: "Mila",
      image:
        "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1",
      message: "Jesi tu"
    },
    {
      message: "Evo sad sam tu!"
    }
  ]);

  console.log(setInput);
  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamps">
        YOU MATCHED WITH Mila at 10/02/22
      </p>
      {messages.map(message =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textRight">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message.."
          type="text"
        />
        <IconButton onClick={handleSend} type="submit">
          <SendIcon className="chatScreen__inputBtn" />
        </IconButton>
      </form>
    </div>
  );
}

export default ChatScreen;
