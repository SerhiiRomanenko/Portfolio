import styles from "./Projects.module.css";
import TrailerImg from "../../assets/images/Trailers_screen.jpg";
import PortfolioImg from "../../assets/images/Portfolio_screen.jpg";
import MarkupImg from "../../assets/images/Markup_screen.jpg";
import MarkupImg2 from "../../assets/images/Markup_screen2.jpg";

const Projects = () => {
  const projectsData = [
    {
      title: "E-commerce Website",
      description:
        "A full-stack e-commerce platform built with React, Node.js, Express, and MongoDB. Features user authentication, product catalog, shopping cart, and order processing.",
      image: TrailerImg,
      githubLink: "https://github.com/SerhiiRomanenko/Trailer_Strore_Client_2",
      demoLink: "https://trailer-strore-client-3.vercel.app/",
    },
    {
      title: "Markup (Pet)",
      description:
        "A simple pet project website, built with HTML and CSS. This project showcases responsive design and clean markup.",
      image: MarkupImg,
      githubLink: "https://github.com/SerhiiRomanenko/MobileFirst",
      demoLink: "https://serhiiromanenko.github.io/MobileFirst",
    },
    {
      title: (
        <>
          Personal Portfolio <br /> (This one!)
        </>
      ),
      description:
        "The portfolio website, showcasing my skills and projects, built with React, CSS Modules, and React Router for smooth navigation and animations.",
      image: PortfolioImg,
      githubLink: "https://github.com/SerhiiRomanenko/Portfolio",
    },
    {
      title: "Markup (Pet-2)",
      description:
        "A simple pet project website, built with HTML and CSS. This project showcases responsive design and clean markup.",
      image: MarkupImg2,
      githubLink: "https://github.com/SerhiiRomanenko/Sally",
      demoLink: "https://serhiiromanenko.github.io/Sally/",
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
                    <i className="bx bxl-github"></i>
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
