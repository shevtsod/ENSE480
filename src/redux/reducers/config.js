import { LOAD_CONFIG } from '../constants/config'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONFIG:
      return action.payload
    default:
      return state
  }
}
