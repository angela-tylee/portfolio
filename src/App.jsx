import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Result from './pages/Result';
import Projects from './pages/Projects';

function App() {

  return (
    <>
      <Header />
      {/* TODO: use outlet instead? */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/result" element={<Result/>}></Route>
        {/* <Route path="" element={<Blogs/>}></Route> */}
        {/* <Route path="" element={<Blog/>}></Route> */}
      </Routes>
      {/* <Home /> */}
      {/* <Result /> */}
      {/* <Projects /> */}
      <Footer />
    </>
  )
}

export default App
