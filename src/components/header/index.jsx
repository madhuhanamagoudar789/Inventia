import React from "react";

import { Logo, LineSeperator, ArrorUp } from "../../images";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <img
          className={styles.inventiaLogoIcon}
          alt="inventiaLogoIcon"
          src={Logo}
        />
        <div className={styles.links}>
          <a href="#" className={styles.offerings}>
            Offerings
          </a>
          <a href="#" className={styles.offerings}>
            Company
          </a>
          <a href="#" className={styles.offerings}>
            Product Finder
          </a>
          <a href="#" className={styles.offerings}>{`Blogs & News`}</a>
          <img
            className={styles.lineSeparatorIcon}
            alt="lineSeparatorIcon"
            src={LineSeperator}
          />
          <div className={styles.contactUs}>
            <a href="#" className={styles.offerings}>
              Contact us
            </a>
            <img className={styles.contactUsChild} alt="" src={ArrorUp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
