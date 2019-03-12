import { connect } from 'react-redux'

import Network from './Network'

import NeuralNetwork from '../../../ann'

const mapStateToProps = ({ network }) => ({
  network: new NeuralNetwork(network)
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Network)
