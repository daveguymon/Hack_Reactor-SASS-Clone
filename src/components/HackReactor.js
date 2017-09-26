import React from 'react';
import Navbar from './hack-reactor/Navbar';
import NavbarAd from './hack-reactor/NavbarAd';
import Banner from './hack-reactor/Banner';
import Outcomes from './hack-reactor/Outcomes';
import Immersive from './hack-reactor/Immersive';
import Locations from './hack-reactor/Locations';
import GetSyllabus from './hack-reactor/GetSyllabus';
import Partnerships from './hack-reactor/Partnerships';
import Testimonials from './hack-reactor/Testimonials';
import GraduationStats from './hack-reactor/GraduationStats';
import GettingAttention from './hack-reactor/GettingAttention';
import ExperienceCampus from './hack-reactor/ExperienceCampus';
import InTheNews from './hack-reactor/InTheNews';
import Footer from './hack-reactor/Footer';

export default function HackReactor (props) {
  return (
    <div className="HackReactor">
      <NavbarAd />
      <Navbar />
      <Banner />
      <Outcomes />
      <Immersive />
      <Locations />
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
