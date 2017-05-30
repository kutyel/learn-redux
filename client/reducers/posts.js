const posts = (state = [], { type, index }) => {
  switch (type) {
    case 'INCREMENT_LIKES':
      return [
        ...state.slice(0, index),
        { ...state[index], likes: state[index].likes + 1, liked: true },
        ...state.slice(index + 1)
      ]
    case 'DECREMENT_LIKES':
      return [
        ...state.slice(0, index),
        { ...state[index], likes: state[index].likes - 1, liked: false },
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}

export default posts
