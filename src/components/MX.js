import React from 'react';
import MXNavbar from './mx/MXNavbar';
import MXBanner from './mx/MXBanner';
import WhyMX from './mx/WhyMX';
import NextGenPFM from './mx/NextGenPFM';

export default function MX (props) {

  return (
    <div className="MX">
      <MXNavbar />
      <MXBanner />
      <WhyMX />
      <NextGenPFM />
    </div>
  );
}
