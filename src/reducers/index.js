import { combineReducers } from 'redux'

// Reducers
import config from './config'
import controls from './controls'
import datasets from './datasets'
import layers from './layers'
import network from './network'
import routes from './routes'

export default combineReducers({
  config,
  controls,
  datasets,
  layers,
  network,
  routes
})
