import React, { Component } from 'react';
import './App.css';

import TaskList from './TaskList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <TaskList />
        </div>
      </div>
    );
  }
}

export default App;
