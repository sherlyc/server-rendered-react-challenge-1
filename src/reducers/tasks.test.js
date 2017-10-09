import tasks from './tasks'
import {remove} from '../actions/tasks'

it('has three initial tasks', () => {
  expect(tasks(undefined, {}).length).toBe(3)
})

it('removes a task', () => {
  const state = ['one', 'two', 'three']
  const expected = ['one', 'three']
  const action = remove(1)

  expect(tasks(state, action)).toEqual(expected)
})
