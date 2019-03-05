import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux'
import 'normalize.css'

import './index.css'
import App from './containers/App'

import * as serviceWorker from './serviceWorker'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)

serviceWorker.register()
