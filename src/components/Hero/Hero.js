import styles from "./Hero.module.css";
import cvFile from "../../assets/files/CV_Front-end_Serhii_Romanenko.pdf";
import avatar from "../../assets/images/profile-pic-2.png";

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
						title="Facebook account"
					>
						<i className="bx bxl-facebook"></i>
					</a>

					<a
						className={styles.line4__github}
						href="https://github.com/SerhiiRomanenko"
						title="GitHub account"
					>
						<i className="bx bxl-github"></i>
					</a>

					<a
						className={styles.line4__linkedin}
						href="https://www.linkedin.com/in/serhii-romanenko/"
						title="LinkedIn account"
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

			<div className={`${styles.heroImageContainer}`}>
				<svg className={styles.heroImage} viewBox="0 0 500 500">
					{/* Пульсуюче світіння */}
					<circle
						cx="250"
						cy="250"
						r="240"
						fill="none"
						stroke="url(#glow)"
						strokeWidth="4"
						className="animate-pulse"
						opacity="0.6"
					/>

					{/* 🟢 Перше штрих-пунктирне кільце — повільно за годинниковою стрілкою */}
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

					{/* 🟢 Друге штрих-пунктирне кільце — проти годинникової стрілки */}
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

					{/* Фото - змінені значення для збільшення та вирівнювання */}
					<image
						href={avatar}
						x="50"
						y="50"
						width="385"
						height="382"
						clipPath="url(#clipCircle)"
					/>

					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#3B82F6" />
							<stop offset="100%" stopColor="#EC4899" />
						</linearGradient>
						<linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#10B981" />
							<stop offset="100%" stopColor="#8B5CF6" />
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
		</section>
	);
};

export default Hero;
