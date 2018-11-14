import createSagaMiddleware from 'redux-saga'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, compose, applyMiddleware } from 'redux'

import sagas from './sagas'
import reducer from './reducers'

const defaultState = { posts: [], comments: [] }
const sagaMiddleware = createSagaMiddleware()
const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)

sagaMiddleware.run(sagas)

if (module.hot) {
  module.hot.accept('./reducers/', () => store.replaceReducer(reducer))
}

export default store
