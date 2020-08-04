import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Processofcreating from './components/Processofcreating';
import Myprojects from './components/Myprojects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <About/>
        <Experience/>
        <Processofcreating/>
        <Myprojects/>
        <Contact/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
