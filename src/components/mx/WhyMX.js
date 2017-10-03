import React, {Component} from 'react';

export default class WhyMX extends Component {
  constructor(props){
    super(props);
      this.state={
        hidevideo: true,
        videourl: ''
      }
  }

  showVideo(){
    this.setState({
      hidevideo: false,
      videourl: "https://www.youtube.com/embed/qmhUjkac0LU?rel=0&amp;showinfo=0"
    })
  }

  hideVideo(){
    this.setState({
      hidevideo: true,
      videourl: ''
    })
  }

  render(){

    let hidden = {display: "none"};

    return (
      <main className="mx-why-mx">
        <div className="mx-why-mx-overlay">
          <section className="mx-why-contents">
            <img src="https://data.mx.com/assets/images/play.svg" alt="play" onClick={this.showVideo.bind(this)}/>
            <div className="mx-video-container" style={this.state.hidevideo ? hidden : null} onClick={this.hideVideo.bind(this)}>
              <iframe title="What is Financial Aggregation?" width="560" height="315" src={this.state.videourl} frameborder="0" allowfullscreen></iframe>
            </div>
            <section className="mx-why-text-contents">
              <h1>WHY <span>MX?</span></h1>
              <p>MX gives financial institutions and fintech companies<br /> the power to make finances as they should be. To<br /> put it simply, we offer the cleanest data and best<br /> user experience in the space.</p>
            </section>
          </section>

        </div>
      </main>
    )
  }
}
