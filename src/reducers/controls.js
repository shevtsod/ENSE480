import {
  CONTROLS_PLAY,
  CONTROLS_PAUSE,
  CONTROLS_STEP
} from '../actions/controls'

const initialState = {
  playing: false,
  step: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONTROLS_PLAY:
      return {
        ...state,
        playing: true,
        step: false
      }
    case CONTROLS_PAUSE:
      return {
        ...state,
        playing: false,
        step: false
      }
    case CONTROLS_STEP:
      return {
        ...state,
        playing: false,
        step: true
      }
    default:
      return state
  }
}
