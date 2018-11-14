import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from './Main'
import * as actions from '../actions/creators'

const mapStateToProps = ({ posts, comments }) => ({ posts, comments })

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
