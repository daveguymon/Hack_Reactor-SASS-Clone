import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NavbarAd from './components/NavbarAd';
import SplashBanner from './components/SplashBanner';
import SplashOutcomes from './components/SplashOutcomes';
import SplashImmersive from './components/SplashImmersive';
import SplashLocations from './components/SplashLocations';
import GetSyllabus from './components/GetSyllabus';
import Partnerships from './components/Partnerships';
import Testimonials from './components/Testimonials';
import GraduationStats from './components/GraduationStats';
import GettingAttention from './components/GettingAttention';
import ExperienceCampus from './components/ExperienceCampus';
import InTheNews from './components/InTheNews';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarAd />
        <Navbar />
        <SplashBanner />
        <SplashOutcomes />
        <SplashImmersive />
        <SplashLocations />
        <GetSyllabus />
        <Partnerships />
        <Testimonials />
        <GraduationStats />
        <GettingAttention />
        <ExperienceCampus />
        <InTheNews />
      </div>
    );
  }
}

export default App;
