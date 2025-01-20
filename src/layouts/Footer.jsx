import { useTranslation } from 'react-i18next';
import ButtonGroup from '../components/ButtonGroup';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary py-5 py-sm-6">
      <div className="container">
        <div className="d-flex flex-column flex-sm-row justify-content-between pb-4 pb-sm-6">
          <h1>{t('know-more')}</h1>
          {/* <div>
            <a href="" className="btn btn-dark">Get in touch</a>
            <a href="" className="btn btn-outline-dark ms-4">Resume</a>
          </div> */}
          <div className="mt-5 mt-sm-0">
            <ButtonGroup color={"dark"}/>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row flex-column-reverse justify-content-between align-items-center border-top border-1 border-dark pt-4">
          <a className="logo fw-bold mt-2 mt-sm-0">portfolio</a>
          <small className="mt-2 mt-sm-0">designed inspired by Frontend Mentor</small>
          <div className="d-flex mt-2 mt-sm-0">
            <div className="d-flex">
              <a href="" className="me-3">
                <i className="bi bi-github"></i>
              </a>
              <a href="" className="me-3">
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
