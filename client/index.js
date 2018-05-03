import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import './styles/style.css'

import store, { history } from './store'

import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

import { loadPosts } from './actions/creators'

store.dispatch(loadPosts())

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))