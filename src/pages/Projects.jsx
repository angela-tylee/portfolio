// import todoImg from '../assets/images/projects/todo-app.jpg';
// import calculatorImg from '../assets/images/projects/calculator-app.jpg';
// import dictionaryImg from '../assets/images/projects/dictionary-web-app.jpg';
// import mortgageImg from '../assets/images/projects/mortgage-repayment-calculator.jpg';

const Projects = () => {
  return (
    <div className="container py-5">
      <h1>My Works</h1>
      <section className="section-project-others mt-4">
        <div className="row">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="row g-4" key={index}>
              <div className="col-3 mt-4">
                {/* <img src={todoImg} alt="" width="100%" className="shadow"/> */}
                <img
                  src="./images/projects/todo-app.jpg"
                  alt=""
                  width="100%"
                  className="shadow"
                />
                <div className="d-flex mt-3">
                  <p className="me-2 border-bottom border-3 border-primary">JavaScript</p>
                  <p className="me-2 border-bottom border-3 border-primary">HTML</p>
                </div>
              </div>
              <div className="col-3 mt-4">
                {/* <img src={calculatorImg} alt="" width="100%" className="shadow" /> */}
                <img
                  src="./images/projects/calculator-app.jpg"
                  alt=""
                  width="100%"
                  className="shadow"
                />
                <div className="d-flex mt-3">
                  <p className="me-2 border-bottom border-3 border-primary">JavaScript</p>
                  <p className="me-2 border-bottom border-3 border-primary">CSS</p>
                  <p className="me-2 border-bottom border-3 border-primary">Vite</p>
                  <p className="me-2 border-bottom border-3 border-primary">Bootstrap</p>
                </div>
              </div>
              <div className="col-3 mt-4">
                {/* <img src={dictionaryImg} alt="" width="100%" className="shadow" /> */}
                <img
                  src="./images/projects/dictionary-web-app.jpg"
                  alt=""
                  width="100%"
                  className="shadow"
                />
              </div>
              <div className="col-3 mt-4">
                {/* <img src={mortgageImg} alt="" width="100%" className="shadow" /> */}
                <img
                  src="./images/projects/mortgage-repayment-calculator.jpg"
                  alt=""
                  width="100%"
                  className="shadow"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
