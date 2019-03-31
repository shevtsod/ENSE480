import { connect } from 'react-redux'

import Visualizer from './Visualizer'

import Network from '../../ann/Network'

import {
  networkCreate,
  networkInitialize,
  networkUpdate,
  networkRunOnce
} from '../../actions/network'
import { controlsPause } from '../../actions/controls'
import { datasetsCreate } from '../../actions/datasets'

const mapStateToProps = ({ network, controls, datasets, layers }) => ({
  network: new Network(network),
  playing: controls.playing,
  step: controls.step,
  datasets,
  layers
})

const mapDispatchToProps = dispatch => ({
  handleReset: (layers = [], regenerateData = false) => {
    dispatch(controlsPause())
    //Re-generate datasets
    regenerateData && dispatch(datasetsCreate())
    // Re-create network
    dispatch(networkCreate(networkInitialize(layers)))
  },
  handlePlay: (network, inputs) => {
    networkRunOnce(network, inputs)
    dispatch(networkUpdate(network))
  },
  handleStep: (network, inputs) => {
    networkRunOnce(network, inputs)
    dispatch(networkUpdate(network))
    dispatch(controlsPause())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Visualizer)
