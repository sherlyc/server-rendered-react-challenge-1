import tasks from './tasks'
import {remove, add} from '../actions/tasks'

it('has three initial tasks', () => {
  expect(tasks(undefined, {}).length).toBe(3)
})

it('removes a task', () => {
  const state = ['one', 'two', 'three']
  const expected = ['one', 'three']
  const action = remove(1)

  expect(tasks(state, action)).toEqual(expected)
})

it('adds a task', () => {
  const state = ['one', 'two']
  const expected = ['one', 'two', 'three']
  const action = add('three')

  expect(tasks(state, action)).toEqual(expected)
})
