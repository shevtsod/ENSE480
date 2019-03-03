import { combineReducers } from 'redux'

// Reducers
import config from './config'
import routes from './routes'

export default combineReducers({
  config,
  routes
})
