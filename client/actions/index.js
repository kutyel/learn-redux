import { call, put } from 'redux-saga/effects'

import { loadPostsSuccess, loadCommentsSuccess } from './creators'

import TOKEN from './token' // TODO: replace for dot-env

const api = url => fetch(url).then(res => res.json())

export function* fetchPosts(/* action */) {
  try {
    const { data } = yield call(
      api,
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${TOKEN}`
    )
    yield put(loadPostsSuccess(data))
  } catch (err) {
    console.error(`ERROR in loadPosts: ${err}`)
  }
}

export function* fetchComments({ mediaId }) {
  try {
    const { data } = yield call(
      api,
      `https://api.instagram.com/v1/media/${mediaId}/comments?access_token=${TOKEN}`
    )
    yield put(loadCommentsSuccess(mediaId, data))
  } catch (err) {
    console.error(`ERROR in loadComments: ${err}`)
  }
}
