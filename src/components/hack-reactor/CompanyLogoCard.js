import React from 'react';

export default function CompanyLogoCard (props){

  return (
    <main className="company-logo-card">
      <img src={props.url} alt="corporate logo"/>
    </main>
  )
}
