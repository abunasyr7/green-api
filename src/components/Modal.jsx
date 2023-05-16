import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  const modalContent = isOpen ? (
    <div className="modal">
      {/* eslint-disable */}
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__content">{children}</div>
    </div>
  ) : null;

  return createPortal(modalContent, document.body);
};

export default Modal;
