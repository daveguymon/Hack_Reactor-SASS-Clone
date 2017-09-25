import React, { Component } from 'react';
import Navbar from './Navbar';
import NavbarAd from './NavbarAd';
import SplashBanner from './SplashBanner';
import SplashOutcomes from './SplashOutcomes';
import SplashImmersive from './SplashImmersive';
import SplashLocations from './SplashLocations';
import GetSyllabus from './GetSyllabus';
import Partnerships from './Partnerships';
import Testimonials from './Testimonials';
import GraduationStats from './GraduationStats';
import GettingAttention from './GettingAttention';
import ExperienceCampus from './ExperienceCampus';
import InTheNews from './InTheNews';
import Footer from './Footer';

export default class HackReactor extends Component {
  render() {
    return (
      <div className="HackReactor">
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
        <Footer />
      </div>
    );
  }
}
