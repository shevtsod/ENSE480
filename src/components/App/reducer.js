import routes from '../../routes'
import config from '../../config'

// Reducer
const initialState = {
  config,
  routes
}

export default (state = initialState, { type }) => {
  switch (type) {
    default:
      return state
  }
}
