import React from "react";
import styles from "./styles.module.scss";

const TeamCard = ({ name, role, image, imgLeft }) => {
  return (
    <div
      className={`${styles.teamCard} ${
        imgLeft ? styles.leftImage : styles.rightImage
      }`}
    >
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
