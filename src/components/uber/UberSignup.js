import React, {Component} from 'react';

export default class UberSignup extends Component {
  constructor(props){
    super(props);
    this.state={
      fname: '',
      lname: '',
      email: '',
      phone: '',
      pword: '',
      city: '',
      code: ''
    }
  }

  updateFName(event){
    this.setState({
      fname: event.target.value
    })
  }

  updateLName(event){
    this.setState({
      lname: event.target.value
    })
  }

  updateEmail(event){
    this.setState({
      email: event.target.value
    })
  }

  updatePhone(event){
    this.setState({
      phone: event.target.value
    })
  }

  updatePword(event){
    this.setState({
      pword: event.target.value
    })
  }

  updateCity(event){
    this.setState({
      city: event.target.value
    })
  }

  updateCode(event){
    this.setState({
      code: event.target.value
    })
  }

  clearFields(){
    this.setState({
      fname: '',
      lname: '',
      email: '',
      phone: '',
      pword: '',
      city: '',
      code: ''
    })
  }

  render(){
    return (
      <main className="uber-signup">
        <div className="grey-bar"></div>
        <div className="signup-section">
          <img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.1/d1a3f4spazzrp4.cloudfront.net/images/home/home-preview-rider@2x-d7aaaee6e0.png" alt="location icon" />
          <p>Ride with Uber<br />
          <span>SIGN UP<i className="fa fa-chevron-right" aria-hidden="true"></i></span></p>
        </div>
        <div className="or-border"></div>
        <div className="or-circle"><p>OR</p></div>

        <div className="signup-section signup-to-drive">
          <img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.1/d1a3f4spazzrp4.cloudfront.net/images/home/home-preview-driver-7e83a7ee95.png" alt="driver icon" />
          <p>Sign up to drive</p>
        </div>
        <section className="uber-input-fields">
          <div className="signup-name">
            <input placeholder="First Name" value={this.state.fname} onChange={this.updateFName.bind(this)}/>
            <input placeholder="Last Name" value={this.state.lname} onChange={this.updateLName.bind(this)}/>
          </div>
            <input placeholder="Email" value={this.state.email} onChange={this.updateEmail.bind(this)}/>
            <input placeholder="Phone" value={this.state.phone} onChange={this.updatePhone.bind(this)}/>
            <input placeholder="Create Password" value={this.state.pword} onChange={this.updatePword.bind(this)}/>
            <input className="input-city" placeholder="City" value={this.state.city} onChange={this.updateCity.bind(this)}/>
            <input placeholder="Invite Code (Optional)" value={this.state.code} onChange={this.updateCode.bind(this)}/>
        </section>
        <div className="uber-signup-button" onClick={this.clearFields.bind(this)}>
          <p>SIGN UP TO DRIVE</p>
          <i className="fa fa-long-arrow-right fa-lg" aria-hidden="true"></i>
        </div>
        <section className="uber-fine-print">
          <p>Or <span>sign up</span> with your rider account.</p>

          <p className="fine-print">By proceeding, I agree that Uber or its representatives may contact<br /> me by email, phone, or SMS (including by automatic telephone<br /> dialing system) at the email address or number I provide, including<br /> for marketing purposes. I have read and understand the relevant<br /> <span>Driver Privacy Statement</span>.</p>
        </section>
      </main>
    )
  }
}
