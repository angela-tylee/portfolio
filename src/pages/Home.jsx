import { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext';
import ButtonGroup from '../components/ButtonGroup';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ProjectsSection from '../components/ProjectsSection';

const Home = () => {

  // i18n translation
  const { t } = useTranslation();
  const keyPoints = t('ecommerce.key-points', { returnObjects: true });

  // theme toggler
  const { theme } = useContext(ThemeContext);

  // view more collapse
  const [isViewMore, setIsViewMore] = useState(false);

  const collapseContentRef = useRef(null);

  function handleViewMore() {
    const collapseContent = collapseContentRef.current;

    if (collapseContent) {
      collapseContent.addEventListener('shown.bs.collapse', () => {
        setIsViewMore(true);
      });
      collapseContent.addEventListener('hidden.bs.collapse', () => {
        setIsViewMore(false);
      });

      return () => {
        collapseContent.removeEventListener('shown.bs.collapse', () => {
          setIsViewMore(true);
        });
        collapseContent.removeEventListener('hidden.bs.collapse', () => {
          setIsViewMore(false);
        });
      };
    }
  }


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
        <div className="view-more-mask-container position-relative">
          <a
            href="https://angela-tylee.github.io/carpento/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="d-flex align-items-center">
              {t('ecommerce.title')}
              <i className="bi bi-box-arrow-up-right ms-2 fs-6"></i>
            </h2>
          </a>
          <p className="mt-4">{t('ecommerce.description')}</p>

          <div className="mt-3 border-start border-secondary border-5 ps-3">
            <p>
              Github Repo:{' '}
              <a
                href="https://github.com/angela-tylee/carpento"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-underline"
              >
                https://github.com/angela-tylee/carpento
              </a>
            </p>
            <p className="mt-1">
              Live Site:{' '}
              <a
                href="https://angela-tylee.github.io/carpento/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-underline"
              >
                https://angela-tylee.github.io/carpento/
              </a>
            </p>
          </div>
          <h4 className="mt-4">
            <span className="border-bottom border-primary border-2 me-3">
              React
            </span>
            <span className="border-bottom border-primary border-2 me-3">
              CRA
            </span>
            <span className="border-bottom border-primary border-2 me-3">
              Bootstrap
            </span>
          </h4>
          <img
            src="./images/projects/carpento.png"
            alt=""
            width="100%"
            className="mt-4 shadow"
          />

          <div className={`view-more-mask ${isViewMore ? '' : 'show'}`}></div>
        </div>
        <div className="collapse" id="collapseExample" ref={collapseContentRef}>
          <ul className="ps-4 mt-5 lh-lg">
            {keyPoints.map((point, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
            ))}
          </ul>
          <div className="row mt-5">
            <div className="col-12">
              <h4 className="my-3 border-start border-secondary border-5 ps-3">
                {t('ecommerce.products')}
              </h4>
              <video width="100%" autoPlay controls>
                <source
                  src="https://i.imgur.com/y7g86bm.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="row g-4 mt-0 mt-lg-4">
            <div className="col-12">
              <div className="row align-items-end flex-column-reverse flex-md-row-reverse gap-4 gap-md-0">
                <div className="col-12 col-md-8">
                  <video width="100%" autoPlay loop muted>
                    <source
                      src="https://imgur.com/2NWpXwd.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="col-12 col-md-4">
                  <p className="border-start border-secondary border-5 ps-3 fs-5">
                    {t('ecommerce.dark-mode')}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row align-items-end flex-column-reverse flex-md-row gap-4 gap-md-0">
                <div className="col-12 col-md-8">
                  <video width="100%" autoPlay loop muted>
                    <source
                      src="https://imgur.com/YPwOGvj.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="col-12 col-md-4">
                  <p className="border-start border-secondary border-5 ps-3 fs-5">
                    {t('ecommerce.blog')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 mt-lg-5">
            <div className="col-12">
              <h4 className="my-3 border-start border-secondary border-5 ps-3">
                {t('ecommerce.dashboard')}
              </h4>
              <video width="100%" controls>
                <source
                  src="https://imgur.com/kFnTfze.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="my-5 text-center">
            <button className={`btn btn-secondary`}>
              <a
                href="https://angela-tylee.github.io/carpento/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('check-out-site')}
              </a>
            </button>
          </div>
        </div>
        <div className="col-12 mt-4 d-flex justify-content-center">
          <button
            className="btn btn-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={handleViewMore}
          >
            <div className="d-flex flex-column align-items-center">
              {isViewMore ? (
                <>
                  <span>{t('hide')}</span>
                  <i className="bi bi-chevron-compact-up fs-1"></i>
                </>
              ) : (
                <>
                  <span>{t('view-more')}</span>
                  <i className="bi bi-chevron-compact-down fs-1"></i>
                </>
              )}
            </div>
          </button>
        </div>
      </section>
      <section className="section-profile container my-6">
        <div className="container-fluid col-12 col-md-11 p-0 p-md-auto">
          <h2 className="mb-5 text-start text-md-center">
            <span className="pb-2 border-bottom border-primary">
              {t('about-me')}
            </span>
          </h2>
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
            </div>
            <div className="col-12 col-xl-9 ps-xl-5">
              <div className="h-100 d-flex flex-column justify-content-center">
                <h2>{t('ready-challenge')}</h2>
                <p
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: t('description').replace(/\n/g, '<br /><br />'),
                  }}
                  style={{ minHeight: '245px' }}
                />

                <div className="mt-5 mt-lg-6">
                  <ButtonGroup color={'primary'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectsSection cardCount={3} />
    </main>
  );
};

export default Home;
