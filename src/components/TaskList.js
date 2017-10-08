import React, { Component } from 'react';
import {connect} from 'react-redux'

export class TaskList extends Component {
  render() {
    return (
      <div className='TaskList'>
      <h1>My Tasks</h1>
        <ul>
          { this.props.tasks.map( (t, i) => <li key={i}>{t}</li>) }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({tasks}) {
  return {tasks}
}

export default connect(mapStateToProps)(TaskList)
