import tasks from './tasks'

it('has three initial tasks', () => {
  expect(tasks(undefined, {}).length).toBe(3)
})
