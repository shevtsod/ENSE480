// Actions
export const CREATE_NETWORK = '@@visualizer/CREATE_NETWORK'
export const UPDATE_NETWORK = '@@network/UPDATE_NETWORK'

// Action creators
export const create = network => ({
  type: CREATE_NETWORK,
  payload: { network }
})
export const update = network => ({
  type: UPDATE_NETWORK,
  payload: { network }
})

// Reducer
export default (state = {}, { type, payload }) => {
  switch (type) {
    case CREATE_NETWORK:
    case UPDATE_NETWORK:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}
