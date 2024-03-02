"use client";
import { useRef } from "react";
import { projectsData } from "@/utils/projectsData";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
const ProjectsSection = () => {
  //en un futuro agregar filtro para proyectos reales y de aprendizaje

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        Mis proyectos
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => {
          return (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.4, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tags={project.tag}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectsSection;
