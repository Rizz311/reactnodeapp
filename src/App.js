import React, { Component } from 'react';
import './App.css';
import LocationsList from "./Locations.js";
import UsersList from "./Users.js";
import SignupForm from "./signup.js";

class App extends Component {

  getDBServer() {
    return "http://localhost:3001";
  }

  render() {
    let locationsUrl = this.getDBServer() + "/locations";
    let usersUrl = this.getDBServer() + "/users";
    let signupUrl = this.getDBServer() + "/newUser";
    let loginURL = this.getDBServer() + "/login";
    return (
      // <div className="App"><LocationsList url={locationsUrl}/><UsersList url={usersUrl}/><SignupForm url={signupUrl}/></div>
      <div className="App"><SignupForm url={signupUrl}/></div>

    )
  }
}


export default App;
