import { call, put } from 'redux-saga/effects'

import { loadPostsSuccess, loadCommentsSuccess } from './creators'

const api = url => fetch(url).then(res => res.json())

export function* fetchPosts() {
  try {
    const { data } = yield call(
      api,
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${
        process.env.INSTAGRAM_ACCESS_TOKEN
      }`
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
      `https://api.instagram.com/v1/media/${mediaId}/comments?access_token=${
        process.env.INSTAGRAM_ACCESS_TOKEN
      }`
    )
    yield put(loadCommentsSuccess(mediaId, data))
  } catch (err) {
    console.error(`ERROR in loadComments: ${err}`)
  }
}
