import { createRoot } from "react-dom/client";
import "./App.css";
import Contacts from "./components/Contacts";
import Chats from "./components/Chats";
import { useState } from "react";
import { REACT_APP_ID_INSTANCE, REACT_APP_API_TOKEN_INSTANCE } from "../env";

const App = () => {
  const [numbers, setNumbers] = useState([]);

  const host = "https://api.green-api.com";

  // Use the configuration values in your code

  const idInstance = REACT_APP_ID_INSTANCE;
  const apiTokenInstance = REACT_APP_API_TOKEN_INSTANCE;

  return (
    <div className="app">
      <Contacts numbers={numbers} setNumbers={setNumbers} />
      <Chats
        number={numbers}
        host={host}
        idInstance={idInstance}
        apiTokenInstance={apiTokenInstance}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
