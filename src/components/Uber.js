import React from 'react';
import UberNavbar from './uber/UberNavbar';
import UberBanner from './uber/UberBanner';
import UberSignup from './uber/UberSignup';
import ReasonsToRide from './uber/ReasonsToRide';
import UberCommitment from './uber/UberCommitment';
import FareEstimate from './uber/FareEstimate';
import ReasonsToDrive from './uber/ReasonsToDrive';
import UberPartners from './uber/UberPartners';
import UberGiftCards from './uber/UberGiftCards';



export default function Uber (props) {

  return (
    <div className="uber">
      <UberNavbar />
      <UberBanner />
      <UberSignup />
      <ReasonsToRide />
      <UberCommitment />
      <FareEstimate />
      <ReasonsToDrive />
      <UberPartners />
      <UberGiftCards />
    </div>
  );
}
