import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducer'
import middleware from './middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)
