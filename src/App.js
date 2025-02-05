import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  )
}

export default App;
