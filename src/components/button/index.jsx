import React from "react";
import styles from "./styles.module.scss";
import { ArrowUpRight } from "../../images/index";

const Button = ({ children, className, variant, ...rest }) => {
  const buttonClass =
    variant === "filled" ? styles.btn_filled : styles.btn_unfilled;

  return (
    <button className={`${styles.btn} ${buttonClass} ${className}`} {...rest}>
      {children}
      <img src={ArrowUpRight} alt="ArrowUpRight" />
    </button>
  );
};

export default Button;
