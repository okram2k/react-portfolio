import react from "react";

function Contact() {
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <h1 id="contact">Contact</h1>
          </li>
        </ol>
      </nav>

      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Would you like me to join your team for your next project? Send
                me a message and I'll reply straight away!
              </h5>
              <form action="https://formspree.io/f/xaylkebk" method="POST">
                <div className="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    name="_replyto"
                  />
                </div>

                <div className="form-group">
                  <label for="textarea">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="textarea"
                    rows="3"
                    name="message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
