import React, {Component} from 'react';

export default class GetSyllabus extends Component {
  constructor(props){
    super(props);
      this.state={
        email: ''
      }
  }

  inputChange(event){
    this.setState({
      email: event.target.value
    })
  }

  submitEmail(){
    this.setState({
      email: ''
    })
  }

  render() {
      return (
      <main className="get-syllabus">
        <div className="get-syllabus-content">
          <h2 className="download-syllabus">Download the Detailed Syllabus of Our Program</h2>

          <div className="submit-email">
            <input placeholder="Email Address" value={this.state.email} onChange={this.inputChange.bind(this)}/>
            <div className="syllabus-btn" onClick={this.submitEmail.bind(this)}>
              <p>Get the Syllabus</p>
            </div>
          </div>
          <p className="input-fine-print">By clicking "Get the Syllabus," you agree to Hack Reactor’s privacy policy.
          </p>
        </div>
      </main>
    )
  }
}
