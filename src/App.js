import React, { Component } from 'react';
import './App.css';
import LocationsList from "./Locations.js";
import UsersList from "./Users.js";

class App extends Component {

  getDBServer() {
    return "http://localhost:3001";
  }

  render() {
    let locationsUrl = this.getDBServer() + "/locations";
    let usersUrl = this.getDBServer() + "/users";
    return (
      <div className="App"><LocationsList url={locationsUrl}/><UsersList url={usersUrl}/></div>
    )
  }
}


export default App;
