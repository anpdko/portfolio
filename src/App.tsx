import React from "react";
import { Navigate, Routes, Route } from 'react-router-dom'
import MyCard from "./components/MyCard/MyCard";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import Theme from "./components/Theme/Theme";
import NavigateScroll from "./components/NavigateScroll";
import Translation from "./components/Translation/Translation";

let arrRoute = ['/', '/about', '/portfolio', '/contact']

function App() {

  return (
    <NavigateScroll arr={arrRoute} power={20} >
      <Routes>
        <Route path='/*' element={(
          <div className="container main_container">
            <Navbar />
            <div className="my_card_settings">
              <Translation/>
              <Theme />
            </div>
            <div className="my_card_box">
              <MyCard />
            </div>
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
