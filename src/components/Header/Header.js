import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setReady(true), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<header className={styles.header}>
			<Link to="/" className={styles.logo}>
				<span className={styles.logoPort}>Port</span>
				<span className={styles.logoFolio}>folio</span>
			</Link>

			<div
				className={`${styles.menuToggle} ${ready ? styles.menuReady : ""} ${
					menuOpen ? styles.open : ""
				}`}
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<nav className={`${styles.navbar} ${menuOpen ? styles.open : ""}`}>
				<Link to="/" className={styles.home} onClick={() => setMenuOpen(false)}>
					HOME
				</Link>
				<Link
					to="/aboutme"
					className={styles.about}
					onClick={() => setMenuOpen(false)}
				>
					ABOUT ME
				</Link>
				<Link
					to="/projects"
					className={styles.projects}
					onClick={() => setMenuOpen(false)}
				>
					PROJECTS
				</Link>
				<Link
					to="/skills"
					className={styles.skills}
					onClick={() => setMenuOpen(false)}
				>
					SKILLS
				</Link>
				<Link
					to="/contact"
					className={styles.contact}
					onClick={() => setMenuOpen(false)}
				>
					CONTACT ME
				</Link>
			</nav>
		</header>
	);
};

export default Header;
