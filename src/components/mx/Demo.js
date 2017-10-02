import React, {Component} from 'react';

export default class Demo extends Component {
  constructor(props){
    super(props);
      this.state={
        fname: '',
        lname: '',
        coname: '',
        coemail: '',
        pnumber: ''
      }
  }

  changeFName(event){
    this.setState({
      fname: event.target.value
    })
  }

  changeLName(event){
    this.setState({
      lname: event.target.value
    })
  }

  changeCoName(event){
    this.setState({
      coname: event.target.value
    })
  }

  changeCoEmail(event){
    this.setState({
      coemail: event.target.value
    })
  }

  changePNumber(event){
    this.setState({
      pnumber: event.target.value
    })
  }

  clearFields(){
    this.setState({
      fname: '',
      lname: '',
      coname: '',
      coemail: '',
      pnumber: ''
    })
  }

  render(){
    return (
      <main className="demo">
        <div className="demo-contents">
          <h1>See the MX platform in action.</h1>
          <h2>Ask for a demo today.</h2>
          <div className="input-fields">
            <input placeholder="First Name" value={this.state.fname} onChange={this.changeFName.bind(this)}/>
            <input placeholder="Last Name" value={this.state.lname} onChange={this.changeLName.bind(this)} />
            <input placeholder="Company Name" value={this.state.coname} onChange={this.changeCoName.bind(this)} />
            <input placeholder="Company Email" value={this.state.coemail} onChange={this.changeCoEmail.bind(this)} />
            <input className="double-wide" placeholder="Phone Number" value={this.state.pnumber} onChange={this.changePNumber.bind(this)} />
          </div>
          <div className="mx-demo-btn" onClick={this.clearFields.bind(this)}>GET A FREE DEMO</div>
        </div>
      </main>
    )
  }
}
