export function remove(taskId) {
  return {
    type: 'REMOVE_TASK',
    id: taskId
  }
}

export function add(name) {
  return {
    type: 'ADD_TASK',
    name
  }
}
