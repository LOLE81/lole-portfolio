import "./project.css"


function Project({img, link, name, desc}) {
  return (
    <div className="project-container">
      <div className="project">
          <div className="project-browser">
            <div className="project-browser-circle"></div>
            <div className="project-browser-circle"></div>
            <div className="project-browser-circle"></div>
          </div>
          <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="page pic" className="project-img"/>
          </a>
      </div>
      <div className="project-texts">
          <h2 className="project-name">{name}</h2>
          <h5 className="project-description">{desc}</h5>
      </div>
    </div>
  );
};

export default Project;
