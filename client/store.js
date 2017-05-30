import { createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import reducer from './reducers/index'

import posts from './data/posts'
import comments from './data/comments'

const defaultState = { posts, comments }

const store = createStore(reducer, defaultState)
export const history = syncHistoryWithStore(browserHistory, store)

export default store
