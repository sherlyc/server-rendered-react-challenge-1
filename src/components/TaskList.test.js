import React from 'react'

import {shallow} from 'enzyme'
import {TaskList} from './TaskList'

it('renders a list of tasks', () => {
  const tasks = ['one', 'two', 'three']
  const wrapper = shallow(<TaskList tasks={tasks} />)
  expect(wrapper.find('li').length).toBe(3)
})

it('calls remove when button clicked', () => {
  const tasks = ['one', 'two', 'three']
  const remove = jest.fn()
  const wrapper = shallow(<TaskList tasks={tasks} remove={remove}/>)
  wrapper.find('#delete-0').simulate('click')
  expect(remove).toHaveBeenCalledWith(0)
  expect(remove.mock.calls.length).toBe(1)
})

