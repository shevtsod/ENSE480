import Network from '../ann'
import config from '../config'

export const NETWORK_CREATE = '@@network/CREATE'
export const NETWORK_UPDATE = '@@network/UPDATE'
export const NETWORK_CREATE_DATASETS = '@@network/CREATE_DATASETS'

const defaultLayers = config.network.defaultLayers

export const networkCreate = network => ({
  type: NETWORK_CREATE,
  payload: network
})

export const networkUpdate = network => ({
  type: NETWORK_UPDATE,
  payload: network
})

/*
 * Initialize a new instance of Network
 */
export const networkInitialize = (layers = defaultLayers) => {
  return Network.initialize(layers)
}

export const networkRunOnce = (network, inputs) => network.runOnce(inputs)
