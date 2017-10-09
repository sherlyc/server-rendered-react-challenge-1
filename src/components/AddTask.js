import React, {Component} from 'react'
import {connect} from 'react-redux'
import {add} from '../actions/tasks'

export class AddTask extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e) {
    this.props.add(this.state.name)
    this.setState({name: ''})
  }
  render() {
    return (
      <div className='AddTask'>
        <input type='text' name='name' onChange={(e) => this.handleChange(e)} value={this.state.name}/>
        <input type='submit' value='Add' onClick={(e) => this.handleSubmit(e)}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (taskName) => dispatch(add(taskName))
  }
}

export default connect(undefined, mapDispatchToProps)(AddTask)
