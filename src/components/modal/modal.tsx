import React from "react";
import ReactDom from "react-dom";

import useEscapeKey from "../../hooks/useEscapeKey";
import styles from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
  content: JSX.Element;
}

const Modal = ({ onClose, content }: ModalProps) => {
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
