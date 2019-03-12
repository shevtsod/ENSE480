export const CONTROLS_PLAY = '@@controls/PLAY'
export const CONTROLS_PAUSE = '@@controls/PAUSE'
export const CONTROLS_STEP = '@@controls/STEP'

export const controlsPlay = () => ({
  type: CONTROLS_PLAY,
  payload: { playing: true }
})

export const controlsPause = () => ({
  type: CONTROLS_PAUSE,
  payload: { step: false }
})

export const controlsStep = () => ({
  type: CONTROLS_STEP,
  payload: { step: true }
})
