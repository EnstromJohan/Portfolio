import React from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import Skills from './components/Skills';
import About from './components/About';
import './index.css';

const App = () => {
  return (
      <div
        className='min-h-screen bg-neutral-800 bg-cover bg-fixed'        
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/dark-matter.png')` }}        
      >
        <div className="fixed inset-0 bg-black opacity-30 pointer-events-none"></div>

        <Header />
        <Landing />
        <Skills />
        {/* <About /> */}
      </div>
  );
};

export default App;