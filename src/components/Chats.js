import React from "react";
import "../components/Chats.css";
import Chat from "../components/Chat";
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mila Dušanić"
        message="Hey! How are you?"
        timestamps="2 minutes ago"
        profileImage="https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1"
      />

      <Chat
        name="Mira Ribic"
        message="Hey! Whats up?"
        timestamps="1 h ago"
        profileImage="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-2.jpg"
      />
      <Chat
        name="Mira Ribic"
        message="Hey! Whats up?"
        timestamps="1 h ago"
        profileImage="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-2.jpg"
      />
    </div>
  );
}

export default Chats;
