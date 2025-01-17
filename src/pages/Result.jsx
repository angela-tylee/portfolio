// import todoImg from '../assets/images/projects/todo-app.jpg';
// import calculatorImg from '../assets/images/projects/calculator-app.jpg';
// import dictionaryImg from '../assets/images/projects/dictionary-web-app.jpg';
// import mortgageImg from '../assets/images/projects/mortgage-repayment-calculator.jpg';

const Result = () => {
  return (
    <div className="container py-5">
      <h1>Results from "<span>Bootstrap</span>"</h1>
      <section className="section-project-others mt-4">
        <div className="row">
          <div
            className="col-3"
          >
            {/* <img src={todoImg} alt="" width="100%" className="shadow"/> */}
            <img src="./images/projects/todo-app.jpg" alt="" width="100%" className="shadow" />
          </div>
          <div className="col-3">
            {/* <img src={calculatorImg} alt="" width="100%" className="shadow" /> */}
            <img src="./images/projects/calculator-app.jpg" alt="" width="100%" className="shadow" />
          </div>
          <div className="col-3">
            {/* <img src={dictionaryImg} alt="" width="100%" className="shadow" /> */}
            <img src="./images/projects/dictionary-web-app.jpg" alt="" width="100%" className="shadow" />
          </div>
          <div className="col-3">
            {/* <img src={mortgageImg} alt="" width="100%" className="shadow" /> */}
            <img src="./images/projects/mortgage-repayment-calculator.jpg" alt="" width="100%" className="shadow" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Result;