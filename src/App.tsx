import React from "react";
import { Navigate, Routes, Route } from 'react-router-dom'
import MyCard from "./components/MyCard/MyCard";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";
// import NavigateScroll from "./components/NavigateScroll";
import MenuBtn from "./components/MenuBtn/MenuBtn";
import MenuMyCard from "./components/MenuMyCard/MenuMyCard";
import Translation from './components/Translation/Translation';
import Theme from './components/Theme/Theme';
import TriangleElem from "./components/TriangleElem/TriangleElem";
import Alert from "./components/UI/Alert/Alert";
import ScrollNextPage from "./components/ScrollNextPage";
// import SnakeGame from "./components/SnakeGame/SnakeGame";
// import StartMessage from './components/StartMessage/StartMessage'

// let arrRoute = ['/', '/about', '/portfolio', '/contact']

function App() {

  return (
    <div className="App">
      <Alert />
      <Routes>
        <Route path='/*' element={(
          <div className="container main_container">
            <Navbar />
            {/* <SnakeGame/>
            <StartMessage/> */}

            <MenuBtn>
              <Translation />
              <Theme />
            </MenuBtn>

            <MenuMyCard>
              <MyCard />
            </MenuMyCard>

            <TriangleElem />

            <div className="page_box">
              <div className="content_page_box" id="home">
                <ScrollNextPage id="home">
                  <Home />
                </ScrollNextPage>
              </div>
              <div className="content_page_box" id="about">
                <ScrollNextPage id="about">
                  <About />
                </ScrollNextPage>
              </div>
              <div className="content_page_box" id="portfolio">
                <ScrollNextPage id="portfolio">
                  <Portfolio />
                </ScrollNextPage>
              </div>
              <div className="content_page_box" id="contact">
                <ScrollNextPage id="contact">
                  <Contact />
                </ScrollNextPage>
              </div>
            </div>
          </div>
        )} />
        <Route path='/error' element={<Error />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
}

export default App;
