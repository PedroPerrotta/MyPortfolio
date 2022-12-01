import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CentralCard from "../UI/centralCard";

const WelcomePage = () => {
  const [fade, setFade] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setFade(true);
  },[]);

  const animate = (language) => {
    setFade(false);
    setTimeout(() => {navigate(`/${language}`)}, 600);
  }

  return (
    <CentralCard>
      <div className={`welcome-container ${fade ? "fadeInPage" : "fadeOutPage"}`}>
        <h1 className="title-welcome mb-4">Select Language</h1>
        <h1 className="title-welcome mb-5">Seleccionar Idioma</h1>

        <button type="button" onClick={() => animate("english")} className="language-button mx-3">
          English
        </button>
        <button type="button" onClick={() => animate("spanish")} className="language-button mx-3 mt-2">
          Español
        </button>
      </div>
    </CentralCard>
  );
};

export default WelcomePage;
