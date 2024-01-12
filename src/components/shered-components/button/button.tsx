import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit";
  id?: string;
}

const Button = ({ onClick, children, type = "button", id }: ButtonProps) => {
  return (
    <button id={id} type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
