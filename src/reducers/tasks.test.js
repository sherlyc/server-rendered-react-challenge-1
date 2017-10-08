import tasks from './tasks'
import {remove} from '../actions/tasks'

it('has three initial tasks', () => {
  expect(tasks(undefined, {}).length).toBe(3)
})

it('removes a task', () => {
  const state = ['one', 'two', 'three']
  const expected = ['one', 'three']

  expect(tasks(state, remove(1))).toEqual(expected)
})
