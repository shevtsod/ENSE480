import { LOAD_CONFIG } from '../constants/config'

import config from '../../config'

export const loadConfig = () => ({
  type: LOAD_CONFIG,
  payload: config
})
