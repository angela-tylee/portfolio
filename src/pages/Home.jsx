import { Link } from 'react-router-dom';

// import carpentoPhoto from '../assets/images/projects/carpento.png';
// import todoImg from '../assets/images/projects/todo-app.jpg';
// import calculatorImg from '../assets/images/projects/calculator-app.jpg';
// import dictionaryImg from '../assets/images/projects/dictionary-web-app.jpg';
// import mortgageImg from '../assets/images/projects/mortgage-repayment-calculator.jpg';
// import profileImg from '../assets/images/profile.png';
// import rectImg from '../assets/images/Mask.svg';

import CONTENTS from '../constants/content';

const Home = () => {
  return (
    <main>
      <section className="section-skill bg-secondary py-5 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-4 my-4 text-center">
              <Link to="/result">
                <h3>HTML</h3>
                <p></p>
              </Link>
            </div>
            <div className="col-4 my-4 text-center">
              <h3>CSS</h3>
              <p></p>
            </div>
            <div className="col-4 my-4 text-center">
              <h3>JavaScript</h3>
              <p></p>
            </div>
            <div className="col-4 my-4 text-center">
              <h3>Vite</h3>
              <p></p>
            </div>
            <div className="col-4 my-4 text-center">
              <h3>React</h3>
              <p></p>
            </div>
            <div className="col-4 my-4 text-center">
              <h3>Bootstrap</h3>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-project-main container my-6">
        <div>
          <h2>E-commerce Website: Carpento</h2>
          <p>
            Selling furniture online, from showcasing the products, browsing the
            details to checkout flow.
          </p>
        </div>
        <div className="mt-4">
          {/* <img src={carpentoPhoto} alt="" width="100%" className="shadow" /> */}
          <img
            src="./images/projects/carpento.png"
            alt=""
            width="100%"
            className="shadow"
          />
        </div>
      </section>
      <section className="section-profile container my-6">
        <div className="row">
          <div className="col-1"></div>
          {/* <div className="col-3" style={{ backgroundImage: `url(${rectImg})` }}> */}
          <div
            className="col-3"
            style={{ backgroundImage: `url(./images/Mask.svg)` }}
          >
            {/* <img src={profileImg} alt="" width="100%" className="mt-5" /> */}
            <img
              src="./images/profile.png"
              alt=""
              width="100%"
              className="mt-5"
            />
            {/* TODO: add gif for demo: desktop - mobile, dark/light mode, CKEditor, addToCart Message, search/sort/tab/swiper? */}
          </div>
          <div className="col-1"></div>
          <div className="col-6">
            <div className="h-100 d-flex flex-column justify-content-center">
              <h2>Ready to Tackle Any Technical Challenges.</h2>
              <p className="mt-4">
                I aim at crafting sophisticated and purposeful websites, driven
                by the belief that well-leveraged technology can enhance
                people's everyday lives.
                {CONTENTS.description?.en}
                {/* I excel at delving into fundamental logic,
                ensuring a solid understanding of the core principles that drive
                efficient and reliable applications. I am passionate about
                refining code to make it cleaner, more concise, and highly
                maintainable. I thrive on asking meaningful questions to
                challenge assumptions and uncover better approaches. My focus
                lies in creating code that is reusable, readable, and scalable,
                contributing to the long-term success of any project. With a
                steady and meticulous approach, I bring a strong commitment to
                delivering robust, well-structured solutions that align with
                both technical requirements and business goals. */}
                Check my work below
                <div className="mt-6">
                  {/* TODO: pop up and show email, linkedIn */}
                  {/* TODO: 元件化 */}
                  <a href="" className="btn btn-primary">
                    Get in touch
                  </a>
                  <a href="" className="btn btn-outline-primary ms-4">
                    Resume
                  </a>
                </div>
              </p>
              <p className="mt-4"></p>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </section>
      <section className="section-project-others container my-6">
        <h2 className="mb-4">My Works</h2>
        <div className="row">
          <div className="col-3">
            {/* <img src={todoImg} alt="" width="100%" className="shadow" /> */}
            <img
              src="./images/projects/todo-app.jpg"
              alt=""
              width="100%"
              className="shadow"
            />
          </div>
          <div className="col-3">
            {/* <img src={calculatorImg} alt="" width="100%" className="shadow" /> */}
            <img
              src="./images/projects/calculator-app.jpg"
              alt=""
              width="100%"
              className="shadow"
            />
          </div>
          <div className="col-3">
            {/* <img src={dictionaryImg} alt="" width="100%" className="shadow" /> */}
            <img
              src="./images/projects/dictionary-web-app.jpg"
              alt=""
              width="100%"
              className="shadow"
            />
          </div>
          <div className="col-3">
            {/* <img src={mortgageImg} alt="" width="100%" className="shadow" /> */}
            <img
              src="./images/projects/mortgage-repayment-calculator.jpg"
              alt=""
              width="100%"
              className="shadow"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link to="/projects" className="btn btn-outline-primary mt-4">
            View More
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
