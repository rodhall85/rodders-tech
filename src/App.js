import React from 'react';
import logo from './logo.svg';

import { Footer, Header, Intro } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
      </main>
      <Footer />
    </div>
  );
}

export default App;
