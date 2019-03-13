import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import operations from '../redux/operations';
import UsersView from './UsersView';
import Pagination from './Pagination';

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="App">
        <UsersView />
        <Pagination />
      </div>
    );
  }
}

const mapDispatchToProp = {
  getUsers: operations.fetchItems
};

export default connect(
  null,
  mapDispatchToProp
)(App);
