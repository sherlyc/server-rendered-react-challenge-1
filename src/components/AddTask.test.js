import React from 'react'
import {shallow} from 'enzyme'
import {AddTask} from './AddTask'

it('calls add prop when button clicked', () => {
  const add = jest.fn()
  const wrapper = shallow(<AddTask add={add}/>)
  wrapper.find('input[name="name"]').simulate('change', {target: {name: 'name', value: 'eat spaghetti'}})
  wrapper.find('input[type="submit"]').simulate('click')
  expect(add).toHaveBeenCalledWith('eat spaghetti')
  expect(wrapper.state().name).toBe('')
})
