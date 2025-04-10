import { experience } from "../Utils/constants";

const Experience = (props) => {
  return (
    <>
      <h1 className="block-title">{experience[props.lang].title}</h1>
      <div className="introduction">
        <span className="block-subtitle">
          {experience[props.lang].firstSubTitle}
        </span>
        <p className="block-p">
          {experience[props.lang].firstParagraph}
        </p>
        <p className="block-p">
          {experience[props.lang].secondParagraph}
        </p>
        <p className="block-p">
          {experience[props.lang].thirdParagraph}
        </p>
      </div>
    </>
  );
};

export default Experience;
