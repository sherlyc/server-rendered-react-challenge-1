import React from 'react'
import {shallow} from 'enzyme'
import {TaskList} from './TaskList'

it('renders a list of tasks', () => {
  const tasks = ['one', 'two', 'three']
  const wrapper = shallow(<TaskList tasks={tasks}/>)
  expect(wrapper.find('li').length).toBe(3)
})
