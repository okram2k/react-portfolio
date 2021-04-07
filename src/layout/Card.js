import react from "react";

function Card() {
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <h1 id="about">About</h1>
          </li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-md-8 offset-md-2"></div>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="images/marko.jpg"
                className="card-img"
                alt="Me, Marko!"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">Marko Fithian, Software Engineer</h4>
                <p className="card-text">
                  As a lifelong technology and programming enthusiast I've
                  recently taken the plunge to focus on developing my skills at
                  a professional level and apply my lifelong passion to my
                  career path.
                  <br />
                  <br />
                  I am a native of Phoenix, Arizona. Born and raised in the
                  Phoenix area and have spent most of my life here. I am not
                  opposed to moving to find my next adventure throughout the
                  country. I am specifically looking for opportunities with a
                  team of great developers in the Phoenix, Dallas, or Seattle areas.
                  <br />
                  <br />
                  <h5>
                  <a
                    href="https://www.linkedin.com/in/marko-fithian-427891204/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  &nbsp; - &nbsp;
                  <a href="https://github.com/okram2k" target="_blank">
                    GitHub
                  </a>
                  &nbsp; - &nbsp;
                  <a
                    href="https://docs.google.com/document/d/16p38rK6oskvAI3RaYMY2P1OAuCOC_ilidtL9MmTaBoE/edit?usp=sharing"
                    target="_blank"
                  >
                    Resume
                  </a>
                  </h5>
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 4/7/2021</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
