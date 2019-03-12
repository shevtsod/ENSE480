import {
  NETWORK_CREATE,
  NETWORK_UPDATE,
  NETWORK_CREATE_DATASETS,
  networkInitialize
} from '../actions/network'

const initialState = networkInitialize()

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NETWORK_CREATE:
    case NETWORK_UPDATE:
    case NETWORK_CREATE_DATASETS:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}
