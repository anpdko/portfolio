import React from "react";
import { Navigate, Routes, Route } from 'react-router-dom'
import MyCard from "./components/MyCard/MyCard";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import NavigateScroll from "./components/NavigateScroll";
import MenuBtn from "./components/MenuBtn/MenuBtn";
import MenuMyCard from "./components/MenuMyCard/MenuMyCard";
import Translation from './components/Translation/Translation';
import Theme from './components/Theme/Theme';
import TriangleElem from "./components/TriangleElem/TriangleElem";
import Alert from "./components/UI/Alert/Alert";
import SnakeGame from "./components/SnakeGame/SnakeGame";
import StartMessage from './components/StartMessage/StartMessage'

let arrRoute = ['/', '/about', '/portfolio', '/contact']

function App() {

  return (
    <NavigateScroll arrRoute={arrRoute} power={20} >
      <Alert/>
      <Routes>
        <Route path='/*' element={(
          <div className="container main_container">
            <Navbar />
            <SnakeGame/>
            <StartMessage/>

            <MenuBtn>
              <Translation/>
              <Theme/>
            </MenuBtn>

            <MenuMyCard>
              <MyCard />
            </MenuMyCard>

            <TriangleElem/>
            
            <div className="page_box">
              <div className="content_page_box">
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/portfolio' element={<Portfolio/>}/>
                  <Route path='/contact' element={<Contact/>} />
                </Routes>
              </div>
            </div>
          </div>
        )} />
        <Route path='/error' element={<Error />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </NavigateScroll>
  );
}

export default App;
