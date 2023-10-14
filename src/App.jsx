import React from 'react';
import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

import "./App.css"

function App() {
  return (
    <div className='container-fluid'>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
