export function remove(taskId) {
  return {
    type: 'REMOVE_TASK',
    id: taskId
  }
}
