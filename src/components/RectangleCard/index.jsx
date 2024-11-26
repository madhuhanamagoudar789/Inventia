import React from "react";
import styles from "./styles.module.scss";
import Button from "../button/index";

const RectangleDiv = (props) => {
  const {
    className,
    heading,
    subheading,
    highlightNum,
    information,
    image,
    altInfo,
    btnText,
    imageWidth,
  } = props;

  return (
    <div className={`${styles.rectangleDiv} ${className}`}>
      <div className={styles.card}>
        <div className={styles.topSection}>
          <div className={styles.head}>
            {" "}
            <h3 className={styles.heading}>{heading}</h3>
            <span className={styles.subheading}>{subheading}</span>
          </div>

          <div className={styles.horizontalLineWrapper}>
            <div className={styles.horizontalLine}></div>
          </div>
          <div className={styles.highlightNum}>{highlightNum}</div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.leftContent}>
            <p className={styles.information}>{information}</p>
            <Button className={styles.button} variant="filled">
              {btnText}
            </Button>
          </div>
          <div className={styles.rightContent}>
            <img
              className={styles.image}
              src={image}
              alt={altInfo}
              style={{ width: imageWidth }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectangleDiv;
