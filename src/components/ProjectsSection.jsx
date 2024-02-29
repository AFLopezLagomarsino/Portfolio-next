import { projectsData } from "@/utils/projectsData";
import ProjectCard from "./ProjectCard";
const ProjectsSection = () => {
  //en un futuro agregar filtro para proyectos reales y de aprendizaje
    return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mb-8">Mis proyectos</h2>
      {/* <div>
        <button>Aprendizaje</button>
        <button>Desarrollo</button>
      </div> */}
      <div className= "grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => {
          return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tags={project.tag}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
          )})}
      </div>
    </>
  );
};

export default ProjectsSection;
