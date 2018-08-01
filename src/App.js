import React, { Component } from 'react';
import './App.css';
class App extends Component {
  getDBServer() {
    return "http://localhost:3001";
  }
  render() {
    let url = this.getDBServer() + "/locations";
    return (
      <div className="App"><LocationsList url={url}/></div>
    )
  }
}
class LocationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }
  componentDidMount() {
    let url = this.props.url;
    console.log("fetching (via props2)" + url);
    fetch(url).then((response) => {
      response.json().then((data) => {
        console.log("state1 from componentDidMount: " + this.state);
        console.log("rows1 from componentDidMount: " + JSON.stringify(data));
        this.setState({rows: data});
        console.log("fetch1 done");
                //  this.setState({rows: data.map(function(x) {return x.name})});
      }).catch(function(error) {
        console.log("e in fetch parse " + error);
      });
    }).catch(function(error) {
      console.log("e in fetch" + error);
    });
    fetch(url).then((response) => {
      response.json().then((data) => {
        console.log("state2 from componentDidMount: " + this.state);
        console.log("rows2 from componentDidMount: " + JSON.stringify(data));
        let s = this.state;
        s.rows2 = data;
        this.setState(s);
        console.log("state2 again: " + JSON.stringify(s));
        console.log("fetch2 done");
                //  this.setState({rows: data.map(function(x) {return x.name})});
      }).catch(function(error) {
        console.log("e in fetch parse " + error);
      });
    }).catch(function(error) {
      console.log("e in fetch" + error);
    });
  }
  render() {
    console.log("state from render: " + this.state);
    console.log("rows from render: " + JSON.stringify(this.state.rows));
    let listItems = [];
    if (this.state.rows) {
      listItems = this.state.rows.map(loc => <li key={loc.name}>{loc.name}</li>);
    }
    let listItems2 = [];
    if (this.state.rows2) {
      listItems2 = this.state.rows2.map(loc => <li key={loc.name}>{loc.name}</li>);
    }
    return (
        <div>
        <ul className="Locations">
          {listItems}
        </ul>
        <ul className="Locations">
          {listItems2}
        </ul>
        </div>
    );
  }
}
export default App;
