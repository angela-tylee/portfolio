import { Link } from 'react-router-dom';
import CONTENTS from '../constants/content';

// import rectImg from '../assets/images/Mask.svg';

export default function Header() {
  return (
    <div className="container py-4" style={{
      // backgroundImage: `url(${rectImg})`,
      backgroundImage: `url('./images/Mask.svg')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '90% 100%',
    }}>
      <header className="d-flex justify-content-between align-items-center">
        <nav className="d-flex">
          <Link to="/" className="logo me-4 fw-bold">portfolio</Link>
          <Link to="/blogs">
            <div>Blog</div>
          </Link>
        </nav>
        <div className="d-flex">
          <div className="d-flex me-4">
            <a href="" className="me-2"><i className="bi bi-github"></i></a>
            <a href="" className="me-2"><i className="bi bi-linkedin"></i></a>
            <a href="" className="me-2"><i className="bi bi-envelope-fill"></i></a>
          </div>
          <div className="d-flex">
            <a href="" className="me-2"><i className="bi bi-translate"></i></a>
            <a href="" className="me-2"><i className="bi bi-moon-fill"></i></a>
          </div>
        </div>
      </header>
      <main className="hero py-6">
        <div className="py-5">
          <p className="fs-1 fw-semibold">Reliable, Meticulous, Passionate.</p>
          <h1 className="display-1">I am <span>Angela Li</span></h1>
          <p className="mt-4"><i className="bi bi-geo-alt-fill me-1"></i>Taiwan</p>
          <p className="mt-4">Based in Taiwan, I’m a front-end developer passionate about building accessible web apps that users love.</p>
          <p className="mt-4">{CONTENTS.subheading?.en}</p>
        </div>
        <div className="mt-6">
          {/* TODO: pop up and show email, linkedIn */}
          {/* TODO: 元件化 */}
          <a href="" className="btn btn-primary">Get in touch</a>
          <a href="" className="btn btn-outline-primary ms-4">Resume</a>
        </div>
      </main>
    </div>
  )
}

// const Header = () => {
//   return (
//     <h1>This is Header</h1>
//   )
// }

// export default Header;