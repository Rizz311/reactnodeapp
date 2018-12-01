import React, { Component } from 'react';
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',
    password: ''};

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.url = this.props.url;
  }
  usernameChange(event) {
    console.log(event);
    this.setState({username: event.target.value, email: this.state.email, password: this.state.password})
  }
  passwordChange(event) {
    this.setState({username: this.state.username, email: this.state.email, password: event.target.value})
  }

  handleSubmit(event) {
    fetch(this.url, {method: 'POST', body: new URLSearchParams(this.state)})
    .then(response => console.log('Success:', new URLSearchParams(response)))
    .catch(error => console.error('Error:', error));
console.log('Something happened');
    event.preventDefault();
  }
