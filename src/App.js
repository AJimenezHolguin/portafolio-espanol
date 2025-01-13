import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";


const App = () => {
  return (
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <div className="App">
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="*" element={<div>
              404 Not Found</div>}></Route>
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
