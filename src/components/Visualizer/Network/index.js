import { connect } from 'react-redux'

import Network from './Network'

import NeuralNetwork from '../../../ann'

const mapStateToProps = ({ visualizer }) => ({
  network: new NeuralNetwork(visualizer.network)
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Network)
