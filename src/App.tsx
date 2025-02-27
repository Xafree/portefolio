import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Project} from "./pages/Project";
import {Experiences} from "./pages/Experiences";
import {Tools} from "./pages/Tools";
import {Contact} from "./pages/Contact";

/**
 * Router of application
 * home = Home Page route : /
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Projects' element={<Project/>} />
          <Route path='/Experiences' element={<Experiences/>} />
          <Route path='/Tools' element={<Tools/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
