import React from "react";
import { Twitter, Instagram, Facebook, Linkedin, Logo } from "../../images";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={Logo} alt="Inventia Logo" className={styles.logo} />
        <div className={styles.address}>
          <h3>Contact</h3>
          <p>
            703/704, Hubtown Solaris,
            <br />
            Professor NS Phadke Rd, Andheri (E),
            <br />
            Mumbai, Maharashtra 400069
          </p>
          <p>info@inventiahealthcare.com</p>
        </div>
        <div className={styles.company}>
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">Research & Development</a>
            </li>
            <li>
              <a href="#">Manufacturing</a>
            </li>
            <li>
              <a href="#">Business Development</a>
            </li>
          </ul>
        </div>
        <div className={styles.aboutUs}>
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="#">Meet the team</a>
            </li>

            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className={styles.media}>
          <h3>Media Center</h3>
          <ul>
            <li>
              <a href="#">Blogs & News</a>
            </li>
          </ul>
        </div>
        <div className={styles.legal}>
          <p>1985-2023. All Rights Reserved.</p>
        </div>
        <div className={styles.policy}>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <div className={styles.socialMedia}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter Logo" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram Logo" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook Logo" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="Linkedin Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
