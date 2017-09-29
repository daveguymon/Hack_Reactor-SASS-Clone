import React from 'react';
import MXNavbar from './mx/MXNavbar';
import MXBanner from './mx/MXBanner';
import WhyMX from './mx/WhyMX';

export default function MX (props) {

  return (
    <div className="MX">
      <MXNavbar />
      <MXBanner />
      <WhyMX />
    </div>
  );
}
