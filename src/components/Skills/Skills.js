// Skills.jsx
import React, { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";
import {
	FaReact,
	FaCss3Alt,
	FaNodeJs,
	FaHtml5,
	FaSass,
	FaJsSquare,
	FaStar,
} from "react-icons/fa";
import {
	SiTailwindcss,
	SiRedux,
	SiTypescript,
	SiJquery,
	SiExpress,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Skills = () => {
	const skillsRef = useRef(null);
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

		if (skillsRef.current) {
			observer.observe(skillsRef.current);
		}

		return () => {
			if (skillsRef.current) {
				observer.unobserve(skillsRef.current);
			}
		};
	}, []);

	const skillIcons = {
		React: <FaReact />,
		"CSS Modules": <FaCss3Alt />,
		"Tailwind CSS": <SiTailwindcss />,
		"React Hooks": <FaReact />,
		"React Router": <FaReact />,
		"Redux Toolkit + RTK Query": <SiRedux />,
		"Zustand + TanStack Query": <FaReact />,
		"TypeScript (small experience)": <SiTypescript />,
		"Node.js": <FaNodeJs />,
		Express: <SiExpress />,
		JavaScript: <FaJsSquare />,
		jQuery: <SiJquery />,
		REST: <TbApi />,
		AJAX: <TbApi />,
		"HTML/CSS": <FaHtml5 />,
		"SASS/SCSS": <FaSass />,
		SoftSkillIcon: <FaStar />,
	};

	const technicalSkills = [
		"React",
		"CSS Modules",
		"Tailwind CSS",
		"React Hooks",
		"React Router",
		"Redux Toolkit + RTK Query",
		"Zustand + TanStack Query",
		"TypeScript (small experience)",
		"Node.js",
		"Express",
		"JavaScript",
		"jQuery",
		"REST",
		"AJAX",
		"HTML/CSS",
		"SASS/SCSS",
	];

	const softSkills = [
		"Самодисципліна",
		"Вміння швидко навчатися",
		"Критичне мислення",
		"Ефективне управління часом",
		"Комунікаційні навички",
		"Організованість",
	];

	const technicalDelayBase = 0.8;
	const softDelayBase = 1.2;

	return (
		<section
			className={`${styles.skillsSection} ${isVisible ? styles.visible : ""}`}
			id="skills"
			ref={skillsRef}
		>
			<h2
				className={`${styles.heading} ${
					isVisible ? styles.animateHeading : ""
				}`}
			>
				My <span>Skills</span>
			</h2>

			<div className={styles.skillsContainer}>
				<div
					className={`${styles.technicalSkills} ${
						isVisible ? styles.animateBox : ""
					}`}
				>
					<h3 className={styles.subHeading}>Technical Skills</h3>
					<ul className={styles.skillsList}>
						{technicalSkills.map((skill, index) => (
							<li
								key={index}
								className={`${styles.skillItem} ${
									isVisible ? styles.animateSkillItem : ""
								}`}
								style={{
									animationDelay: `${technicalDelayBase + index * 0.1}s`,
								}}
							>
								{skillIcons[skill] && (
									<span className={styles.skillIcon}>{skillIcons[skill]}</span>
								)}
								{skill}
							</li>
						))}
					</ul>
				</div>

				<div
					className={`${styles.softSkills} ${
						isVisible ? styles.animateBox : ""
					}`}
				>
					<h3 className={styles.subHeading}>Soft Skills</h3>
					<ul className={styles.skillsList}>
						{softSkills.map((skill, index) => (
							<li
								key={index}
								className={`${styles.skillItem} ${
									isVisible ? styles.animateSkillItem : ""
								}`}
								style={{ animationDelay: `${softDelayBase + index * 0.1}s` }}
							>
								<span className={styles.skillIcon}>
									{skillIcons.SoftSkillIcon}
								</span>
								{skill}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Skills;
