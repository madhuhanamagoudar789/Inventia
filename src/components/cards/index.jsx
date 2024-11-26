import React from "react";

import styles from "./styles.module.scss";
const Cards = (props) => {
  const { image, altmsg, heading, content, className } = props;
  return (
    <div className={`${className}`}>
      <div className={styles.cards}>
        <img src={image} alt={altmsg} className={styles.image} />
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default Cards;
