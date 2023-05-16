import { useState } from "react";
import "./Chats.css";

const Chats = ({ number, host, idInstance, apiTokenInstance }) => {
  const [message, setMessage] = useState("");
  const [incomingMessage, setIncomingMessage] = useState([]);

  const formMessage = {
    chatId: `${number}@c.us`,
    message: message,
  };

  const getChatMessages = () => {
    fetch(
      `${host}/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatId: `77471644499@c.us`,
          count: 200,
        }),
      }
    )
      .then((response) => response.text())
      .then((result) => console.log(result));
  };

  getChatMessages();

  const sendMessage = () => {
    fetch(`${host}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formMessage),
    });
  };

  return (
    <div className="chats">
      <div className="chats__header">Phone number:{number}</div>
      <div className="chats__send-message">
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chats;
