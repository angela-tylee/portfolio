import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import CONTENTS from '../constants/content';

// import rectImg from '../assets/images/Mask.svg';

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  // const [theme, setTheme] = useState('light');

  // useEffect(() => {

  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme) {
  //     setTheme(savedTheme);
  //     document.documentElement.setAttribute('data-bs-theme', savedTheme);
  //     return;
  //   }

  //   const initialTheme =
  //     document.documentElement.getAttribute('data-bs-theme') || 'light';
  //   setTheme(initialTheme);
  //   localStorage.setItem('theme', initialTheme);

  // }, [theme]);

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

  // const shareBtn = document.querySelector('.icon-share-container');
  const shareModal = document.querySelector('.share-modal-container');

  // shareBtn.addEventListener('click', function () {
  //   if (shareModal.style.display == 'none') {
  //     shareModal.style.display = 'block';
  //     shareModal.classList.add('show');
  //   } else {
  //     shareModal.style.display = 'none';
  //   }
  // });

  function toggleContactBtn() {
    if (shareModal.style.display == 'none') {
      shareModal.style.display = 'block';
      shareModal.classList.add('show');
    } else {
      shareModal.style.display = 'none';
    }
  }

  return (
    <div
      className="container py-4 mb-6"
      style={{
        // backgroundImage: `url(${rectImg})`,
        // FIXME: light image not showing...
        backgroundImage: `url('./images/Mask${
          theme === 'light' ? '' : '-dark'
        }.svg')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '90% 100%',
      }}
    >
      <header className="d-flex justify-content-between align-items-center">
        <nav className="d-flex">
          <Link to="/" className="logo me-4 fw-bold">
            portfolio
          </Link>
          <Link to="/blogs">
            <div>Blog</div>
          </Link>
        </nav>
        <div className="d-flex">
          <div className="d-flex me-4">
            <a href="" className="me-2">
              <i className="bi bi-github"></i>
            </a>
            <a href="" className="me-2">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="" className="me-2">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
          <div className="d-flex">
            <a href="" className="me-2">
              <i className="bi bi-translate"></i>
            </a>
            {/* <a href="" className="me-2"><i className="bi bi-moon-fill"></i></a> */}
            <button
              onClick={toggleTheme}
              className="btn btn-none border-0 p-0 me-2 d-none d-md-block"
              title="switch theme"
            >
              {theme === 'light' ? (
                <i className="bi bi-sun-fill"></i>
              ) : (
                <i className="bi bi-moon-fill"></i>
              )}
            </button>
          </div>
        </div>
      </header>
      <main className="hero py-6">
        <div className="py-5">
          <p className="fs-1 fw-semibold">Reliable, Meticulous, Passionate.</p>
          <h1 className="display-1">
            I am <span>Angela Li</span>
          </h1>
          <p className="mt-4">
            <i className="bi bi-geo-alt-fill me-1"></i>Taiwan
          </p>
          <p className="mt-4">
            Based in Taiwan, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <p className="mt-4">{CONTENTS.subheading?.en}</p>
        </div>
        <div className="mt-6 d-flex">
          {/* TODO: pop up and show email, linkedIn */}
          {/* TODO: 元件化 */}
          <div className="contact-btn-container position-relative">
            <div className="share-modal-container w-100">
              <div className="share-modal bg-secondary rounded-1 mx-2 py-2 px-4 d-flex justify-content-between align-items-center">
                <i className="bi bi-linkedin fs-5"></i>
                <i className="bi bi-envelope-fill fs-5"></i>
              </div>
            </div>
            <button className="btn btn-primary" onClick={toggleContactBtn}>
              Get in touch
            </button>
          </div>
          <button href="" className="btn btn-outline-primary ms-4">
            Resume
          </button>
        </div>
      </main>
    </div>
  );
}

// const Header = () => {
//   return (
//     <h1>This is Header</h1>
//   )
// }

// export default Header;
