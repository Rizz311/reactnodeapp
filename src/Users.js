import React, { Component } from 'react';
class Users extends Component {
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
      response.json().then((rows) => {
        console.log("state1 from componentDidMount: " + this.state);
        console.log("rows1 from componentDidMount: " + JSON.stringify(rows));
        this.setState({userRows: rows});
        console.log("fetch1 done");
				//	this.setState({rows: data.map(function(x) {return x.name})});
      }).catch(function(error) {
        console.log("e in fetch parse " + error);
      });
    }).catch(function(error) {
      console.log("e in fetch" + error);
    });
  }

  render() {
    console.log("state from render: " + this.state);
    console.log("rows from render: " + JSON.stringify(this.state.userRows));

    let listItems = [];
    if (this.state.userRows) {
      listItems = this.state.userRows.map(user => <li key={user.username}>{user.username}</li>);
    }
    return (
        <ul className="Users">
          {listItems}
        </ul>
    );
  }
}

export default Users
