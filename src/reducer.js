import { combineReducers } from 'redux'

// Reducers
import app from './components/App/reducer'
import visualizer from './components/Visualizer/reducer'

export default combineReducers({
  app,
  visualizer
})
