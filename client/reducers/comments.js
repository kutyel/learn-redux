const comments = (state = [], action) => {
  if (action.postId) {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}

const postComments = (state = [], { type, index, author: user, comment: text }) => {
  switch (type) {
    case 'ADD_COMMENT':
      return [...state, { user, text }]
    case 'REMOVE_COMMENT':
      return [...state.slice(0, index), ...state.slice(index + 1)]
    default:
      return state
  }
}

export default comments
