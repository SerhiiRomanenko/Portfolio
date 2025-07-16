import styles from "./About.module.css";
import aboutImage from "../../assets/images/profile-pic_2.png"; // You'll want to add an image for the about section
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutImg}>
        <img src={aboutImage} alt="About Me" />
      </div>

      <div className={styles.aboutContent}>
        <h2 className={styles.heading}>
          About <span>Me</span>
        </h2>
        <h3 className={styles.subHeading}>Front-End Developer (React)</h3>
        <p className={styles.paragraph1}>
          Hello there! I'm Serhii Romanenko, a passionate and dedicated
          Front-End Developer specializing in React. My journey into web
          development began with a fascination for creating intuitive and
          engaging user experiences. I thrive on bringing designs to life and
          building responsive, high-performance web applications.
        </p>
        <p className={styles.paragraph2}>
          With a strong foundation in HTML, CSS, and JavaScript, I continuously
          explore new technologies and best practices to stay at the forefront
          of the ever-evolving web landscape. I'm always eager to learn and
          adapt, ensuring my skills remain sharp and relevant.
        </p>
        <p className={styles.paragraph3}>
          Beyond coding, I enjoy problem-solving and collaborating with teams to
          deliver impactful solutions. I believe in clean code, efficient
          workflows, and a user-centric approach to development. I'm excited
          about new challenges and opportunities to grow as a developer.
        </p>
        <Link to="/contact" className={styles.btn}>
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default About;
