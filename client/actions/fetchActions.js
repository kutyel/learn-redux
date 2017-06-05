import TOKEN from './token'
import loadPostsSuccess from './actionCreators'

const fetchPosts = userId =>
  window.fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${TOKEN}`)

// const fetchComments = mediaId =>
//   window.fetch(`https://api.instagram.com/v1/media/${mediaId}/comments?access_token=${TOKEN}`)

export const loadPosts = userId => dispatch =>
  fetchPosts(userId)
    .then(res => res.json())
    .then(({ data, meta: { code } }) => code === 200 && dispatch(loadPostsSuccess(data)))
    .catch(err => console.error(err))
