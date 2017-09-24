import React, {Component} from 'react';

export default class SplashBanner extends Component {
  constructor(props){
    super(props);
    this.state={
      display: false,
      videoUrl: ""
    }
  }

  displayVideo(){
    this.setState({
      display: true,
      videoUrl: "https://www.youtube.com/embed/mUmvtUKV_1w"
    })
  }

  hideVideo(){
    this.setState({
      display: false,
      videoUrl: ""
    })
  }



  render() {

    const video = {display: "none"};

    return (
      <main className="splash-banner">

      <div className="transp-video-container" style={this.state.display ? null : video} onClick={this.hideVideo.bind(this)}>
        <div className="video-container">
          <iframe width="1366" height="713" src={this.state.videoUrl} frameborder="0" allowfullscreen title="Hack Reactor Promo"></iframe>
        </div>
      </div>

        <h1 className="splash-title-text">Don’t just Learn to Code:<br />
        Think Like a Software Engineer</h1>
        <h2 className="splash-subtitle-text">Reinvent Your Career in 12 weeks</h2>
        <div className="buttons-container">
          <div className="start-learning-btn">
            <p>Start Learning For Free</p>
          </div>
          <div className="who-we-are-btn" onClick={this.displayVideo.bind(this)}>
            <p>See Who We Are <span><div className="play-circle"><i className="fa fa-play" aria-hidden="true"></i></div></span></p>
          </div>
        </div>

        <img className="intercom"  src="https://ordercloud.io/wp-content/uploads/2016/08/intercom-chat-icon-6ffe4913c2a767d9314d5d9bb03092fcec74b3ed58735b3d44d12672a08ff635.png" alt="intercom launcher" />
      </main>
    )
  }
}
