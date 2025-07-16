import React from "react";
import styles from "./Hero.module.css";
import profileImage from "../../assets/images/profile-pic.png";
import cvFile from "../../assets/files/CV_Serhii_Romanenko.pdf";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h3 className={styles.line1}>Hello, my name is</h3>
        <h1 className={styles.line2}>
          <span className={styles.line2Serhii}>Serhii </span>
          <span className={styles.line2Romanenko}>Romanenko</span>
        </h1>
        <h2 className={styles.line3}>
          I'm a <span>Front-End Developer (React)</span>
        </h2>

        <div className={`${styles.socialMedia} ${styles.line4}`}>
          <a
            className={styles.line4__facebook}
            href="https://www.facebook.com/sergey.romanenko.9237/"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            className={styles.line4__github}
            href="https://github.com/SerhiiRomanenko"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            className={styles.line4__linkedin}
            href="https://www.linkedin.com/in/serhii-romanenko/"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <a
          href={cvFile}
          target="_blank"
          rel="noopener noreferrer"
          download="CV_Serhii_Romanenko.pdf"
          className={`${styles.btn} ${styles.line5}`}
        >
          Download CV
        </a>
      </div>

      <div className={styles.heroImage}>
        <img src={profileImage} alt="Serhii Romanenko" />
      </div>
    </section>
  );
};

export default Hero;
