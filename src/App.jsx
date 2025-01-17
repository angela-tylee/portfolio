// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Result from './pages/Result';
import Projects from './pages/Projects';

function App() {
  // const [count, setCount] = useState(0)

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

    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
