import react from "react";

function AboutMe() {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Passions</h1>
          <p className="lead">
            I have always had a lifelong affinity and love of technology and
            computers. Along with a love of video games I also quite enjoy
            baseball, football, poker, literature, writing, and cooking.
            <br />
            <br />I have a special affinity for building projects and assembling
            things. There is a great feeling of accomplishment when putting
            together a project one piece at a time. From Legos to wood kits, to
            plastic models, to even assembling furniture. It is all quite
            enjoyable to me!
          </p>
        </div>
      </div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <h1 id="skills">Skills</h1>
          </li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-sm-4">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Education</h1>
              <div className="list-group">
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">
                      Certificate: Software Engineering - 2021
                    </h5>
                  </div>
                  <p className="mb-1">Thinkful. Online.</p>
                </div>
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">
                      Certificate: Responsive Web Design - 2020
                    </h5>
                  </div>
                  <p className="mb-1">FreeCodeCamp. Online</p>
                </div>
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Robotics Engineering - 2014-2018</h5>
                  </div>
                  <p className="mb-1">
                    Arizona State University. Tempe, Arizona
                  </p>
                </div>
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">
                      Associate Degree in Science (Physics) - 2014
                    </h5>
                  </div>
                  <p className="mb-1">Mesa Community College. Mesa, Arizona</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Skillset</h1>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="card-header">Front-End</div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">JavaScript</li>
                      <li className="list-group-item">TypeScript</li>
                      <li className="list-group-item">ES6</li>
                      <li className="list-group-item">React</li>
                      <li className="list-group-item">Redux</li>
                      <li className="list-group-item">Apollo</li>
                      <li className="list-group-item">Ant Design</li>
                      <li className="list-group-item">amCharts 5</li>
                      <li className="list-group-item">HTML5</li>
                      <li className="list-group-item">CSS3</li>
                    </ul>
                    <br />
                  </div>

                  <div className="col">
                    <div className="card-header">Back-End</div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Node.js</li>
                      <li className="list-group-item">Knex</li>
                      <li className="list-group-item">PostgreSQL</li>
                      <li className="list-group-item">Express</li>
                      <li className="list-group-item">MongoDB</li>
                      <li className="list-group-item">Mongoose</li>
                    </ul>
                  </div>

                  <div className="col">
                    <div className="card-header">Other Skills</div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Microprocessor Programming
                      </li>
                      <li className="list-group-item">Circuit Board Logic</li>
                      <li className="list-group-item">Engineering Design</li>
                      <li className="list-group-item">Git</li>
                      <li className="list-group-item">Mocha</li>
                      <li className="list-group-item">Google Docs</li>
                      <li className="list-group-item">Microsoft Office</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
