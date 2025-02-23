import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
