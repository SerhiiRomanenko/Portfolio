// About.jsx
import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import aboutImage from "../../assets/images/profile-pic_2.png";
import { Link } from "react-router-dom";

const About = () => {
	const aboutRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				threshold: 0.2,
			}
		);

		if (aboutRef.current) {
			observer.observe(aboutRef.current);
		}

		return () => {
			if (aboutRef.current) {
				observer.unobserve(aboutRef.current);
			}
		};
	}, []);

	return (
		<section
			className={`${styles.aboutSection} ${isVisible ? styles.visible : ""}`}
			id="about"
			ref={aboutRef}
		>
			<div
				className={`${styles.heroImageContainer} ${
					isVisible ? styles.animateImage : ""
				}`}
			>
				<svg className={styles.heroImage} viewBox="0 0 500 500">
					{/* Пульсуюче світіння */}
					<circle
						cx="250"
						cy="250"
						r="240"
						fill="none"
						stroke="url(#glow)"
						strokeWidth="4"
						opacity="0.6"
						className={styles.pulse}
					/>

					{/* Перше штрих-пунктирне кільце */}
					<circle
						cx="250"
						cy="250"
						r="220"
						fill="none"
						stroke="url(#gradient)"
						strokeWidth="5"
						strokeDasharray="115 25"
						strokeLinecap="round"
						className={styles.spinCircleSlow}
					/>

					{/* Друге штрих-пунктирне кільце */}
					<circle
						cx="250"
						cy="250"
						r="200"
						fill="none"
						stroke="url(#gradient3)"
						strokeWidth="4"
						strokeDasharray="100 20"
						strokeLinecap="round"
						className={styles.spinCircleReverse}
					/>

					<image
						href={aboutImage}
						x="50"
						y="70"
						width="396"
						height="387"
						clipPath="url(#clipCircle)"
					/>

					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#3B82F6" />
							<stop offset="100%" stopColor="#EC4899" />
						</linearGradient>
						<linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#00EEFF" />
							<stop offset="100%" stopColor="#EF4444" />
						</linearGradient>
						<radialGradient id="glow">
							<stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
							<stop offset="100%" stopColor="transparent" />
						</radialGradient>
						<clipPath id="clipCircle">
							<circle cx="250" cy="250" r="180" />
						</clipPath>
					</defs>
				</svg>
			</div>
			<div className={styles.aboutContent}>
				<h2 className={`${styles.heading} ${isVisible ? styles.line1 : ""}`}>
					About <span>Me</span>
				</h2>
				<h3 className={`${styles.subHeading} ${isVisible ? styles.line2 : ""}`}>
					Front-End Developer (React)
				</h3>
				<div
					className={`${styles.textContainer} ${isVisible ? styles.line3 : ""}`}
				>
					<p className={styles.paragraph_1}>
						Hello there! I'm Serhii Romanenko, a passionate and dedicated
						Front-End Developer specializing in React. My journey into web
						development began with a fascination for creating intuitive and
						engaging user experiences. I thrive on bringing designs to life and
						building responsive, high-performance web applications.
					</p>
					<p className={styles.paragraph_2}>
						With a strong foundation in HTML, CSS, and JavaScript, I
						continuously explore new technologies and best practices to stay at
						the forefront of the ever-evolving web landscape. I'm always eager
						to learn and adapt, ensuring my skills remain sharp and relevant.
					</p>
					<p className={styles.paragraph_3}>
						Beyond coding, I enjoy problem-solving and collaborating with teams
						to deliver impactful solutions. I believe in clean code, efficient
						workflows, and a user-centric approach to development. I'm excited
						about new challenges and opportunities to grow as a developer.
					</p>
				</div>
				<Link
					to="/contact"
					className={`${styles.btn} ${isVisible ? styles.line4 : ""}`}
				>
					Contact Me
				</Link>
			</div>
		</section>
	);
};

export default About;
