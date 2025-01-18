import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';


// import carpentoPhoto from '../assets/images/projects/carpento.png';
// import todoImg from '../assets/images/projects/todo-app.jpg';
// import calculatorImg from '../assets/images/projects/calculator-app.jpg';
// import dictionaryImg from '../assets/images/projects/dictionary-web-app.jpg';
// import mortgageImg from '../assets/images/projects/mortgage-repayment-calculator.jpg';
// import profileImg from '../assets/images/profile.png';
// import rectImg from '../assets/images/Mask.svg';

import CONTENTS from '../constants/content';
import PROJECTS from '../constants/projects';

const Home = () => {

    const { theme } = useContext(ThemeContext);
  
  // const [theme, setTheme] = useState('light');

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme) {
  //     setTheme(savedTheme);
  //     document.documentElement.setAttribute('data-bs-theme', savedTheme);
  //     return;
  //   }

  //   // const initialTheme =
  //   //   document.documentElement.getAttribute('data-bs-theme') || 'light';
  //   // setTheme(initialTheme);
  //   // localStorage.setItem('theme', initialTheme);
  // }, [theme]);

  return (
    <main className="home">
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
      <section className="section-profile my-6">
        <div className="container col-10 col-xl-8 col-xxl-7">
          <div className="row">
            {/* <div className="col-3" style={{ backgroundImage: `url(${rectImg})` }}> */}
            <div
              className="col-3 px-0 position-relative overflow-hidden"
              style={{
                // FIXME: not chang color...
                backgroundImage: `url('./images/Mask${
                  theme === 'light' ? '' : '-dark'
                }.svg')`,
              }}
            >
              {/* <img src={profileImg} alt="" width="100%" className="mt-5" /> */}
              <img
                className="profile-img position-absolute"
                src="./images/profile.png"
                alt=""
                width="100%"
              />
              {/* TODO: add gif for demo: desktop - mobile, dark/light mode, CKEditor, addToCart Message, search/sort/tab/swiper? */}
            </div>
            <div className="col-9 ps-6">
              <div className="h-100 d-flex flex-column justify-content-center">
                <h2>Ready to Tackle Any Technical Challenges.</h2>
                <p className="mt-4">
                  I aim at crafting sophisticated and purposeful websites, driven
                  by the belief that well-leveraged technology can enhance
                  people's everyday lives.
                  I aim at crafting sophisticated and purposeful websites, driven
                  by the belief that well-leveraged technology can enhance
                  people's everyday lives.
                  {/* {CONTENTS.description?.en} */}
                  Check my work below
                </p>
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
                <p className="mt-4"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-project-others container my-6">
        <h2 className="mb-4">Mini Projects</h2>
        <div className="row">
          {PROJECTS &&
            PROJECTS.map((project, index) => (
              <div className="col-3" key={index}>
                {/* <img src={todoImg} alt="" width="100%" className="shadow" /> */}
                <div className="card border-0">
                  <div className="card-header p-0 border-0 position-relative">
                    <img
                      src={project.img}
                      alt=""
                      width="100%"
                      className="shadow"
                    />
                    <div className="card-mask">
                      <button className="btn btn-outline-primary text-white fw-medium">
                        Github<i className="bi bi-box-arrow-up-right ms-2"></i>
                      </button>
                      <button className="btn btn-outline-primary text-white fw-medium">
                        Site<i className="bi bi-box-arrow-up-right ms-2"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body px-0">
                    <h5 className="card-title mt-2">{project.title}</h5>
                  </div>
                </div>
              </div>
            ))}
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
