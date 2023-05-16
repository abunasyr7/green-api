import Modal from "./Modal";

const InputNumber = ({ isOpen, onClose, setNumber }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <label>Phone Number</label>
        <input type="text" onChange={(e) => setNumber(e.target.value)} />
      </div>
    </Modal>
  );
};

export default InputNumber;
