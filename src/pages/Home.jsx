import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext';
import ButtonGroup from '../components/ButtonGroup';
import PROJECTS from '../constants/projects';

const Home = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <main className="home">
      <section className="section-skill bg-secondary py-5 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 my-4 text-center">
              <Link to="/result">
                <h3>HTML</h3>
                <p></p>
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-md-4 my-4 text-center">
              <h3>CSS</h3>
              <p></p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 my-4 text-center">
              <h3>JavaScript</h3>
              <p></p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 my-4 text-center">
              <h3>Vite</h3>
              <p></p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 my-4 text-center">
              <h3>React</h3>
              <p></p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 my-4 text-center">
              <h3>Bootstrap</h3>
              <p></p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-project-main container my-6">
        <div>
          <h2>E-commerce Website: Carpento</h2>
          <p className="mt-4">
            Selling furniture online, from showcasing the products, browsing the
            details to checkout flow.
          </p>
        </div>
        <div className="mt-4">
          <img
            src="./images/projects/carpento.png"
            alt=""
            width="100%"
            className="shadow"
          />
        </div>
      </section>
      <section className="section-profile container my-6">
        <div className="container-fluid col-12 col-sm-10">
          <h2 className="mb-5 text-start text-md-center"><span className="pb-2 border-bottom border-primary">About Me</span></h2>
          <div className="row">
            <div
              className="d-none d-xl-block col-xl-3 px-0 position-relative overflow-hidden"
              style={{
                backgroundImage: `url('./images/Mask${
                  theme === 'light' ? '' : '-dark'
                }.svg')`,
              }}
            >
              <img
                className="profile-img position-absolute"
                src="./images/profile.png"
                alt=""
                width="100%"
              />
              {/* TODO: add gif for demo: desktop - mobile, dark/light mode, CKEditor, addToCart Message, search/sort/tab/swiper? */}
            </div>
            <div className="col-12 col-xl-9 ps-xl-5">
              <div className="h-100 d-flex flex-column justify-content-center">
                <h2>{t('ready-challenge')}</h2>
                <p className="mt-4 lh-lg" dangerouslySetInnerHTML={{ __html: t('description').replace(/\n/g, '<br />') }} />

                <div className="mt-6">
                  <ButtonGroup color={"primary"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-project-others container my-6">
        <h2 className="mb-5"><span className="pb-2 border-bottom border-primary">{t('projects')}</span></h2>
        <div className="row g-3">
          {PROJECTS &&
            PROJECTS.map((project, index) => (
              <div className="col-12 col-sm-6 col-md-3" key={index}>
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
            {t('view-more')}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
