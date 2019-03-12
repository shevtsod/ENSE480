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

const mapStateToProps = ({ network, controls }) => ({
  network: new Network(network),
  playing: controls.playing,
  step: controls.step
})

const mapDispatchToProps = dispatch => ({
  handleReset: () => dispatch(networkCreate(networkInitialize())),
  handlePlay: network => {
    networkRunOnce(network)
    dispatch(networkUpdate(network))
  },
  handleStep: network => {
    networkRunOnce(network)
    dispatch(networkUpdate(network))
    dispatch(controlsPause())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Visualizer)
