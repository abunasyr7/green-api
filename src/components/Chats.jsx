import { useEffect, useState } from "react";
import "./Chats.css";
import SendIcon from "../img/send.png";
import Reload from "../img/reload.png";

const Chats = ({ host, idInstance, apiTokenInstance, selectedPhoneNumber }) => {
  const [message, setMessage] = useState("");
  const [incomingMessages, setIncomingMessages] = useState([]);

  const formMessage = {
    chatId: `${selectedPhoneNumber}@c.us`,
    message: message,
  };

  const getChatMessages = async () => {
    try {
      const response = await fetch(
        `${host}/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chatId: `${selectedPhoneNumber}@c.us`,
            count: 200,
          }),
        }
      );
      const result = await response.json();
      setIncomingMessages(result);
    } catch (error) {
      console.error("Error fetching chat messages:", error);
    }
  };

  const sendMessage = async () => {
    setMessage("");
    try {
      const response = await fetch(
        `${host}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formMessage),
        }
      );
      if (response.ok) {
        console.log("Message sent successfully");
        await getChatMessages(); // Refresh the chat messages after sending the message
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getChatMessages();
  }, [selectedPhoneNumber]);

  console.log({ incomingMessages });

  return (
    <div className="chats">
      <div className="chats__header">
        <p>+{selectedPhoneNumber}</p>
      </div>
      <div className="chats__message-container">
        {incomingMessages.length > 0 ? (
          incomingMessages.reverse().map((message, index) => {
            if (message.type === "incoming") {
              return (
                <div className="chats__guest" key={index}>
                  {message.textMessage}
                </div>
              );
            } else {
              return (
                <div className="chats__owner" key={index}>
                  {message.textMessage}
                </div>
              );
            }
          })
        ) : (
          <div>No messages</div>
        )}
      </div>
      {selectedPhoneNumber ? (
        <div className="chats__footer">
          <div className="chats__send-message">
            <button onClick={getChatMessages} className="button-reload">
              <img
                src={Reload}
                alt="Reload"
                style={{ width: 23, height: 23 }}
              />
            </button>
            <input
              value={message}
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Напишите сообщение"
            />
            <button onClick={sendMessage} className="button-send">
              <img
                src={SendIcon}
                alt="Send Icon"
                style={{ width: 23, height: 23 }}
              />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chats;
