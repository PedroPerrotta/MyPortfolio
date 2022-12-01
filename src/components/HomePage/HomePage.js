import React from "react";
import CentralCard from "../UI/centralCard";
import photo from "../../images/pedro-perfil.jpg";
import PagesOptions from "../UI/pagesOptions";
import AboutMe from "../../Parts/aboutMe";
import Experience from "../../Parts/experience";
import Projects from "../../Parts/projects";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const navigate = useNavigate();
  const [about, setAbout] = useState(true);
  const [experience, setExperience] = useState(false);
  const [projects, setProjects] = useState(false);
  const [isRendering, setIsRendering] = useState(false);

  useEffect(() => {
    setIsRendering(true);
  }, []);

  const onChangePage = (page) => {
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

  const handleBack = () => {
    setIsRendering(false);
    navigate(`/`);
  };

  return (
    <CentralCard>
      <div
        className={
          "home-page container-fluid p-5 " +
          (isRendering ? "fadeInPage" : "fadeOutPage")
        }
      >
        <div className="row">
          <div className="col-xl-4 col-sm-12">
            <button
              type="button"
              className="back-button"
              onClick={handleBack}
            >{`Back`}</button>
            <div className="self-photo-container aligns-items-center justify-content-center">
              <img className="self-photo" src={photo} alt="profile" />
            </div>
          </div>
          <div className="col-sm-12 col-xl-7 right-cols">
            <PagesOptions lang={props.lang} onClick={onChangePage} />
            <div className="right-container">
              <div className="info-block">
                {
                  <div
                    className={`section-container ${
                      about ? "fadeIn" : "fadeOut"
                    }`}
                  >
                    <AboutMe lang={props.lang} />
                  </div>
                }
                {
                  <div
                    className={`section-container ${
                      experience ? "fadeIn" : "fadeOut"
                    }`}
                  >
                    <Experience lang={props.lang} />
                  </div>
                }
                {
                  <div
                    className={`section-container ${
                      projects ? "fadeIn" : "fadeOut"
                    }`}
                  >
                    <Projects lang={props.lang} />
                  </div>
                }
              </div>
              <div className="social-medias mt-5">
                <a
                  href="https://www.instagram.com/pedroperrotta1/"
                  target="__blank"
                >
                  <i className="social-icon fab fa-instagram mx-3"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/pedro-alegre-perrotta-756663210/"
                  target="__blank"
                >
                  <i className="social-icon fab fa-linkedin mx-2"></i>
                </a>
                <a href="https://github.com/PedroPerrotta" target="__blank">
                  <i className="social-icon fab fa-github mx-3"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CentralCard>
  );
};

export default HomePage;
