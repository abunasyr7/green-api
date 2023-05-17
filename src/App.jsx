import { createRoot } from "react-dom/client";
import "./App.css";
import Contacts from "./components/Contacts";
import Chats from "./components/Chats";
import { useState } from "react";
import { REACT_APP_ID_INSTANCE, REACT_APP_API_TOKEN_INSTANCE } from "../env";

const App = () => {
  const [phoneNumbers, setPhoneNumbers] = useState(() => {
    const storedNumbers = localStorage.getItem("phoneNumbers");
    return storedNumbers ? JSON.parse(storedNumbers) : [];
  });

  const handleAddPhoneNumber = (phoneNumber) => {
    if (phoneNumber.trim() !== "") {
      const updatedNumbers = [...phoneNumbers, phoneNumber];
      setPhoneNumbers(updatedNumbers);
      localStorage.setItem("phoneNumbers", JSON.stringify(updatedNumbers));
    }
  };

  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState("");

  console.log({ selectedPhoneNumber });

  const host = "https://api.green-api.com";

  // Use the configuration values in your code

  const idInstance = REACT_APP_ID_INSTANCE;
  const apiTokenInstance = REACT_APP_API_TOKEN_INSTANCE;

  return (
    <div className="app">
      <Contacts
        phoneNumbers={phoneNumbers}
        onAddPhoneNumber={handleAddPhoneNumber}
        setSelectedPhoneNumber={setSelectedPhoneNumber}
      />
      <Chats
        host={host}
        idInstance={idInstance}
        apiTokenInstance={apiTokenInstance}
        selectedPhoneNumber={selectedPhoneNumber}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
