import react from "react";
import { projects } from "../projects";

function Portfolio() {
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <h1 id="portfolio">Portfolio</h1>
          </li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-md-10 offset-md-1"></div>
        <div className="card-columns">
          {projects.map((project) => (
            <div className="card">
              <img
                src={`images/${project.img}`}
                className="card-img-top"
                alt={project.name}
              />
              <div className="card-body">
                <h4 className="card-title">{project.name}</h4>
                <p className="card-text">
                  {project.desc}
                  <br />
                  <br />
                  Skills used: {project.skills.join(", ")}.
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    {project.live !== "x" ? (
                      <a href={project.live} target="_blank">
                        Link
                      </a>
                    ) : (
                      " "
                    )}
                    &nbsp; &nbsp; &nbsp;
                    {project.git !== "x" ? (
                      <a href={project.git} target="_blank">
                        Github
                      </a>
                    ) : (
                      " "
                    )}
                  </small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
