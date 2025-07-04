import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext';
import ButtonGroup from '../components/ButtonGroup';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleLanguage = () => {
    if (i18n.language == 'en') {
      i18n.changeLanguage('zh-TW');
    } else {
      i18n.changeLanguage('en');
    }
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div
      className="container header-container py-4 mb-4 mb-sm-6"
      style={{
        backgroundImage: `url('./images/Mask${
          theme === 'light' ? '' : '-dark'
        }.svg')`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <header className="d-flex justify-content-between align-items-center">
        <nav className="d-flex justify-content-between container-fluid px-0">
          <div className="d-flex me-4">
            <Link to="/" className="logo me-4 fw-bold">
              portfolio
            </Link>
            <a href='https://angela-tylee.notion.site/Learning-Notes-21a8d159628880d280d1e6a6c5eb0ec1?pvs=74' target='_blank' className="me-4 border-bottom border-3 border-primary">
              <div>{t('blog')}</div>
            </a>
            <a href="https://github.com/angela-tylee" target="_blank" rel="noopener noreferrer" className="me-3">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/angela-tylee/" target="_blank" rel="noopener noreferrer" className="me-3 d-none d-sm-block">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:angela.tylee25@gmail.com" className="me-3 d-none d-sm-block">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
          {/* <button className="btn btn-none border-0 p-0 d-sm-none" onClick={toggleMenu}>
            <i className="bi bi-list-nested fs-2"></i>
          </button> */}
        </nav>
        <div className="mobile-menu d-flex" id="mobile-menu">
          <button
            className="language-toggler btn btn-none border-0 p-0 me-2 text-start"
            onClick={toggleLanguage}
          >
            <i className="bi bi-translate me-3 me-md-2"></i>
            <span className="d-none d-sm-inline">{i18n.language === 'en' ? 'English' : '繁體中文'}</span>
          </button>
          <button
            onClick={toggleTheme}
            className="theme-toggler btn btn-none border-0 p-0 me-3 me-md-2"
            title="switch theme"
          >
            {theme === 'light' ? (
              <i className="bi bi-sun-fill"></i>
            ) : (
              <i className="bi bi-moon-fill"></i>
            )}
          </button>
        </div>
      </header>
      <main className="hero py-4 py-sm-6">
        <div className="py-5">
          <p className="fs-1 fw-semibold">{t('heading')}</p>
          <h1 className="display-1">
            I am <Link to="/"><span className="title-underline">Angela Lee</span></Link>.
          </h1>
          <p className="mt-4">
            <i className="bi bi-geo-alt-fill me-1"></i>
            {t('location')}
          </p>
          <p className="mt-4">{t('subheading')}</p>
        </div>
        <div className="mt-3 mt-sm-6">
          <ButtonGroup color={'primary'} />
        </div>
      </main>
    </div>
  );
};

export default Header;
