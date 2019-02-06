import React, { Component } from 'react';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './container/home/Home'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
