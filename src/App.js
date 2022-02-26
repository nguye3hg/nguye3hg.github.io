import logo from './logo.svg';
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css';
import Introduction from "./components/Introduction/Introduction";
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Expeience';
import React, { useEffect, useState, useRef } from 'react';

function App(){
  return (
    <div id="App" >
      <Introduction />
      <Navigation />
      <About/>
      <Experience/>
      <Work/>
    </div>
  );
}

export default App;
