import { connect } from 'react-redux'

import Visualizer from './Visualizer'

import NeuralNetwork from '../../ann'
import { create } from './reducer'

const mapStateToProps = ({ visualizer }) => ({
  network: visualizer.network && new NeuralNetwork(visualizer.network)
})

const mapDispatchToProps = dispatch => ({
  createNetwork: network => dispatch(create(new NeuralNetwork(network)))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Visualizer)
