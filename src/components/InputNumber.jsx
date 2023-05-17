import Modal from "./Modal";
import { useState } from "react";
import './InputNumber.css'

const InputNumber = ({ isOpen, onClose, onAddPhoneNumber }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddPhoneNumber = () => {
    onAddPhoneNumber(phoneNumber);
    setPhoneNumber("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="input-number">
        <label>Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Enter Phone Number"
        />
        <button onClick={handleAddPhoneNumber}>Save Phone Number</button>
      </div>
    </Modal>
  );
};

export default InputNumber;
