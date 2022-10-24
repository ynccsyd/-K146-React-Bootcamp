import "./title.css";

const TitleComponent = (props) => {
  return (
    <div className="title__wrapper">
      <p className="title__secondary-title">{props.secondary}</p>
      <p className="title__primary-title">{props.primary}</p>
    </div>
  );
};

export default TitleComponent;