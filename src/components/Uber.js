import React from 'react';
import UberNavbar from './uber/UberNavbar';
import UberBanner from './uber/UberBanner';


export default function Uber (props) {

  return (
    <div className="uber">
      <UberNavbar />
      <UberBanner />
    </div>
  );
}
