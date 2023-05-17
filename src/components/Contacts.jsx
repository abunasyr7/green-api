import "./Contacts.css";
import MessangerIcon from "../img/messenger.png";
import InputNumber from "./InputNumber";
import { useState } from "react";

const Contacts = ({
  phoneNumbers,
  onAddPhoneNumber,
  setSelectedPhoneNumber,
}) => {
  const [showInputNumber, setShowInputNumber] = useState(false);

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
        {phoneNumbers.map((phoneNumber, index) => (
          <li
            className="contacts__container"
            key={index}
            onClick={() => setSelectedPhoneNumber(phoneNumber)}
          >
            <div className="photo"></div>
            <div className="contacts__info">
              <h1>{phoneNumber}</h1>
              <p>Message</p>
            </div>
          </li>
        ))}
      </ul>
      <InputNumber
        isOpen={showInputNumber}
        onClose={() => setShowInputNumber(false)}
        onAddPhoneNumber={onAddPhoneNumber}
      />
    </div>
  );
};

export default Contacts;
