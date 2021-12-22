import React from "react";
import styles from "@/styles/ui/Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = (props) => {
  const classNameButton = props.disabled ? cx("btn", "disabled") : cx("btn");
  return (
    <button className={classNameButton} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default Button;
