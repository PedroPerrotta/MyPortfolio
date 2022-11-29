import { Link } from "react-router-dom";
import CentralCard from "../UI/centralCard";

const WelcomePage = () => {
  return (
    <CentralCard>
      <div className="welcome-container">
        <h1 className="title-welcome mb-4">-- Select Language --</h1>
        <h1 className="title-welcome mb-5">-- Seleccionar Idioma --</h1>

        <Link to="/english" className="language-button mx-3">
          English
        </Link>
        <Link to="/spanish" className="language-button mx-3">
          Spanish
        </Link>
      </div>
    </CentralCard>
  );
};

export default WelcomePage;
