import { LOAD_ROUTES } from '../constants/routes'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROUTES:
      return action.payload
    default:
      return state
  }
}
