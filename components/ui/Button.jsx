import React from "react";
import styles from "@/styles/ui/Button.module.css";

const Button = (props) => {
  const { ...children } = props;
  return (
    <button className={styles.btn} disabled={true}>
      {props.children}
    </button>
  );
};

export default Button;
