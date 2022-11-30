import { projects } from "../Utils/constants";

const Projects = (props) => {
  return (
    <>
      <h1 className="block-title">{projects[props.lang].title}</h1>
      <div className="introduction">
        <span className="block-subtitle">
          {projects[props.lang].firstProjectTitle}
        </span>
        <p className="experience-p">
          {projects[props.lang].firstProjectDescription}
        </p>
        <a className="project-link" href="https://restcountries-roan.vercel.app/" target="__blank">{projects[props.lang].firstProjectButton}</a>
      </div>
    </>
  );
};

export default Projects;
