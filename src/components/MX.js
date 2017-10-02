import React from 'react';
import MXNavbar from './mx/MXNavbar';
import MXBanner from './mx/MXBanner';
import WhyMX from './mx/WhyMX';
import NextGenPFM from './mx/NextGenPFM';
import CrossPlatformFramework from './mx/CrossPlatformFramework';
import Aggregation from './mx/Aggregation';
import FinTechAPI from './mx/FinTechAPI';
import SchulteTestimonial from './mx/SchulteTestimonial';
import Demo from './mx/Demo';

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
      <SchulteTestimonial />
      <Demo />
    </div>
  );
}
