import React from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";
import useEscapeKey from "../../hooks/useEscapeKey";

type ModalProps = {
  onClose: () => void;
  content: JSX.Element;
};

const Modal: React.FC<ModalProps> = ({ onClose, content }) => {
  useEscapeKey(onClose);

  return ReactDom.createPortal(
    <div>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modal}>{content}</div>
    </div>,
    document.querySelector(".modal-container")!
  );
};

export default Modal;
