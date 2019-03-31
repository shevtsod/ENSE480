import { connect } from 'react-redux'

import Controls from './Controls'

import {
  controlsPlay,
  controlsPause,
  controlsStep
} from '../../../actions/controls'
import { layersAdd, layersRemove } from '../../../actions/layers'

const mapStateToProps = ({ network, controls, layers }) => ({
  globalError: network.globalError,
  epoch: network.epoch,
  playing: controls.playing,
  layers
})

const mapDispatchToProps = dispatch => ({
  handlePlay: () => dispatch(controlsPlay()),
  handlePause: () => dispatch(controlsPause()),
  handleStep: () => dispatch(controlsStep()),
  handleAddLayer: () => dispatch(layersAdd()),
  handleRemoveLayer: () => dispatch(layersRemove())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls)
