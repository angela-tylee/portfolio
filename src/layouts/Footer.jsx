const Footer = () => {
  return (
    <footer className="bg-secondary py-6">
      <div className="container">
        <div className="d-flex justify-content-between pb-6">
          <h1>Know More about Me</h1>
          <div>
            <a href="" className="btn btn-dark">Get in touch</a>
            <a href="" className="btn btn-outline-dark ms-4">Resume</a>
          </div>
        </div>
        <div className="d-flex justify-content-between border-top border-1 border-dark pt-4">
          <nav className="d-flex">
            <a className="logo fw-bold me-4">portfolio</a>
          </nav>
          <small>designed inspired by Frontend Mentor</small>
          <div className="d-flex">
            <div className="d-flex">
              <a href="" className="me-2">
                <i className="bi bi-github"></i>
              </a>
              <a href="" className="me-2">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
