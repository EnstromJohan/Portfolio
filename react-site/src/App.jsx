import React from 'react';
import Landing from './components/Landing';
import Header from './components/Header';
import About from './components/About';
import './index.css';

const App = () => {
  return (
    <main>
      <Header />
      <Landing />
      <About />
    </main>
  )
}

export default App;