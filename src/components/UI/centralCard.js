const CentralCard = (props) => {
  return <div className={`central-card ${props.class}`}>{props.children}</div>;
};

export default CentralCard;
