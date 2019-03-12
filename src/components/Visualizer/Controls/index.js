import { connect } from 'react-redux'

import Controls from './Controls'

import {
  controlsPlay,
  controlsPause,
  controlsStep
} from '../../../actions/controls'

const mapStateToProps = ({ network, controls }) => ({
  epoch: network.epoch,
  playing: controls.playing
})

const mapDispatchToProps = dispatch => ({
  handlePlay: () => dispatch(controlsPlay()),
  handlePause: () => dispatch(controlsPause()),
  handleStep: () => dispatch(controlsStep())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls)
