import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Header/NavBar";
import HomePage from "./pages/MainPage"
import "./App.css"
import Footer from "./components/Footer/Footer";
const App = () => {

  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
