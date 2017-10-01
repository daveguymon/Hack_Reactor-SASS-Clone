import React from 'react';
import MXNavbar from './mx/MXNavbar';
import MXBanner from './mx/MXBanner';
import WhyMX from './mx/WhyMX';
import NextGenPFM from './mx/NextGenPFM';
import CrossPlatformFramework from './mx/CrossPlatformFramework';
import Aggregation from './mx/Aggregation';

export default function MX (props) {

  return (
    <div className="MX">
      <MXNavbar />
      <MXBanner />
      <WhyMX />
      <NextGenPFM />
      <CrossPlatformFramework />
      <Aggregation />
    </div>
  );
}
