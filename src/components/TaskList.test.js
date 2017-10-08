import React from 'react'
import sinon from 'sinon'

import {shallow} from 'enzyme'
import {TaskList} from './TaskList'

it('renders a list of tasks', () => {
  const tasks = ['one', 'two', 'three']
  const wrapper = shallow(<TaskList tasks={tasks} remove={sinon.stub()}/>)
  expect(wrapper.find('li').length).toBe(3)
})
