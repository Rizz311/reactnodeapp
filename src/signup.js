import React, { Component } from 'react';
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',
    email: '',
    password: ''};

    this.usernameChange = this.usernameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.url = this.props.url;
  }
  usernameChange(event) {
    console.log(event);
    this.setState({username: event.target.value, email: this.state.email, password: this.state.password})
  }
  emailChange(event) {
    this.setState({username: this.state.username, email: event.target.value, password: this.state.password})
  }
  passwordChange(event) {
    this.setState({username: this.state.username, email: this.state.email, password: event.target.value})
  }

  handleSubmit(event) {
    fetch(this.url, {method: 'POST', body: new URLSearchParams(this.state)})
    .then(response => console.log('Success:', new URLSearchParams(response)))
    .catch(error => console.error('Error:', error));
    alert('A name was submitted: ' + this.state.username);
    event.preventDefault();
  }  handleLogin(event) {
      fetch(this.url, {method: 'POST', body: new URLSearchParams(this.state)})
      .then(response => console.log('Success:', new URLSearchParams(response)))
      .catch(error => console.error('Error:', error));
      alert('A name was submitted: ' + this.state.username);
      event.preventDefault();
    }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:

          <input type="text" value={this.state.username} onChange={this.usernameChange} />
        </label>
        <label>
          Email:

          <input type="text" value={this.state.email} onChange={this.emailChange} />
        </label>
        <label>
          Password:

          <input type="password" value={this.state.password} onChange={this.passwordChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button type="button">Login</button>
    </div>
    );
  }
}
export default SignupForm
