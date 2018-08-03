import React, { Component } from 'react';

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  componentDidMount() {
    let url = this.props.url;
    console.log("fetching locations (via props)" + url);
    fetch(url).then((response) => {
      response.json().then((rows) => {
        console.log("locations state from componentDidMount: " + this.state);
        console.log("locations rows from componentDidMount: " + JSON.stringify(rows));
        this.setState({locationRows: rows});
        console.log("fetch1 done");
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
    if (this.state.locationRows) {
      listItems = this.state.locationRows.map(loc => <li key={loc.name}>{loc.name}</li>);
    }
    return (
        <ul className="Locations">
          {listItems}
        </ul>
    );
  }
}

export default Locations
