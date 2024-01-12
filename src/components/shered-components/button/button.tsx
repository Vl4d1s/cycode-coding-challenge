import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit";
  id?: string;
  disabled?: boolean;
}

const Button = ({
  onClick,
  children,
  type = "button",
  id,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={styles.button}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
