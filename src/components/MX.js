import React from 'react';
import MXNavbar from './mx/MXNavbar';
import MXBanner from './mx/MXBanner';
import WhyMX from './mx/WhyMX';
import NextGenPFM from './mx/NextGenPFM';
import CrossPlatformFramework from './mx/CrossPlatformFramework';
import Aggregation from './mx/Aggregation';
import FinTechAPI from './mx/FinTechAPI';

export default function MX (props) {

  return (
    <div className="MX">
      <MXNavbar />
      <MXBanner />
      <WhyMX />
      <NextGenPFM />
      <CrossPlatformFramework />
      <Aggregation />
      <FinTechAPI />
    </div>
  );
}
