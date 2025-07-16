import React from "react";
import styles from "./Projects.module.css";
import TrailerImg from "../../assets/images/Trailers_screen.jpg"; // Замініть на реальне зображення
import PortfolioImg from "../../assets/images/Portfolio_screen.jpg"; // Замініть на реальне зображення
// Імпортуйте іконки, якщо ви хочете використовувати їх для посилань на GitHub/Demo
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  // Приклад даних для проектів. Замініть їх своїми реальними проектами!
  const projectsData = [
    {
      title: "E-commerce Website",
      description:
        "A full-stack e-commerce platform built with React, Node.js, Express, and MongoDB. Features user authentication, product catalog, shopping cart, and order processing.",
      image: TrailerImg, // Замініть на реальне зображення
      githubLink: "https://github.com/SerhiiRomanenko/Online_Strore_Client",
      demoLink: "https://peaceful-bombolone-4fb17b.netlify.app",
    },

    {
      title: "Weather Dashboard",
      description:
        "A weather application that fetches real-time weather data using a third-party API. Displays current weather conditions and a 5-day forecast for any city.",
      image: "https://placehold.co/600x400/00ABF0/FFFFFF?text=Project+3", // Замініть на реальне зображення
      githubLink: "https://github.com/your-username/weather-dashboard",
      demoLink: "https://your-weather-app-demo.com",
    },
    {
      title: (
        <>
          Personal Portfolio <br /> (This one!)
        </>
      ),
      description:
        "The portfolio website, showcasing my skills and projects, built with React, CSS Modules, and React Router for smooth navigation and animations.",
      image: PortfolioImg, // Замініть на реальне зображення
      githubLink: "https://github.com/your-username/personal-portfolio",
      demoLink: "https://your-portfolio-demo.com",
    },
  ];

  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.heading}>
        Latest <span>Projects</span>
      </h2>

      <div className={styles.projectsContainer}>
        {projectsData.map((project, index) => (
          <div key={index} className={styles.projectBox}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectLayer}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className={styles.projectLinks}>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkIcon}
                  >
                    <i className="bx bxl-github"></i> {/* Boxicon for GitHub */}
                    {/* Або <FaGithub /> якщо використовуєте react-icons */}
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkIcon}
                  >
                    <i className="bx bx-link-external"></i>{" "}
                    {/* Boxicon for external link */}
                    {/* Або <FaExternalLinkAlt /> якщо використовуєте react-icons */}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
