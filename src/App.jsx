import { createRoot } from "react-dom";
import "./App.css";
import Contacts from "./components/Contacts";
import Chats from "./components/Chats";

const App = () => (
  <div className="app">
    <Contacts />
    <Chats />
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
