import React from 'react';
import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <div className='container-fluid'>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
