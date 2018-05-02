import { all, takeLatest } from 'redux-saga/effects'

import { FETCH_POSTS_REQUEST, FETCH_COMMENTS_REQUEST } from './actions/types'
import { fetchPosts, fetchComments } from './actions'

function* sagas() {
  yield all([
    takeLatest(FETCH_POSTS_REQUEST, fetchPosts),
    takeLatest(FETCH_COMMENTS_REQUEST, fetchComments)
  ])
}

export default sagas
