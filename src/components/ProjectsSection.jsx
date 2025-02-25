import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PROJECTS from '../constants/projects';

const ProjectsSection = ({ cardCount = PROJECTS.length }) => {
  
  const { t } = useTranslation();

  return (
    <section className="section-project-others container my-6">
      <h2 className="mb-5">
        <span className="pb-2 border-bottom border-primary">
          {t('projects')}
        </span>
      </h2>
      <div className="row g-6 g-lg-5">
        {PROJECTS &&
          PROJECTS
          .slice(0, cardCount)
          .map((project, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <a href={project.site} target="_blank" rel="noopener noreferrer">
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
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github
                          <i className="bi bi-box-arrow-up-right ms-2"></i>
                        </a>
                      </button>
                      <button className="btn btn-outline-primary text-white fw-medium">
                        <a href={project.site}>
                          Site
                          <i className="bi bi-box-arrow-up-right ms-2"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-between">
                    <div className="card-body px-0 pb-0">
                      <h5 className="card-title mt-2">{project.title}</h5>
                    </div>
                    <div className="card-footer p-0 border-0 bg-transparent">
                      {project.tools?.map((item, index) => (
                        <span
                          key={index}
                          className="border-bottom border-primary border-2 fs-7 mt-1 me-3"
                        >
                          {item}
                        </span>
                      ))}
                      <p
                        className="mt-3 text-body-tertiary"
                        style={{ fontSize: '14px' }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
      </div>
      <div
        className={`section-footer ${
          cardCount !== PROJECTS.length ? 'd-flex' : 'd-none'
        } justify-content-end`}
      >
        <Link to="/projects" className="btn btn-outline-primary mt-4" onClick={() => {window.scrollTo(0, 0)}}>
          {t('view-more')}
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
