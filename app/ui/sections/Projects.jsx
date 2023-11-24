import ProjectCard from "@/app/ui/cards/ProjectCard";
import SectionTitle from "@/app/ui/SectionTitle";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "CodaMate",
    description:
      "Un site vitrine pour les sessions de rattrapage en Java/Javascript que je donne",
    image: "/assets/codamate.png",
    link: "https://codamate.nathan-lemoine.be",
    github: "https://github.com/Hakinathan/CodaMate",
    tags: ["HTML", "CSS", "Next.js"],
  },
];

function Projects() {
  return (
    <section id="creations">
      <SectionTitle title="Mes dernières créations 🧙🏻‍♂️" />
      <div className={styles.content}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            tags={project.tags}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
