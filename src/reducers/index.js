import { combineReducers } from 'redux'

// Reducers
import config from './config'
import controls from './controls'
import datasets from './datasets'
import network from './network'
import routes from './routes'

export default combineReducers({
  config,
  controls,
  datasets,
  network,
  routes
})
