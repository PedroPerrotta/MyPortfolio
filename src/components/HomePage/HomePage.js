import CentralCard from "../UI/centralCard";
import photo from "../../images/pedro-perfil.jpg";
import PagesOptions from "../UI/pagesOptions";
import AboutMe from "../../Parts/aboutMe";
import Experience from "../../Parts/experience";
import Projects from "../../Parts/projects";
import { useState } from "react";


const HomePage = (props) => {
  let content;

  const [about, setAbout] = useState(true);
  const [experience, setExperience] = useState(false);
  const [projects, setProjects] = useState(false);

  const onChangePage = (page) => {
    console.log(page);
    if (page === "about") {
      setAbout(true);
      setExperience(false);
      setProjects(false);
    } else if (page === "experience") {
      setAbout(false);
      setExperience(true);
      setProjects(false);
    } else if (page === "projects") {
      setAbout(false);
      setExperience(false);
      setProjects(true);
    }
  };

  if (props.lang === "english") {
    content = (
      <div className="home-page container-fluid p-5">
        <div className="row">
          <div className="col-4">
            <div className="self-photo-container d-flex aligns-items-center justify-content-center">
              <img className="self-photo" src={photo} alt="profile-photo" />
            </div>
          </div>
          <div className="col-7 d-flex">
            <PagesOptions onClick={onChangePage} />
            <div className="right-container">
              {/* {about && <AboutMe />}
              {experience && <Experience />}
              {projects && <Projects />} */}

              <div className="social-medias mt-5">
                <i className="social-icon fab fa-instagram mx-3"></i>
                <i className="social-icon fab fa-linkedin mx-2"></i>
                <i className="social-icon fab fa-github mx-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.lang === "spanish") {
  }

  return <CentralCard>{content}</CentralCard>;
};

export default HomePage;
