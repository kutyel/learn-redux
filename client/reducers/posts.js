import * as types from '../actions/actionTypes'

const posts = (state = [], { type, index, posts }) => {
  switch (type) {
    case types.INCREMENT_LIKES:
      return [
        ...state.slice(0, index),
        { ...state[index], likes: state[index].likes + 1, liked: true },
        ...state.slice(index + 1)
      ]
    case types.DECREMENT_LIKES:
      return [
        ...state.slice(0, index),
        { ...state[index], likes: state[index].likes - 1, liked: false },
        ...state.slice(index + 1)
      ]
    case types.LOAD_POSTS_SUCCESS:
      return posts
    default:
      return state
  }
}

export default posts
