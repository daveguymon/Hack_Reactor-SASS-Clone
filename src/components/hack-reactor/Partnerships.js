import React from 'react';
import CompanyLogoCard from './CompanyLogoCard';

export default function Partnerships (props){

  const logoUrls = [
    {img: "https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/logo/company/facebook.gif"
    },
    {img: "https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/logo/company/linkedin.gif"
    },
    {img: "https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/logo/company/google.gif"
    },
    {img: "https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/logo/company/paypal.gif"
    },
    {img: "https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/logo/company/apple.gif"
    },
    {img:
      "https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/logo/company/asana.gif"
    },
    {img: "https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/logo/company/changeorg.gif"
    },
    {img: "https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/logo/company/adobe.gif"
    },
    {img: "https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/logo/company/zenefits.gif"
    },
    {img: "https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3031/assets/images/logo/company/uber.gif"
  }
  ];

  const allLogoCards = logoUrls.map((item, indx) => {
    return <CompanyLogoCard key={indx} url={item.img}/>
  })

  return (
    <main className="partnerships">
      <h1 className="first-choice-header">“Hack Reactor Grads are Our First Choice”</h1>
      <p>The best coding bootcamps simulate a real-world software environment for their students; the grads are so <br /> well-prepared, they come in and hit the ground running, that’s really what we’re looking for.<br /><span>- Dustin B., Cisco</span></p>
      <div className="company-logos-container">
        {allLogoCards}
      </div>
      <div className="partnerships-btn">
        <p>Learn More About Employer Partnerships</p>
      </div>
    </main>
  )
}
