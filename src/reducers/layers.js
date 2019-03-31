import { LAYERS_ADD, LAYERS_REMOVE } from '../actions/layers'
import config from '../config'

const initialState = config.network.defaultLayers

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LAYERS_ADD:
      return state
        .slice(0, state.length - 1)
        .concat([Math.floor(Math.random() * 5) + 1]) // Random number from 1 to 5
        .concat(state.slice(state.length - 1, state.length))

    case LAYERS_REMOVE:
      return state
        .slice(0, state.length - 2)
        .concat(state.slice(state.length - 1, state.length))

    default:
      return state
  }
}
