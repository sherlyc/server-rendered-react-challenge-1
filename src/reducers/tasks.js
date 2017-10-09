const initialState = [
  'Buy Wombats',
  '??',
  'Profit'
]
export default function (state = initialState, action) {
  switch(action.type) {
    case 'REMOVE_TASK':
      if (action.id >= 0 && action.id < state.length) {
        const nextState = [...state]
        nextState.splice(action.id, 1)
        return nextState
      }
      break

    case 'ADD_TASK':
      return [...state, action.name]

    default:
      return state
  }
}
