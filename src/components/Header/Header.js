import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoPort}>Port</span>
        <span className={styles.logoFolio}>folio</span>
      </Link>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.home}>
          HOME
        </Link>
        <Link to="/aboutme" className={styles.about}>
          ABOUT ME
        </Link>
        <Link to="/projects" className={styles.projects}>
          PROJECTS
        </Link>
        <Link to="/skills" className={styles.skills}>
          SKILLS
        </Link>
        <Link to="/contact" className={styles.contact}>
          CONTACT ME
        </Link>
      </nav>
    </header>
  );
};

export default Header;
