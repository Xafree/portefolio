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
          <Route path='/projects' element={<Project/>} />
          <Route path='/experiences' element={<Experiences/>} />
          <Route path='/tools' element={<Tools/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
