import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import TaskList from './TaskList'

it('renders without crashing', () => {
  shallow(<App />)
})

it('renders a task list', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.find(TaskList).length).toBe(1)
})
