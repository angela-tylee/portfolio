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

  console.log(i18n.language);

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

  const mobileMenu = document.querySelector('#mobile-menu');

  const toggleMenu = () => {
    console.log("toggle", mobileMenu.style.display);
    if (mobileMenu.style.display !== "flex") {
      mobileMenu.style.display = "flex"
    } else {
      mobileMenu.style.display = "none"
    }
  }

  return (
    <div
      className="container header-container py-4 mb-4 mb-sm-6"
      style={{
        backgroundImage: `url('./images/Mask${
          theme === 'light' ? '' : '-dark'
        }.svg')`,
        // backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <header className="d-flex justify-content-between align-items-center">
        <nav className="d-flex justify-content-between container-fluid px-0">
          <div className="d-flex me-4">
            <Link to="/" className="logo me-4 fw-bold">
              portfolio
            </Link>
            <Link to="/blogs" className="me-4">
              <div>{t('blog')}</div>
            </Link>
            <a href="" className="me-3">
              <i className="bi bi-github"></i>
            </a>
            <a href="" className="me-3 d-none d-sm-block">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="" className="me-3 d-none d-sm-block">
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
            // style={{ width: '90px' }}
          >
            <i className="bi bi-translate me-2"></i>
            <span className="d-none d-sm-inline">{i18n.language === 'en' ? 'English' : '繁體中文'}</span>
          </button>
          <button
            onClick={toggleTheme}
            className="theme-toggler btn btn-none border-0 p-0 me-2"
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
      <main className="hero py-5 py-sm-6">
        <div className="py-5">
          <p className="fs-1 fw-semibold">{t('heading')}</p>
          <h1 className="display-1">
            I am <span className="title-underline">Angela Li</span>.
          </h1>
          <p className="mt-4">
            <i className="bi bi-geo-alt-fill me-1"></i>
            {t('location')}
          </p>
          <p className="mt-4">{t('subheading')}</p>
        </div>
        <div className="mt-6">
          <ButtonGroup color={'primary'} />
        </div>
      </main>
    </div>
  );
};

export default Header;
