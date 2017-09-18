import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NavbarAd from './components/NavbarAd';
import SplashBanner from './components/SplashBanner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarAd />
        <Navbar />
        <SplashBanner />
      </div>
    );
  }
}

export default App;
