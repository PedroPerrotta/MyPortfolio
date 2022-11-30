import { aboutMeContent } from "../Utils/constants";

const AboutMe = (props) => {
  return (
    <>
      <h1 className="block-title">Pedro Alegre Perrotta</h1>
      <div className="introduction">
        <p className="introduction-p">{aboutMeContent[props.lang].firstParagraph}</p>
      </div>
    </>
  );
};

export default AboutMe;
