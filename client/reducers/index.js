import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import posts from './posts'
import comments from './comments'

const root = combineReducers({ posts, comments, router })

export default root
