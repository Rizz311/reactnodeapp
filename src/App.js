import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  getDBServer() {
    return "http://localhost:3001";
  }

  componentDidMount() {
    let locationurl = this.getDBServer() + "/locations";
    let userurl = this.getDBServer() + "/users";
    console.log("fetching " + locationurl);
    console.log("fetching " + userurl);
    fetch(locaiurl).then((response) => {
      response.json().then((data) => {
        console.log("state from componentDidMount: " + this.state);
        console.log("rows from componentDidMount: " + JSON.stringify(data));

/////////////////////// *******************Difference between fatarrow and vanilla js**********************************///////////////////////
           this.state.userRows({rows: data});
           this.state.locationRows({rows: data})
           console.log(data);
        // this.setState({rows: data});
        // this.setState({rows: data.map(function(x){
        //   return x.name;
        // })})
      }).catch(function(error) {
        console.log("ERROR in fetch parse " + error);
      });
    }).catch(function(error) {
      console.log("ERROR in fetch" + error);
    });
  }

  render() {

    console.log("state from render: " + this.state);
    console.log("rows from render: " + JSON.stringify(this.state.rows));

    let listItems = this.state.rows.map(loc => <li key={loc.name}>{loc.name}</li>);
    return (
      <div>
      <p className="locations">
        {listItems}
      </p>
      <p className="users">
        {listItems}
      </p>
      </div>

    );
  }
}

export default App;
