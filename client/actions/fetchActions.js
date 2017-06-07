import TOKEN from './token'
import { loadPostsSuccess, loadCommentsSuccess } from './actionCreators'

const fetchPosts = () =>
  window.fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${TOKEN}`)

const fetchComments = mediaId =>
  window.fetch(`https://api.instagram.com/v1/media/${mediaId}/comments?access_token=${TOKEN}`)

export const loadPosts = userId => dispatch =>
  fetchPosts(userId)
    .then(res => res.json())
    .then(({ data }) => dispatch(loadPostsSuccess(data)))
    .catch(err => console.error(err))

export const loadComments = mediaId => dispatch =>
  fetchComments(mediaId)
    .then(res => res.json())
    .then(({ data }) => dispatch(loadCommentsSuccess(mediaId, data)))
    .catch(err => console.error(err))
