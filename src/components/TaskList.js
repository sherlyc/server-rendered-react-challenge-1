import React, { Component } from 'react';
import {connect} from 'react-redux'
import {remove} from '../actions/tasks'
import AddTask from './AddTask'

export class TaskList extends Component {
  render() {
    return (
      <div className='TaskList'>
      <h1>My Tasks</h1>
      <AddTask />
        <ul>
          {
            this.props.tasks.map( (t, i) => {
              return (
                <li key={i}>
                  {t} - <button id={`delete-${i}`} onClick={() => {this.props.remove(i)}}>delete</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({tasks}) {
  return {tasks}
}

function mapDispatchToProps(dispatch) {
  return {
    remove: (id) => {dispatch(remove(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
