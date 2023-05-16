import "./Contacts.css";
import MessangerIcon from "../img/messenger.png";
import { useEffect, useState } from "react";
import InputNumber from "./InputNumber";

const Contacts = ({ numbers, setNumbers }) => {
  const [showInputNumber, setShowInputNumber] = useState(false);

  useEffect(() => {
    localStorage.setItem("num");
  });

  return (
    <div className="contacts">
      {/* eslint-disable */}
      <img
        src={MessangerIcon}
        alt="Messanger Icon"
        style={{ width: 25, height: 25 }}
        onClick={() => setShowInputNumber(true)}
      />
      <ul>
        {numbers.map((number) => {
          if (number !== null) {
            return (
              <li className="contacts__container">
                <div className="photo"></div>
                <div className="contacts__info">
                  <h1>{number}</h1>
                  <p>Message</p>
                </div>
              </li>
            );
          } else {
            return "";
          }
        })}
      </ul>
      <InputNumber
        isOpen={showInputNumber}
        onClose={() => setShowInputNumber(false)}
        setNumber={setNumbers}
      />
    </div>
  );
};

export default Contacts;
